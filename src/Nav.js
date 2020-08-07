import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <div className="navbar">
            Logo
            <div className="navelements">
                <div className="element">Home</div>
                <div className="element">Services</div>
                <div className="element">About us</div>
                <div className="element" id="button">Sign in</div>
            </div>
        </div>
    );
}

export default Nav;

