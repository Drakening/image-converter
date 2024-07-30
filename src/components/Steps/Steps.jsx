import React from 'react';
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import './steps.css';


const Steps = () => {
  return (
    <section className="steps-section">
        <div className="stepsHeading">
            <h1 className="title">How to convert your images in 3 steps</h1>
            <p className="tileDescription">Our online Image converter tool allows you to change photo formats in just a few clicks, and it can even convert images in batches for minimal hassle. Choose your image and convert to any format you want.</p>
        </div>
        <div className="stepsCols">
            <div className="stepCard">
                <div className="cardTop">
                    <div className="stepNum">
                        <h3>Step 1</h3>
                    </div>
                    <div className="imageCont">
                        <img src={Step1} alt="upload"/>
                    </div>
                </div>
                <div className="cardBottom">
                    <h3>Upload your image</h3>
                    <p>Upload your file(s) by clicking the Choose Files button or dragging the image(s) in the dotted area.</p>
                </div>
            </div>
            <div className="stepCard stepCard2">
                <div className="cardTop">
                    <div className="stepNum">
                        <h3>Step 2</h3>
                    </div>
                    <div className="imageCont">
                        <img src={Step2} alt="convert"/>
                    </div>
                </div>
                <div className="cardBottom">
                    <h3>Click Convert on the right</h3>
                    <p>Once the files are uploaded, click Start Conversion on the right to convert all the files.</p>
                </div>
            </div>
            <div className="stepCard stepCard3">
                <div className="cardTop">
                    <div className="stepNum">
                        <h3>Step 3</h3>
                    </div>
                    <div className="imageCont">
                        <img src={Step3} alt="download"/>
                    </div>
                </div>
                <div className="cardBottom">
                    <h3>Download the files</h3>
                    <p>Once the conversion is done, you can download the files by clicking Download button</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Steps

