import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>We are a passionate team committed to making a positive impact on the environment and health with GreenMedicine.</p>
      </header>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h3>Mr. Vrajkumar Shaileshbhai Parekh</h3>
          <p>Vraj is a dedicated student and a future tech innovator. He is focused on making meaningful contributions in the world of technology and sustainable living.</p>
        </div>
        <div className="team-member">
          <h3>Mr. Yug Nimesh Trivedi</h3>
          <p>Yug is a problem solver with a knack for coding and innovation. He brings valuable technical expertise to the team and shares a deep passion for environmental causes.</p>
        </div>
        <div className="team-member">
          <h3>Mr. Vraj Ashokbhai Parekh</h3>
          <p>Vraj is a visionary with a goal of integrating technology to solve real-world problems. His commitment to sustainability fuels his drive to improve the health of both people and the planet.</p>
        </div>
        <div className="team-member">
          <h3>Mr. Yug Satishbhai Patel</h3>
          <p>Yug is a dynamic individual with strong leadership qualities. His teamwork and innovative mindset push the team forward in creating impactful solutions for sustainable living.</p>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission: GreenMedicine</h2>
        <p>GreenMedicine is not just a project; it's a movement. Our goal is to provide the world with natural, organic, and sustainable alternatives for healing. We believe in the power of plants and their ability to heal the body and the planet. With the advancements in technology and sustainable practices, we aim to bridge the gap between nature and modern medicine, offering a solution to today’s health and environmental challenges.</p>
        <p>Our mission is clear: to provide accessible, eco-friendly medicinal products that support holistic health and well-being. We strive to create a green future by promoting the use of medicinal plants that not only heal but also help in conserving the earth’s resources. As a team, we believe that every small step towards sustainability counts and, together, we can create a positive ripple effect for generations to come.</p>
      </section>
    </div>
  );
};

export default AboutUs;
