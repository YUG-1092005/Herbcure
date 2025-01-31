import React from 'react';

import '../styles/Header.css';  // Adjust the path if needed


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>HerbCure</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search medicinal plants..." />
      </div>
      <div className="header-icons">
        <span className="account-icon">👤</span>
        <span className="cart-icon">🛒</span>
      </div>
    </header>
  );
}

export default Header;
