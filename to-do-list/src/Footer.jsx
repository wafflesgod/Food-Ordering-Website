import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRaspberryPi, faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
        <div className="foot-container">
            <div>
                <div><FontAwesomeIcon icon={faRaspberryPi} flip /><b>YumYum</b><br /></div>
                <div style={{marginTop: "8px"}}>Delicious food delivered fast to your doorstep. Experience the best flavors from around the world.</div>
            </div>
            <div>
                <b>Quick Links</b><br/>
                <div style={{marginTop: "5px"}}>
                    <Link className="link" to="/home">Home</Link> <br/>
                    <Link className="link" to="/menu">Menu</Link> <br/>
                    <Link className="link" to="/about">About</Link> <br/>
                </div>
            </div>
            <div>
                <b>Support</b>
                <div style={{marginTop: "5px"}}>
                    <Link className="link" to="/contact">Contact</Link> <br/>
                </div>
            </div>
            <div>
                <b>Follow Us</b>
                <div style={{marginTop: "5px"}}>
                    <FontAwesomeIcon icon={faGithub} size="2xl"/>
                </div>
            </div>
        </div>
        <div style={{borderTop: "1px solid white", textAlign: "center", paddingTop: "20px", marginTop: "20px"}}>
            © {new Date().getFullYear()} My React Website. All rights reserved.
        </div>
    </footer>
  );
}

export default Footer;
