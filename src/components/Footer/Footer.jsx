import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

const servicesLinks = [
  "Hardware Design & Integration",
  "Kiosk Machine Fabrication",
  "Embedded Systems & Microcontroller Programming",
  "Technical CAD & 3D Modeling",
  "Prototype Development",
  "Technical Maintenance & Troubleshooting",
  "Portfolio Mentoring"
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            {servicesLinks.map((service, index) => (
              <li key={index}><a href="#services">{service}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>
            <FaMapMarkerAlt /> &nbsp; Brgy. Daungan Mauban, Quezon
          </p>
          <p>
            <FaEnvelope /> &nbsp; <a href="mailto:michaellaureles613@gmail.com">michaellaureles613@gmail.com</a>
          </p>
          <p>
            <FaPhone /> &nbsp; <a href="tel:+639464215458">+639464215458</a>
          </p>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/fvckyahoocom" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Indeed"><SiIndeed /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Michael Laureles. <br /> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 