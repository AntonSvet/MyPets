import React from "react";
import './slider.css'
import image1 from "./img_1.jpg"
import image2 from "./img_2.jpg"
import image3 from "./img_3.jpg"
import image4 from "./img_4.jpg"
import image5 from "./img_5.jpg"



const Slider = () => {

    return (<div className="Slider">
            <div className="flex-wrapper">
                <div className="slider-wrapper">
                    <div className="slider active">
                        <img src={image1} alt=""/>
                    </div>
                    <div className="slider">
                        <img src={image2} alt=""/>
                    </div>
                    <div className="slider">
                        <img src={image3} alt=""/>
                    </div>
                    <div className="slider">
                        <img src={image4} alt=""/>
                    </div>
                    <div className="slider">
                        <img src={image5} alt=""/>
                    </div>
                    <div id="btn-prev">PREV</div>
                    <div id="btn-next">NEXT</div>
                </div>
            </div>
            <div className="dots-wrapper">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}


export default Slider