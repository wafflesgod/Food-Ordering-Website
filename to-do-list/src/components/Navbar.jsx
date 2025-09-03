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
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-logo">
        <Link to="/home" style={{fontSize: "1.8rem"}}><FontAwesomeIcon icon={faRaspberryPi} flip />YumYum</Link>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/home" className="logo"><FontAwesomeIcon icon={faHouse} />Home</Link>
          </li>
          <li>
            <Link to="/menu" className="logo"><FontAwesomeIcon icon={faClipboard} />Menu</Link>
          </li>
          <li>
            <Link to="/about" className="logo"><FontAwesomeIcon icon={faCircleInfo} />About</Link>
          </li>
          <li>
            <Link to="/contact" className="logo"><FontAwesomeIcon icon={faPhone} />Contact</Link>
          </li>
          <li style={{border: "1px solid white", borderRadius: "6px", padding: "10px 5px"}}>
            <Link to="/home"><FontAwesomeIcon icon={faCartShopping} />Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
