import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contactUs">
        <div className="contactContainer">
          <div className="contactTitle">
            Vibrant, Designer and <span className="color">Enigmatic</span>
          </div>
          <div className="description1">
            If you're seeking something as rare and one-of-a-kind as you are, don't hesitate to reach out to us.
          </div>
          <div className="description2">
            <a href="mailto:Chameleon@gmail.com" className="btn dark">Email Us</a>
          </div>
        </div>
    </section>
  );
};

export default Contact