import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ScrollLink to="about-us" smooth={true} duration={500} className="footer-link">About Us</ScrollLink>
        <ScrollLink to="contact-us" smooth={true} duration={500} className="footer-link">Contact Us</ScrollLink>
        <ScrollLink to="privacy" smooth={true} duration={500} className="footer-link">Privacy</ScrollLink>
        <ScrollLink to="terms" smooth={true} duration={500} className="footer-link">Terms</ScrollLink>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
