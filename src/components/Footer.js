import React, { useState } from 'react';

import '../styles/Footer.css';  // Correct path


function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue form submitted!");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>If you have any questions, feel free to reach out to us!</p>
          <p><strong>Email:</strong> <a href="mailto:herbcure@green.com">herbcure@green.com</a></p>
          <p><strong>Customer Support:</strong> <a href="mailto:supportherbcure@green.com">supportherbcure@green.com</a></p>
        </div>

        {/* Submit an Issue Section */}
        <div className="footer-section">
          <h3>Submit an Issue</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="issue" 
              placeholder="Describe the issue" 
              value={formData.issue} 
              onChange={handleChange} 
              required 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
