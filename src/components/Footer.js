import React from 'react'
import './Footer.css';
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="Footer">
            <a href="https://github.com/tdowhy/CryptoTracker">
                <AiFillGithub className="icon" size={25}/>
            </a>
            <span className="footer-text">View this code on Github.</span>
        </div>
    )
}

export default Footer;
