import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faClipboard, faCircleInfo, faPhone, faCartShopping, faBars, faTimes  } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fetch logged-in user info
    useEffect(() => {
        axios.get("http://localhost:5000/users/1")  // 👈 just example: get user with id=1
            .then(res => {
                if (res.data && res.data.name) {
                    setUsername(res.data.name);
                }
            })
            .catch(err => console.error("User fetch error:", err));
    }, []);

    return (
        <div className="navbar-main">
            <div className="navbar-logo">
                <Link to="/home" style={{fontSize: "1.8rem"}}><FontAwesomeIcon icon={faRaspberryPi} flip />YumYum</Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </div>

            <nav className={`navbar ${isOpen ? "active" : "" }`}>
                <ul className="nav-links">
                    <li><Link to="/home" className="logo"><FontAwesomeIcon icon={faHouse} />Home</Link></li>
                    <li><Link to="/menu" className="logo"><FontAwesomeIcon icon={faClipboard} />Menu</Link></li>
                    <li><Link to="/about" className="logo"><FontAwesomeIcon icon={faCircleInfo} />About</Link></li>
                    <li><Link to="/contact" className="logo"><FontAwesomeIcon icon={faPhone} />Contact</Link></li>
                    <li><Link to="/home" className="logo"><FontAwesomeIcon icon={faCartShopping} />Cart</Link></li>
                    
                    {username ? (
                        <li className="user-name">Welcome,{username}</li>
                    ): (
                        <>
                            <li><Link to="/login" className="liquid">Login</Link></li>
                            <li><Link to="/signup" className="liquid">Sign Up</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
