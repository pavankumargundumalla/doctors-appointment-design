import React from 'react';
import Navbar from '../Navbar'
import './index.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
        <Navbar/>
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>We are committed to providing the best healthcare services</p>
      </div>


      <div className="our-story-section">
        <h2>Our Story</h2>
        <p>
          Our healthcare journey began over a decade ago with the vision to provide high-quality
          medical care that is accessible and affordable to everyone. We started with a small clinic and have grown to become
          one of the most trusted healthcare providers in the region.
        </p>
        <p>
          Our team consists of dedicated doctors, nurses, and healthcare staff who are passionate about making a positive difference in people's lives.
        </p>
      </div>

      
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver exceptional medical services by combining clinical excellence with compassionate care.
          We strive to make healthcare more accessible through continuous innovation and by adhering to the highest standards.
        </p>
      </div>


      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image3_wodrsw.png" alt="Dr. Bruce Willis" />
            <h3>Dr. Bruce Willis</h3>
            <p>Gynecologist</p>
          </div>
          <div className="team-card">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image_sodkgg.png" alt="Dr. Sarah Jones" />
            <h3>Dr. Sarah Jones</h3>
            <p>Dermatologist</p>
          </div>
          <div className="team-card">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image2_fzv5mm.png" alt="Dr. Michael Ray" />
            <h3>Dr. Michael Ray</h3>
            <p>Pediatrician</p>
          </div>
        </div>
      </div>

      
      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Compassion:</strong> We care deeply for every patient and their well-being.</li>
          <li><strong>Excellence:</strong> We are committed to providing the highest level of healthcare services.</li>
          <li><strong>Integrity:</strong> We uphold the highest ethical standards in everything we do.</li>
        </ul>
      </div>

      
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to schedule an appointment, feel free to reach out.</p>
        <p>Email: contact@hospital.com | Phone: +123-456-7890</p>
      </div>
    </div>
  );
};

export default AboutUs;
