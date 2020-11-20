import React from 'react'

//CURRENTLY UNUSED. Created to enable images to be added to the slider.
const SliderImage = ({ src }) => {
    let imageStyles = {
        width: 100+"%",
        height: "auto"
    }
    return <img src={src} alt="slide-img" style={imageStyles}></img>
}

export default SliderImage;