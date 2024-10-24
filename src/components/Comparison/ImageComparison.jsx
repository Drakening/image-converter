import React, { useState } from 'react';
import Features from '../Features/Features'
import './ImageComparison.css';
import beforeImage from '../../assets/before.jpg';
import afterImage from '../../assets/after.webp';

const ImageComparison = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <section>
    <div className="Heading">
            <h1 className="Title">Features</h1>
            <p className="Description">With Chameleon you can convert images without losing quality. Can you spot the difference between these two images? One of them is Jpg(1mb) converted to webp(0.25mb)</p>
        </div>
      <div className="image-comparison">
        <div className="images-container">
          <img
            className="before-image"
            src={beforeImage}
            alt="Before"
            style={{ width: `${sliderValue}%` }}
          />
          <img className="after-image" src={afterImage} alt="After" />
          <div
            className="slider-line"
            style={{ left: `${sliderValue}%` }}
          ></div>
          <div
            className="slider-icon"
            style={{ left: `${sliderValue}%` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
          <input
            type="range"
            className="slider"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
          />
        </div>
      </div>
      <Features />
    </section>
  );
};

export default ImageComparison;
