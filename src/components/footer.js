import React from 'react';

import fb_logo from '../assets/facebook.png';
import tw_logo from '../assets/twitter.png';
import ig_logo from '../assets/instagram.png';
import wc_logo from '../assets/wechat.png';
import in_logo from '../assets/linkedin.png';
import ic_send from '../assets/send.png';
import workfolio_logo from '../assets/workfolio_logo.png';
import { withRouter } from "react-router";

import './footer.css';

// Create Footer
const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-Logo-Section">
                <img className="Footer-Logo-Icon" src={workfolio_logo} alt="Logo"/>
                <a className="Footer-Logo-Title">WORKFOLIO</a>
            </div>
            <div className="Footer-Category">
                <a className="Footer-Category-Parent">SERVICES</a>
                <a className="Footer-Category-Child">Promotion</a>
                <a className="Footer-Category-Child">WorkCoin</a>
                <a className="Footer-Category-Child">Branding</a>
                <a className="Footer-Category-Child">Recruiment Support</a>
            </div>
            <div className="Footer-Category">
                <a className="Footer-Category-Parent">SUPPORT</a>
                <a className="Footer-Category-Child">Contact us</a>
                <a className="Footer-Category-Child">FAQs</a>
                <a className="Footer-Category-Child">Locate nearest Office</a>
                <a className="Footer-Category-Child">Report an issue</a>
            </div>
            <div className="Footer-Category">
                <a className="Footer-Category-Parent">ABOUT</a>
                <a className="Footer-Category-Child">Our story</a>
                <a className="Footer-Category-Child">Team</a>
                <a className="Footer-Category-Child">Goals</a>
                <a className="Footer-Category-Child">Future Projects</a>
            </div>
            <div className="Footer-Category">
                <a className="Footer-Category-Parent">LEGAL</a>
                <a className="Footer-Category-Child">Our story</a>
                <a className="Footer-Category-Child">Team</a>
                <a className="Footer-Category-Child">Goals</a>
                <a className="Footer-Category-Child">Future Projects</a>
            </div>
            <div className="Footer-Category-Social">
                <a className="Footer-Category-Parent">Follow us</a>
            <div className="Footer-Social-Section">
                <img className="Social-Icon" src={fb_logo} alt="fb" />
                <img className="Social-Icon" src={tw_logo} alt="tw" />
                <img className="Social-Icon" src={ig_logo} alt="ig" />
                <img className="Social-Icon" src={wc_logo} alt="wc" />
                <img className="Social-Icon" src={in_logo} alt="in" />
            </div>
                <a className="Footer-Category-Parent">Subscribe Now:</a>
            <div className="Footer-Send-Email-Section">
                <input type="email" placeholder="Email"/>
                <img className="Send-Icon" src={ic_send} alt="Send" />
            </div>
            </div>
        </div>
    )
};

export default withRouter(Footer);