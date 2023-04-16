import "./footerStyles.css";

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20}  style={{color:"#fff", marginRight: "2rem"}}/>
                <div>
                    <p>10, isaac salomi street </p>
                    <p>Ikorodu ,Lagos  </p>
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20}  style={{color:"#fff", marginRight: "2rem"}}/>
                08081344825</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20}  style={{color:"#fff", marginRight: "2rem"}}/>
                olapoint4@yaho.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is Bello kazeem i'm a software Developer and
                    am open to work.
                </p>
                <div className="social">
                <FaFacebook size={30}  style={{color:"#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30}  style={{color:"#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30}  style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer