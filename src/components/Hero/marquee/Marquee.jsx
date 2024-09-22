import React from "react";
import "./Marquee.css";
import png from '../../../assets/png.png';
import ico from '../../../assets/ico.png';
import jpg from '../../../assets/jpg.png';
import svg from '../../../assets/svg.png';
import webp from '../../../assets/webp.png';

const images = [
  webp,
  svg,
  jpg,
  ico,
  png,
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`file types ${index + 1}`} />
        ))}
      </div>
      <div className="marquee gradient-left"></div>
      <div className="marquee gradient-right"></div>
    </div>
  );
};

export default Marquee;
