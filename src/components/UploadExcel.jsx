import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { toast } from 'react-toastify';

function UploadExcel() {
  const [file, setFile] = useState(null);

  // Handle file upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Read the Excel file and send it as FormData
  const handleFileUpload = () => {
    if (!file) {
      alert('Please upload a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    sendDataToBackend(formData);
  };

  // Send the file to the backend as FormData
  const sendDataToBackend = async (formData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://trackbe.onrender.com/upload', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data uploaded successfully', response.data);
      toast.success('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading data', error);
      toast.error('Error uploading file');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Excel</button>
    </div>
  );
}

export default UploadExcel;
