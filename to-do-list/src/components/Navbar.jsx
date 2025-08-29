import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "./Home";
import About from "./About"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        
    );
};

export default Navbar;