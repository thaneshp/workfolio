import React from "react";
import "./ProfilePicturePopUp.css"

//CURRENTLY UNUSED. Previosly created to handle image changed using pop-ups
const ProfilePicturePopUp = () => {
    
    return(
        <div className = "PopUp">
            <div className = "buttons">
            <button>change</button>
            <button onClick={this.props.toggleClose}>X</button>
            </div>
            <img src = ""/>
        </div>
        );
}

export default ProfilePicturePopUp