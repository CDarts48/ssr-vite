import express from 'express';
import rateLimit from 'express-rate-limit';
import { renderPage } from 'vite-plugin-ssr/server';
import nodemailer from 'nodemailer';
import multer from 'multer';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

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

  console.log('Form submission received:', { name, email, phone, address, details });

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
    console.log('Email sent successfully');
    // Delete the uploaded files from the server after the email is sent
    req.files.forEach(file => fs.unlinkSync(file.path));
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.get('*', async (req, res) => {
  let url = req.url;
  // Map the '/' route to the '/home' page
  if (url === '/') {
    url = '/home';
  }
  try {
    const pageContext = await renderPage({ url });
    const { html } = pageContext;
    res.end(html);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error rendering page');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});