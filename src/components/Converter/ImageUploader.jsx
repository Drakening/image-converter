import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './imageUploader.css';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      format: 'png',
      convertedFile: null
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  const handleFormatChange = (e, index) => {
    const newFiles = [...files];
    newFiles[index].format = e.target.value;
    setFiles(newFiles);
  };

  const handleConvert = async (index) => {
    const fileToConvert = files[index];
    const formData = new FormData();
    formData.append('file', fileToConvert.file);
    formData.append('format', fileToConvert.format);

    try {
      const response = await axios.post('http://localhost:5000/convert', formData, {
        responseType: 'blob',
      });
      const newFiles = [...files];
      newFiles[index].convertedFile = URL.createObjectURL(response.data);
      setFiles(newFiles);
    } catch (error) {
      console.error('Error converting file:', error);
    }
  };

  const handleRemove = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  return (
    <div className="image-uploader">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>
      <div className="file-list">
        {files.map((fileWrapper, index) => (
          <div key={index} className="file-item">
            <img src={URL.createObjectURL(fileWrapper.file)} alt={fileWrapper.file.name} className="thumbnail" />
            <div className="file-details">
              <p>{fileWrapper.file.name}</p>
              <p>{fileWrapper.file.type}</p>
              <select value={fileWrapper.format} onChange={(e) => handleFormatChange(e, index)}>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WEBP</option>
                <option value="ico">ICO</option>
              </select>
              <button onClick={() => handleConvert(index)}>Convert</button>
              {fileWrapper.convertedFile && (
                <a href={fileWrapper.convertedFile} download={`converted.${fileWrapper.format}`}>
                  <button>Download</button>
                </a>
              )}
            </div>
            <button className="remove-button" onClick={() => handleRemove(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
