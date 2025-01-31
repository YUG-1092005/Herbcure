import React, { useState } from 'react';
import '../styles/Navbar.css';  // Relative path to CSS file


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('us');

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Searching for:", event.target.value); // This is where you can handle search filtering logic
  };

  // Handle country selector change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log("Country selected:", event.target.value); // Use this for dynamic content based on country
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          {/* Logo / Branding */}
          <a href="/" className="logo">HerbCure</a>
          {/* Navigation Links */}
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Search Bar */}
          <input 
            type="text" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            className="search-bar" 
            placeholder="Search for plants..." 
          />
          {/* Account Icon */}
          <a href="/account" className="account-icon">Account</a>
          {/* Cart Icon */}
          <a href="/cart" className="cart-icon">
  <img src="/assets/cart.png" alt="cart" className="cart-icon-img" />
</a>

          {/* Country Selector */}
          <select 
            value={selectedCountry} 
            onChange={handleCountryChange} 
            className="country-selector"
          >
            <option value="us">USA</option>
            <option value="in">India</option>
            {/* Add other countries here */}
          </select>
        </div>
      </nav>

      {/* Bottom Navbar for Switching Sections */}
      <nav className="bottom-navbar">
        <ul className="bottom-nav-links">
          <li><a href="/shop">Shopping</a></li>
          <li><a href="/plant-info">Information Plant</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
