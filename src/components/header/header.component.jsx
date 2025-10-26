
import React from "react";
import "./header.style.scss";
import logo from "../../Assits/ProTech logos/ProTechLogo2-Transparent.png";
import CustomButton from "../button/button.component";
import { Link } from "react-router-dom";
import logoText from "../../Assits/ProTech logos/Logo_Dubai.ico";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      {/* <img src={logo} alt="logo" /> */}
      <img src={logoText} alt="logoText" />
      <div className="logo-text">
        {/* <h1>Petroen Engineering DMCC</h1> */}

        {/* <h2>Engineering Services FZE</h2> */}
      </div>
    </div>
    <nav className="options" role="navigation" aria-label="Main">
      <Link to="/" className="option">
        Home
      </Link>

      <div className="dropdown">
        <Link to="/ABOUT-US" className="option" aria-haspopup="true" aria-expanded="false">
          About us
        </Link>
        <div className="dropdown-content" role="menu" aria-label="About us submenu">
          <Link to="/ABOUT-US/QHSE" className="dropdown-item" role="menuitem">QHSE</Link>
          <Link to="/ABOUT-US/Principals" className="dropdown-item" role="menuitem">Principal</Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to="/DIVISIONS" className="option" aria-haspopup="true" aria-expanded="false">
          Division
        </Link>
        <div className="dropdown-content" role="menu" aria-label="Divisions submenu">
          <Link to="/DIVISIONS/Networks&Training" className="dropdown-item" role="menuitem">Networks & Training</Link>
          <Link to="/DIVISIONS/EPCC" className="dropdown-item" role="menuitem">EPCC</Link>
          <Link to="/DIVISIONS/Supply-Chain-Division" className="dropdown-item" role="menuitem">Supply Chain Division</Link>
          <Link to="/DIVISIONS/Industrial-Engineering-Solutions" className="dropdown-item" role="menuitem">Industrial Engineering Solutions</Link>
          <a href="http://angloeasternfze.com/" className="dropdown-item" role="menuitem">Manufacturing</a>
          <a href="http://www.brillante-engineers.com/" className="dropdown-item" role="menuitem">Engineering</a>
        </div>
      </div>

      <Link to="/VISION-&-MISSION" className="option">
        Vision and Mission
      </Link>
      <Link to="/CAREERS" className="option">
        Careers
      </Link>
      <Link to="/CONTACT-US" className="option">
        Contact us
      </Link>
      <Link to="/CEO-MESSAGE" className="option">
        Ceo Message
      </Link>
      {/* ...existing code... */}
    </nav>
  </div>
);
export default Header;
// ...existing code...