import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "./Home";
import About from "./About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-logo">
        <Link to="/home"><FontAwesomeIcon icon={faRaspberryPi} flip />YumYum</Link>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/home"><FontAwesomeIcon icon={faHouse} /> Home</Link>
          </li>
          <li>
            <Link to="/menu"><FontAwesomeIcon icon={faClipboard} /> Menu</Link>
          </li>
          <li>
            <Link to="/about"><FontAwesomeIcon icon={faCircleInfo} /> About</Link>
          </li>
          <li>
            <Link to="/services"><FontAwesomeIcon icon={faBriefcase} /> Services</Link>
          </li>
          <li>
            <Link to="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
