import React, { useCallback, useState } from 'react'
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import './signup_login.css'; 
import { firestore } from "firebase";
import app from "../config/firebase.js";

//Creates the sign-up page available from the home page
const SignUpPopup = (props) => {

    //Function to handle user sign-up authentication and store user details.
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { fullname, email, password, occupation } = event.target.elements;
        try {
            const db = firestore();
            const usersRef = db.collection("users");

            //Calls the firebase api and store the user's details in their record.
            await app 
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(() => {
                    app.auth().onAuthStateChanged((user) => {
                        usersRef.doc(user.uid).set({
                            email: email.value,
                            fullname: fullname.value,
                            occupation: occupation.value,
                            imageUrl: ''
                        })
                    })
                })
            props.history.push("/profile");
        } catch (error) {
            alert(error);
        }
    }, [props.history]);


    return (
        <div className="overlay" onClick={() => props.history.goBack()}>
        <div className="Popup Signup-popup" onClick={(e) => { e.stopPropagation() }}>
            <form onSubmit={handleSignUp}>
                <p className="Login-Title">Sign-Up Now</p>
                <div className="Login-Input-Section">
                    <a className="Login-Input-Title">Full Name</a>
                    <input
                        name="fullname"
                        type="text"
                        placeholder="John Doe"
                        className="Login-Input"
                    />
                    <a className="Login-Input-Title">Email</a>
                    <input 
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        className="Login-Input"
                    />
                    <a className="Login-Input-Title">Password</a>
                    <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="Login-Input"
                    />
                    <a className="Login-Input-Title">Occupation</a>
                    <input
                        name="occupation"
                        type="text"
                        placeholder="Student"
                        className="Login-Input"
                    />
                </div>    
                <button type="submit" className="Login-Button">Create an account</button>
            </form>
            <p>Already have an account? <Link>Click here.</Link></p>
        </div>
        </div>
    )
}

export default withRouter(SignUpPopup);
