import React from 'react';
import '../stylesheet/navbar.css'; // You will define the styles in this CSS file
import uulogo from '../assets/images/uuFull.png';
import codexlogo from '../assets/images/codexLogo_nobg.png';

const Navbar = () => {
  return (
    <nav className="navbar_custum">
      <div className="navbar-logo left">

      <img
          src={uulogo}
         
          alt="YourLogo"
        />
      </div>
      <div className="navbar-title">BYTE</div>
      <div className="navbar-logo right">
      <img
          src={codexlogo}
          
          alt="YourLogo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
