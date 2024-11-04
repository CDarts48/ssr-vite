import express from 'express';
import rateLimit from 'express-rate-limit';
import { createRender } from 'vite-plugin-ssr';
import nodemailer from 'nodemailer';
import multer from 'multer';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const renderPage = createRender({ isProduction: process.env.NODE_ENV === 'production', root: `${process.cwd()}/` });

// Enable rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

// Apply the rate limiting middleware to all routes
app.use(limiter);

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.use(express.json());

// Set up multer to store uploaded files in the 'uploads' directory
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 1000000, // Limit file size to 1MB
    files: 5 // Limit number of files
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
      return cb(new Error('Please upload a JPG, JPEG, PNG or PDF file'));
    }
    cb(undefined, true);
  }
});

app.post('/send-email', upload.array('files'), async (req, res) => {
  const { name, email, phone, address, details } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nDetails: ${details}`,
    attachments: req.files.map(file => ({
      filename: file.originalname,
      path: file.path,
    })),
  };

  try {
    await transporter.sendMail(mailOptions);
    // Delete the uploaded files from the server after the email is sent
    req.files.forEach(file => fs.unlinkSync(file.path));
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.get('*', (req, res) => {
  let url = req.url;
  // Map the '/' route to the '/home' page
  if (url === '/') {
    url = '/home';
  }
  renderPage(url).then(pageContext => {
    const {html} = pageContext;
    res.end(html);
  });
});

app.listen(3000);