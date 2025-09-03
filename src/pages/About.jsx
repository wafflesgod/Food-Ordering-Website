import React from "react";
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate, faSeedling, faGhost, faCrow } from "@fortawesome/free-solid-svg-icons";
import { faDog, faTruck, faMobileScreenButton, faGift } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
        <h1>About Us</h1>
        <p className="para">Hey there, this is a about us page. It's still undergoing development, 
            but we're excited to share our website with you. This is a simple website built using
            React for practicing.
        </p>
        <div style={{paddingTop: "30px"}}><FontAwesomeIcon icon={faRotate} spin size="5x"/></div>
        <div style={{ paddingTop: "70px" }}>
            <h1>Our Services</h1>
            <div className="grid-container">
                <div><FontAwesomeIcon icon={faTruck} shake className="fashake" size="xl"/><b>Catering Services</b>
                    <div className="words">Perfect for events, parties, and corporate meetings. We handle everything from small gatherings to large events.</div>
                    <div>
                    <ul>
                        <li>Custom menu planning</li>
                        <li>Professional setup</li>
                        <li>Serving staff available</li>
                    </ul>
                </div>
                </div>
                <div><FontAwesomeIcon icon={faMobileScreenButton} shake className="fashake" size="xl"/><b>Mobile App</b>
                    <div className="words">Order on the go with our user-friendly mobile app. Available for iOS and Android devices.</div>
                    <div>
                    <ul>
                        <li>Easy one-tap ordering</li>
                        <li>Saved favorites</li>
                        <li>Exclusive app discounts</li>
                    </ul>
                </div>
                </div>
                <div><FontAwesomeIcon icon={faSeedling} shake className="fashake" size="xl"/><b>Healthy Options</b>
                    <div className="words">Extensive selection of healthy, organic, and dietary-specific meals to meet all your nutritional needs.</div>
                    <div>
                    <ul>
                        <li>Vegan & vegetarian options</li>
                        <li>Gluten-free meals</li>
                        <li>Nutritional information</li>
                    </ul>
                </div>
                </div>
                <div><FontAwesomeIcon icon={faGift} shake className="fashake" size="xl"/><b>Loyalty Program</b>
                    <div className="words">Earn points with every order and redeem them for free meals, discounts, and exclusive perks.</div>
                    <div>
                    <ul>
                        <li>Earn 1 points per RM1 spent</li>
                        <li>Birthday rewards</li>
                        <li>VIP customer benefits</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div style={{ paddingTop: "70px" }}>
            <h1>Our Teams</h1>
            <div className="grid-container2">
                <div><b>Member 1</b></div>
                <div><b>Member 2</b></div>
                <div><b>Member 3</b></div>
                <div className="words"><span>Idk what I am doing or learning just playing around with this icons.</span></div>
                <div className="words"><span>I am so boring so I join this project for dunno.</span></div>
                <div className="words"><span>Idk I am nothing to do so get invited as well.</span></div>

                <div><FontAwesomeIcon icon={faGhost} bounce size="5x" style={{marginTop: "75px"}}/></div>
                <div><FontAwesomeIcon icon={faCrow} bounce size="5x" style={{marginTop: "75px"}}/></div>
                <div><FontAwesomeIcon icon={faDog} bounce size="5x" style={{marginTop: "75px"}}/></div>
            </div>
        </div>
    </div>
);
}
