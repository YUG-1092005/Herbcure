import React from 'react';
import './styles/Footer.css'; // Corrected import path
import './styles/Navbar.css'; // Corrected import path
import './styles/Header.css'; 
import Navbar from './components/Navbar'; // Make sure this import is correct
import AboutUs from "./components/pages/AboutUs"; // Corrected import path

function App() {
  return (
    <div className="wrapper">
      {/* Render Navbar here */}
      <Navbar />

      <div className="content">
        {/* Your page content here */}
        <h1>Welcome to HerbCure</h1>
        <p>Your content goes here.</p>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Learn more about us here.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </footer>
      <AboutUs />
    </div>
  );
}

export default App;
