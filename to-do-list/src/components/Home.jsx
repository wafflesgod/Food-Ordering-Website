import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home() {
  return (
    <div>
        <div className="top-container" style={{marginTop: "-10px"}}>
            <h1>Delicious Food, Delivered Fast</h1>
            <p style={{fontSize: "18px", paddingBottom: "10px"}}>Experience the finest cuisine from the comfort of your home. <br/> Fresh ingredients, expert chefs, and lightning-fast delivery.</p>
            <div className="button-container">
                <Link to="/menu">
                    <button className="button"><b>Order Now</b></button>
                </Link>
            </div>
        </div>
        <div>
            <h2>Featured Dished</h2>
        </div>
    </div>
);
}