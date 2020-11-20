import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import './signup_login.css';

//Used for login authentication functionality
import app from '../config/firebase.js'
import { AuthContext } from '../Auth.js'

function LoginPopup (props) {

    //Function to handle login authentication
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                props.history.push("/profile");
            } catch(error) {
                alert(error);
            }
        },
        [props.history]
    );

    const { currentUser } = useContext(AuthContext);

    //Used to check if the current user is logged in
    if (currentUser) {
        return <Redirect to="/profile" />;
    }

    return (
        <div className="overlay" onClick={() => props.history.goBack()}>
            <div className="Popup Login-popup" onClick={(e) => { e.stopPropagation() }}>
                <form onSubmit={handleLogin}>
                    <p className="Login-Title">Login</p>
                    <div className="Login-Input-Section">
                        <a className="Login-Input-Title">Email:</a>
                        <input 
                            type="email"
                            name="email"
                            placeholder="example@workfolio.com"
                            className="Login-Input"
                        />
                        <a className="Login-Input-Title">Password:</a>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="Login-Input"
                        />
                        </div>
                        <div className="Login-Remember-Me-Section">
                        <input type="checkbox" /> 
                        <a>Remember me</a>
                    </div>
                    <button className="Login-Button">Login</button>
                </form>
                <p>Don't have account?<Link to="">Click here.</Link></p>
            </div>
        </div>
    )
};

export default withRouter(LoginPopup);