import React from "react";
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
        <h1>About Us</h1>
        <p className="para">Hey there, this is a about us page. It's still undergoing development, 
            but we're excited to share our website with you. This is a simple website built using
            React for practicing.
        </p>
        <div style={{paddingTop: "30px"}}><FontAwesomeIcon icon={faRotate} spin size="5x"/></div>
        <div style={{ paddingTop: "70px" }}>
            <h1>Our Teams</h1>
            <p></p>
        </div>
    </div>
);
}