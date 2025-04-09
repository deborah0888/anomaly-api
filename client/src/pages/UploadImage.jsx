import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/UploadImage.css'; // Create this file for styling

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImageUrl(response.data.imageUrl);
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Image upload failed. Please try again.');
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImage;