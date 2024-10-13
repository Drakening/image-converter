import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import { FaImage } from 'react-icons/fa';
import './imageUploader.css';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
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
    setIsLoading(true);
    const fileToConvert = files[index];
    const formData = new FormData();
    formData.append('file', fileToConvert.file);
    formData.append('format', fileToConvert.format);

    try {
      const response = await axios.post('https://server-mqak.onrender.com/convert', formData, {
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
      toast.success('File converted successfully');
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      } else if (error.request) {
        toast.error('No response received from server. Please try again.');
      } else {
        toast.error('Error converting file. Please try again.');
      }
      console.error('Error converting file:', error);
    } finally {
      setIsLoading(false);
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
            <FaImage className="thumbnail" />
            <div className="file-details">
              <div className="file-info">
                <p className="file-name">{fileWrapper.file.name}</p>
                <p className="file-progress">
                  {fileWrapper.progress === 0
                    ? 'Ready to convert'
                    : fileWrapper.progress === 100
                    ? 'Conversion complete'
                    : `Converting: ${fileWrapper.progress}%`}
                </p>
              </div>
              <div className="file-action">
                <select className="format-select" value={fileWrapper.format} onChange={(e) => handleFormatChange(e, index)}>
                  <option value="png">PNG</option>
                  <option value="jpg">JPG</option>
                  <option value="jpeg">JPEG</option>
                  <option value="webp">WEBP</option>
                  <option value="ico">ICO</option>
                </select>
              </div>
              <div className="file-action">
                {fileWrapper.convertedFile ? (
                  <a href={fileWrapper.convertedFile} download={`converted.${fileWrapper.format}`}>
                    <button className="download-button">Download</button>
                  </a>
                ) : (
                  <button
                    className="convert-button"
                    onClick={() => handleConvert(index)}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Converting...' : 'Convert'}
                  </button>
                )}
              </div>
            </div>
            <button className="remove-button" onClick={() => handleRemove(index)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
