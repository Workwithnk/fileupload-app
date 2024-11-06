'use client';
import React, { useState } from 'react';
import axios from 'axios';
import FinalScreen from '@/components/uploads/FinalScreen';
import ErrorScreen from '@/components/uploads/ErrorScreen';
import UploadScreen from '@/components/uploads/UploadScreen';
import TableView from '@/components/TableView';

const FileUpload = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileTypeErr, setFileTypeErr] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [allFiles, setAllFiles] = useState([]);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    // Validate file type
    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setLoading(true);  // Show loading message

      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        setLoading(true);
        const response = await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response) {
          setLoading(false)
          setMessage(`Upload Complete`);
          setFile(response.data.originalname);
          setFileUploaded(true);

          const fileObj = {
            name: response.data.originalname,
            url: response.data.location
          }

          setAllFiles([...allFiles, fileObj]);

        } else {
          setLoading(false)
          setMessage('Uploading file');
        }
      } catch (error) {
        setLoading(false)
        setMessage('Error uploading the file');
      } finally {
        setLoading(false);  // Hide loading message
      }
    } else {
      setMessage('.jpeg, .jpg, .png files allowed');
      setFileTypeErr(true);
    }
  };

  return (
    <div className=' flex flex-col lg:flex-row justify-center items-center bg-slate-100 p-5 h-screen'>
      <label htmlFor='dropzone-file' className={`rounded-lg border-2 ${fileUploaded ? 'border-2 border-green-500' : fileTypeErr ? 'border-2 border-red-500' : 'border-dashed border-gray-400'} flex flex-col justify-center items-center max-w-[200px] w-full h-[200px] bg-gray-100`} >

        {fileUploaded === false ?
          fileTypeErr ? <ErrorScreen message={message} setFileUploaded={setFileUploaded} setFileTypeErr={setFileTypeErr} /> :
            <UploadScreen loading={loading} handleFileChange={handleFileChange} /> : <FinalScreen message={message} file={file} setFileUploaded={setFileUploaded} />}
      </label>

      <TableView allFiles={allFiles} />

    </div>
  );
};

export default FileUpload;
