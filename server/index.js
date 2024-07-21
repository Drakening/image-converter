const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/convert', upload.single('file'), async (req, res) => {
  const { format } = req.body;
  const filePath = path.join(__dirname, 'uploads', req.file.filename);

  try {
    let convertedFileBuffer;
    if (format === 'webp') {
      convertedFileBuffer = await sharp(filePath).webp({ quality: 80 }).toBuffer();
    } else if (format === 'jpg' || format === 'jpeg') {
      convertedFileBuffer = await sharp(filePath).jpeg({ quality: 80 }).toBuffer();
    } else if (format === 'ico') {
      convertedFileBuffer = await sharp(filePath).resize(256, 256).toFormat('ico').toBuffer();
    } else {
      convertedFileBuffer = await sharp(filePath).png().toBuffer();
    }

    res.set('Content-Type', `image/${format}`);
    res.send(convertedFileBuffer);
  } catch (error) {
    res.status(500).send('Error converting file');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
