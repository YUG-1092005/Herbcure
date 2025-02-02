import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("us");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Searching for:", event.target.value);
  };

  // Handle country selector change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log("Country selected:", event.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to={"/herbcure/about"} className="logo">
            <h1>HerbCure</h1>
          </Link>
          <div className="nav-links-div">
            <Link to={"/herbcure/about"} className="nav-links">About</Link>
            <Link to={"/herbcure/signup"}  className="nav-links">SignUp</Link>
            <Link to={"/herbcure/contactus"}  className="nav-links">ContactUs</Link>
            <Link to={"/herbcure/Shop"}  className="nav-links">Shop</Link>
          </div>
        </div>
        <div className="navbar-right">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
            placeholder="Search for plants..."
          />
          <div className="header-icons">
            <span className="account-icon">👤</span>
            <span className="cart-icon">🛒</span>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar for Switching Sections */}
      <nav className="bottom-navbar">
        <ul className="bottom-nav-links">
          <li>
            <Link to={"/shop"}>Shopping</Link>
          </li>
          <li>
            <Link to={"herbcure/plant-info/aloevera"}>Information Plant</Link>
          </li>
          <li>
            <Link to={"/plant-info"}>View in 3D</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
