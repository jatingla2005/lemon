import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Contact Info */}
        <div className="footer-section">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Little Lemon Logo" className="footer-logo" />
        </div>        
        <div className="footer-section">          
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Address: 1648 W Ontario St
                Chicago, Illinois(IL), 60622, USA</p>
            <p>Phone: (312) 226-6485</p>
            <p>Email: littlelemon.chicago@gmail.com</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Little Lemon</h4>
          <ul className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/some-page">About</a></li>
            <li><a href="/some-page">Menu</a></li>
            <li><Link to="/reservations">Reservations</Link></li>
            
            <li><a href="/some-page">Order Online</a></li>
            <li><a href="/some-page">Login/Signup</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Find us in Social networks!</h4>
          <div className="social-icons">
            <a href="twitter.com"><FaXTwitter /></a>
            <a href="facebook.com"><FaFacebook /></a>
            <a href="instagram.com"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
