import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Little Lemon,</h2>
          <h3>Chicago</h3>
          <p>
            Founded by college friends Jamal and Elena, Little Lemon began as a weekend pop-up
            in Chicago’s farmer's markets. Their passion for Mediterranean flavors and seasonal
            ingredients gained a loyal following. What started as a tiny booth is now a bustling
            restaurant, where dishes are inspired by Greek, Lebanese, and Turkish family recipes.
            The heart of the kitchen is community, freshness, and a zest for bold flavors.
          </p>
        </div>
        <div className="about-images">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + "/images/jamal.jpg"} alt="Chef 1" className="about-image top-image" />
            <img src={process.env.PUBLIC_URL + "/images/elena.jpg"} alt="Chef 2" className="about-image bottom-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
