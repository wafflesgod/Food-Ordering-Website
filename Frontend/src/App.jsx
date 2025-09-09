import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from './pages/Contact'
<<<<<<< Updated upstream:Frontend/src/App.jsx
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
=======
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
>>>>>>> Stashed changes:src/App.jsx

function App() {
  return (
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
<<<<<<< Updated upstream:Frontend/src/App.jsx
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
=======
            <Route path="/cart" element={<Cart />}/>
>>>>>>> Stashed changes:src/App.jsx
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
