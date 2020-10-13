import React, {Component} from "react";

import './slider.css'
import image1 from "./img_1.jpg";
import image2 from "./img_2.jpg";
import image3 from "./img_3.jpg";
import image4 from "./img_4.jpg";
import image5 from "./img_5.jpg";

class Slider2 extends Component {
    constructor() {
        super();
        this.state = {
            images: [image1, image2, image3, image4, image5],
            currentIndex: 0,
            isCycleMode: true,
         }
        this.nextSlideHandler = this.nextSlideHandler.bind(this)
    }

    nextSlideHandler (e){
            let newIndex = this.state.currentIndex

            if (e.currentTarget.dataset.direction === "next") {
                if(newIndex < this.state.images.length){
                    newIndex = this.state.currentIndex + 1
                }
                if (newIndex === this.state.images.length) {
                    newIndex = 0
                }
            } else {
                if (newIndex > - 1){
                    newIndex = this.state.currentIndex - 1
                }
                if (newIndex === -1) {
                    newIndex = this.state.images.length - 1
                }
            }
            this.setState({currentIndex: newIndex})
        }

    render(){
    return (
        <div>
            <div className="flex-wrapper">
                <div className="slider-wrapper">
                    <div className="slider">

                        <img src={this.state.images[this.state.currentIndex]} alt=""/>
                        {this.state.currentIndex}

                    </div>
                    <div id="btn-prev" data-direction="prev"
                          onClick={this.nextSlideHandler.bind(this)}>PREV</div>
                    <div  id="btn-next" data-direction="next"
                           onClick={this.nextSlideHandler.bind(this)}>NEXT</div>
                </div>
            </div>
            <div className="dots-wrapper">
                <span className="dot active" onClick={this.nextSlideHandler.bind(this)}></span>
                <span className="dot" onClick={this.nextSlideHandler.bind(this)}></span>
                <span className="dot" onClick={this.nextSlideHandler.bind(this)}/>
                <span className="dot" onClick={this.nextSlideHandler.bind(this)}></span>
                <span className="dot" onClick={this.nextSlideHandler.bind(this)}></span>
            </div>
        </div>
    )
}
}

export default Slider2