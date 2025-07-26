import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Steve',
    image: process.env.PUBLIC_URL + '/images/steve.jpg',
    rating: 5,
    text: 'Perfect for events. Delicious food and great service, all affordable!',
  },
  {
    name: 'Anna',
    image: process.env.PUBLIC_URL + '/images/anna.jpg',
    rating: 4,
    text: 'The ambiance and desserts were incredible!Especially loved the lemon- flavored desserts!',
  },
  {
    name: 'Liam',
    image: process.env.PUBLIC_URL + '/images/liam.jpg',
    rating: 5,
    text: 'Authentic Mediterranian taste and great hospitality.',
  },
  {
    name: 'Nina',
    image: process.env.PUBLIC_URL + '/images/nina.jpg',
    rating: 5,
    text: 'Beautiful place and exceptional service!',
  },
  {
    name: 'Raj',
    image: process.env.PUBLIC_URL + '/images/raj.jpg',
    rating: 4,
    text: 'Loved the home- style Greek Salad and fast delivery!',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const { name, image, rating, text } = testimonials[current];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonial-card">
        <button className="nav-button" onClick={handlePrev}>❮</button>

        <div className="testimonial-content">
          <img src={image} alt={name} className="testimonial-img" />
          <h3>{name}</h3>
          <div className="stars">
            {Array.from({ length: rating }, (_, i) => <span key={i}>⭐</span>)}
          </div>
          <p className="text">“{text}”</p>
        </div>

        <button className="nav-button" onClick={handleNext}>❯</button>
      </div>
    </section>
  );
}
