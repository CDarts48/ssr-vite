import express from 'express';
import rateLimit from 'express-rate-limit';
import { renderPage } from 'vike/server';
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

app.post('/upload-files', upload.array('files'), (req, res) => {
  res.status(200).send('Files uploaded successfully');
});

app.get('*', async (req, res) => {
  const pageContextInit = { urlOriginal: req.originalUrl };
  try {
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return res.status(200).send('404 Page Not Found');
    res.status(httpResponse.statusCode).send(httpResponse.body);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error rendering page');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});