import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import './Hero.css';

const images = [
  { src: process.env.PUBLIC_URL + '/image1.jpg', caption: 'Our Signature Dish' },
  { src: process.env.PUBLIC_URL + '/image2.jpg', caption: 'Fresh Ingredients' },
  { src: process.env.PUBLIC_URL + '/image3.jpg', caption: 'Authentic Ambience' }
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); //
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Little Lemon ,</h1>
        <h1>Chicago</h1>
        <p>We are a family owned Mediterranean restaurant, <br></br>focused on traditional recipes served with a modern twist.</p>
        
        <button
          className="reserve-button"
          onClick={() => navigate('/reservations')}
        >
          Reserve a Table
        </button>
        
      </div>

      <div className="polaroid-frame-wrapper">
        <div className="polaroid-frame">
          <img src={images[index].src} alt="Slideshow" className="polaroid-image" />
          <p className="polaroid-caption">{images[index].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
