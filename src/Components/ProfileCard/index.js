import React from 'react';
import './index.css'; // Import CSS for styling

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image3_wodrsw.png" alt="Dr. Prerna Narang" />
        <div className="rating">
          <span>4.5</span>
          <i className="star">⭐</i>
        </div>
      </div>
      
      <h2>Dr. Prerna Narang</h2>
      
      <p className="specialty">Male-Female Infertility</p>
      <p className="experience">7 years of Experience</p>
      <p className="languages">Speaks: English, Hindi, Marathi</p>
      
      <div className="consultation-options">
        <button className="consultation-button">Video Consultation ₹800</button>
        <button className="consultation-button">Chat Consultation Free</button>
      </div>
      
      <button className="view-profile">View Profile</button>
      <button className="book-consultation">Book a consultation</button>
    </div>
  );
};

export default ProfileCard;
