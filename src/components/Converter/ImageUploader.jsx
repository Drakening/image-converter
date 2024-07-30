import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import './imageUploader.css';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Handle rejected files
    if (rejectedFiles.length > 0) {
      rejectedFiles.forEach(file => {
        toast.error(`File type not accepted: ${file.file.name}`);
      });
    }

    const newFiles = acceptedFiles.map(file => ({
      file,
      format: 'png',
      convertedFile: null,
      progress: 0,
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
    onDropRejected: rejectedFiles => {
      rejectedFiles.forEach(file => {
        toast.error(`File type not accepted: ${file.file.name}`);
      });
    }
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
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          const newFiles = [...files];
          newFiles[index].progress = progress;
          setFiles(newFiles);
        },
      });

      const newFiles = [...files];
      newFiles[index].convertedFile = URL.createObjectURL(response.data);
      newFiles[index].progress = 100;
      setFiles(newFiles);
    } catch (error) {
      toast.error('Error converting file');
      console.error('Error converting file:', error);
    }
  };

  const handleRemove = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  return (
    <div className="image-uploader">
      <Toaster />
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <button className="primaryButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 w-8 h-8"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path><line x1="16" x2="22" y1="5" y2="5"></line><line x1="19" x2="19" y1="2" y2="8"></line><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
          Choose Images
        </button>
        <p>or Drag your images here</p>
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
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${fileWrapper.progress}%` }}>
                {fileWrapper.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
