import React, { useState, useContext } from 'react';
import ProfilePicture from './ProfilePicture'
import ProfilePicturePopUp from './ProfilePicturePopUp'
import QuickAccess from './QuickAccess';
import { AuthContext } from '../Auth';
import { firestore } from "firebase";
import './Sidebar.css'

//Creates sidebar on user's profile page.
const SideBar = () => {
    const [popUpWindow, setPopUpWindow] = useState(false);
    const [fullname, setFullName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const { currentUser } = useContext(AuthContext);

    //Function to retrieve user data and store in state variables.
    const getUserData = () => {
        if (currentUser) {
            const db = firestore();
            db.collection("users").doc(currentUser.uid)
                .get()
                .then(snapshot => {
                    const userData = snapshot.data();
                    setFullName(userData.fullname);
                    setOccupation(userData.occupation);
                    setImageUrl(userData.imageUrl);
                })
        }
    }

    const togglePop = () => {
        setPopUpWindow(true);
    };

    const toggleClose = ()=> {
        setPopUpWindow(false);
    };

    return (
        <div className="main1">
            <ProfilePicture imageUrl={imageUrl} popUpWindow= {togglePop}/>
            <hr></hr>
            <h1 className="name">{fullname}</h1> 
            <h3 className="occupation">{occupation}</h3>
            <div>&nbsp;</div>
            <hr></hr>
            <QuickAccess />
            <hr></hr>
            {getUserData()}
            {popUpWindow ? <ProfilePicturePopUp toggleClose = {toggleClose}/>:null}
        </div>
    );
}

export default SideBar;
