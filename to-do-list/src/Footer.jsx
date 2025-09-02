import "./Footer.css";
function Footer() {
  return (
    <footer style={{
      color: "white",
      padding: "1rem",
      textAlign: "center",
      marginTop: "auto"
    }}>
        <p>hhmm</p>
        <p>© {new Date().getFullYear()} My React Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
