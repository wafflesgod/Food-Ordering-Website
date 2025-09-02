import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "./Home";
import About from "./About"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="navbar-main">
            <div className="navbar-logo">
                <Link to="/home"><FontAwesomeIcon icon={faRaspberryPi} flip/>YumYum</Link>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li className="faHouse"><Link to="/home"><FontAwesomeIcon icon={faHouse} /> Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;