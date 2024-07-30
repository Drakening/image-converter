import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contactUs">
        <div className="contactContainer">
          <div className="contactTitle">
          Transforming Images with <span className="color">Chameleon</span>
          </div>
          <div className="description1">
          Whether you need a quick conversion or a complete image transformation, Chameleon is here to help. Reach out to us for all your image conversion queries.
          </div>
          <div className="description2">
            <a href="mailto:Chameleon@gmail.com" className="btn dark">Contact Us</a>
          </div>
        </div>
    </section>
  );
};

export default Contact