// VideoShowcase.jsx
import React from 'react';
import './VideoShowcase.css';
import { Info } from 'react-feather'; // Using react-feather icons
import imageSrc from './dally.webp'; // Replace with the correct image path

const VideoShowcase = () => {
  return (
    <div className="video-showcase">
      <div className="image-container">
        <img src={imageSrc} alt="AI-Powered Defect Detection" className="demo-image" />
        
        <div className="ai-badge">
          <Info size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
