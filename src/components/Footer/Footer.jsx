import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        Copyright @2024 Chameleon All Rights Reserved
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/thando-mkhonza-644453263" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Drakening" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
