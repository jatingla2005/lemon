import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Reservation.css';
import bgImage from '../assets/bg1.jpg'; // background image

export default function Reservation() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const twoWeeksLater = new Date(today);
  twoWeeksLater.setDate(today.getDate() + 14);

  const formatDate = (date) => date.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    occasion: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      guests: '',
      date: '',
      time: '',
      occasion: '',
    });
  };

  return (
    <>
      <Navbar />
      <div
        className="reservation-page"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 2rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            zIndex: 0,
          }}
        ></div>

        <div className="reservation-container" style={{ zIndex: 1 }}>
          <h2>Reserve a Table</h2>

          {submitted && (
            <div className="success-notification">
              <img src="/images/image.png" alt="Little Lemon Logo" className="success-logo" />
              <div className="success-text">
                <strong>Successfully reserved!</strong><br />
                We hope to see you soon.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="reservation-form">
            <div className="name-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                pattern="[A-Za-z]+"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                pattern="[A-Za-z]+"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone (e.g. 312-555-1234)"
              required
              pattern="^\d{3}-\d{3}-\d{4}$"
              value={formData.phone}
              onChange={handleChange}
            />

            <select name="guests" required value={formData.guests} onChange={handleChange}>
              <option value="">Table for...</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="10">10</option>
            </select>

            <input
              type="date"
              name="date"
              required
              min={formatDate(tomorrow)}
              max={formatDate(twoWeeksLater)}
              value={formData.date}
              onChange={handleChange}
            />

            <select name="time" required value={formData.time} onChange={handleChange}>
              <option value="">Choose a time</option>
              <optgroup label="Morning">
                <option>7:00</option><option>7:30</option><option>8:00</option>
                <option>8:30</option><option>9:00</option><option>9:30</option><option>10:00</option>
              </optgroup>
              <optgroup label="Afternoon">
                <option>12:30</option><option>1:00</option><option>1:30</option>
                <option>2:00</option><option>2:30</option>
              </optgroup>
              <optgroup label="Evening & Dinner">
                <option>5:00</option><option>5:30</option><option>6:00</option><option>6:30</option>
                <option>7:00</option><option>7:30</option><option>8:00</option>
                <option>8:30</option><option>9:00</option><option>9:30</option><option>10:00</option>
              </optgroup>
            </select>

            <select name="occasion" required value={formData.occasion} onChange={handleChange}>
              <option value="">Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="office-party">Office Party</option>
              <option value="none">No Occasion</option>
            </select>

            <button type="submit">Book Table</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
