// components/Hero.js
import React from 'react';
import './Hero.css';
import VideoShowcase from './VideoShowcase';
const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Smart Anomaly Detection with AI-Powered Precision</h1>
      <p className="hero-subtitle">Enhancing Industrial Quality with Synthetic Data & AI-driven Insights.</p>
      <p className="no-credit">Visualizing Anomalies, Optimizing Performance</p>
      
      <VideoShowcase />
    </section>
  );
};

export default Hero;