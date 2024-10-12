// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import { FiMenu } from "react-icons/fi";

// import "./index.css"; // Import the CSS for styling

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle the navbar open/close
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">MyWebsite</div>

//       <div className={`nav-links ${isOpen ? "open" : ""}`}>
//         <Link to="/" className="nav-item">Home</Link>
//         <Link to="/about" className="nav-item">Find Doctors</Link>
//         <Link to="/services" className="nav-item">About Us</Link>
//       </div>

//       <div className={`nav-links ${isOpen ? "open" : ""}`}>
//         <button className="login-btn">Login</button>
//         <button className="sign-up-btn">Sign-up</button>
//       </div>

//       <div className="menu-icon" onClick={toggleMenu}>
//         <i><FiMenu/></i>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./index.css"; // Import the CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AMRUTHAM</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/" className="nav-item">Find Doctors</Link>
        <Link to="/about-us" className="nav-item">About Us</Link>
        <button className="login-btn">Login</button>
        <button className="sign-up-btn">Sign-up</button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
