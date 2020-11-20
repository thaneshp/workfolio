import React from 'react'
import './sliderText.css'
import { Link } from "react-router-dom"

//Creates the slider text shown on the home-page slider
const SliderText = ( {heading, sub_heading, isButton, button_text, path} ) => {
    return (
        <div className="wrapper">
            <div className="inner">
                <h2>{heading}</h2>
                <h3>{sub_heading}</h3>
                {/* Determine whether call-to-action button should be added */}
                {isButton? 
                    (<Link to={path}><button className="cta">{button_text}</button></Link>) 
                : 
                    (<></>)
                }
            </div>
        </div>
    )
}

export default SliderText;