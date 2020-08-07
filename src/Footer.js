import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <div className="footer_element">
            <div>
                <input type="text" placeholder="Enter Your Email" className="search"></input>
            </div>
            <button className="button2">
                Subscribe Now
            </button>
        </div>
    )
}

export default Footer;