import React from 'react'
import Aboutpic from '../../assets/about.png';
import './about.css';

const About = () => {
  return (
    <section className="about">
        <div className="aboutHeading">
            <h1 className="aboutTitle">Chameleon Image Converter</h1>
            <p className="aboutDescription">Chameleon lets you change image extensions quickly and effortlessly. It doesn’t matter if you have many images to convert — it can get the job done without downloading any software or installing plugins.</p>
        </div>
        <div className="container">
            <div className="wrapper">
                <div className="content">
                    <h2 className="contentHeading">Fast conversions & Easy to use</h2>
                    <p className="contentDescription">With Chameleon, you can convert to any image format within seconds, even if you are working on large-sized files. Even better, you do not need any experience using image converter tools. It is as easy as choosing your file and clicking a couple of buttons.</p>
                    <p className="contentDescription">
                        It is highly intuitive, easy to use, and virtually anybody can navigate it with confidence and get the most out of it.
                    </p>
                </div>
                <div className="image">
                    <img src={Aboutpic} alt="About Us"/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About
