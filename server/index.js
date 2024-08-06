const express = require('express'); 
const multer = require('multer'); 
const sharp = require('sharp'); 
const path = require('path');
const cors = require('cors');

const app = express(); 

// File filter to accept only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Incorrect format'), false);
  }
};

const upload = multer({ 
  dest: 'uploads/',
  fileFilter: fileFilter 
}); // Configure multer to save uploaded files to the 'uploads' directory

app.use(cors());

app.post('/convert', upload.single('file'), async (req, res) => {
  const { format } = req.body; 
  const filePath = path.join(__dirname, 'uploads', req.file.filename); // Get the file path of the uploaded file

  try {
    let convertedFileBuffer; // Variable to store the converted file's buffer

    // Convert the uploaded file to the desired format using sharp
    if (format === 'webp') {
      convertedFileBuffer = await sharp(filePath).webp({ quality: 80 }).toBuffer();
    } else if (format === 'jpg' || format === 'jpeg') {
      convertedFileBuffer = await sharp(filePath).jpeg({ quality: 80 }).toBuffer();
    } else if (format === 'ico') {
      convertedFileBuffer = await sharp(filePath).resize(256, 256).toFormat('ico').toBuffer(); 
    } else {
      convertedFileBuffer = await sharp(filePath).png().toBuffer(); 
    }

    // Set the response content type to the desired image format
    res.set('Content-Type', `image/${format}`);
    
    // Send the converted file buffer as the response
    res.send(convertedFileBuffer);
  } catch (error) {
    // Handle errors during the conversion process
    res.status(500).send('Error converting file');
  }
});

// Error handling middleware for multer
app.use((err, req, res, next) => {
  if (err.message === 'Incorrect format') {
    return res.status(400).send('Incorrect file format');
  }
  next(err);
});

// Start the server and listen on port 5000
app.listen(5000); 
