import React from "react";
import "./header.style.scss";
import logo from "../../Assits/ProTech logos/ProTechLogo2-Transparent.png";
import CustomButton from "../button/button.component";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <div className="logo-text">
        <h1>ProTech</h1>
        <h2>Trading & Engineering Services FZE -LLC</h2>
      </div>
    </div>
    <div className="options">
      <Link to="/" className="option">
        {" "}
        Home
      </Link>
      <Link to="/ABOUT-US" className="option">
        About us
      </Link>
      <Link to="/DIVISIONS" className="option">
        {" "}
        Division
      </Link>
      <Link to="/VISSION-&-MISSION" className="option">
        Vission & Mission
      </Link>
      <Link to="/CAREERS" className="option">
        Carrers
      </Link>
      <Link to="/CONTACT-US" className="option">
        Contact us
      </Link>
      <Link to="/CEO-MESSAGE" className="option">
        Ceo Message
      </Link>
      {/* <CustomButton>HOME</CustomButton> 
          <CustomButton>ABOUT US</CustomButton>
          <CustomButton>DIVISIONS</CustomButton>
          <CustomButton>VISION & MISSION</CustomButton>
          <CustomButton>CAREERS</CustomButton>
          <CustomButton>CONTACT US</CustomButton>
          <CustomButton>CEO MESSAGE</CustomButton> */}
    </div>
  </div>
);
export default Header;
