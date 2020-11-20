import React, { useState } from 'react'
import './slider.scss'
import SliderImage from './sliderImage'
import SliderText from './sliderText'
import ProfileCard from './profileCard'
import ProfileCardLayout from './profileCardLayout'
import { withRouter } from "react-router";
// import i1 from './pics'

const Slider = () => {
    //Assign items to be displayed in each of the slider pages
    let sliderArr = [<SliderText 
                        heading="Welcome to Workfolio" 
                        sub_heading="The innovative way to showcase your work." 
                        isButton="show" 
                        button_text="GET STARTED" 
                        path="/sign-up"
                    />,
                    <ProfileCardLayout />,
                    <SliderText 
                        heading="Join Workfolio and Let The World Discover You!" 
                        isButton="" 
                    />]

    const [x, setX] = useState(0)

    //Helper functions to move to next pages. Called from slider buttons.
    const goLeft = () => {
        (x === 0) ? setX(-100*(sliderArr.length-1)) : setX(x + 100);
    };

    const goRight = () => {
        (x === -100*(sliderArr.length-1)) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                    )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default withRouter(Slider);
