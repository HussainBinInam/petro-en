import React from "react";
import { Link } from "react-router-dom";
import "./S-nav-bar.scss";

const Snavbar = () => {
  return (
    <div className="Snavbar">
      <ul>
        <h3>Petroen Engineering DMCC</h3>
        <li>
          {" "}
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="link" to="/ABOUT-US">
            About us
          </Link>
          <ul>
            <li>
              <Link className="link" to="/ABOUT-US/QHSE">
                QHSE
              </Link>
            </li>
            <li>
              <Link className="link" to="/ABOUT-US/Principals">
                Principal
              </Link>
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link className="link" to="/DIVISIONS">
            Divisions
          </Link>
          <ul>
            <li>
              <Link className="link" to="/DIVISIONS/Networks&Training">
                Networks & Training
              </Link>
            </li>
            <li>
              <Link className="link" to="/DIVISIONS/EPCC">
                EPCC
              </Link>
            </li>
            <li>
              <Link className="link" to="/DIVISIONS/Supply-Chain-Division">
                Supply Chain Division
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/DIVISIONS/Industrial-Engineering-Solutions"
              >
                Industrial Engineering Solutions
              </Link>
            </li>
            <li>
              <a className="link" href="http://angloeasternfze.com/">
                Manufacturing
              </a>
            </li>
            <li>
              <a className="link" href="http://www.brillante-engineers.com/">
                Engineering
              </a>
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link className="link" to="/VISSION-&-MISSION">
            Vission and Mission
          </Link>
        </li>
        <li>
          {" "}
          <Link className="link" to="/CARRERS">
            Carrers
          </Link>
        </li>
        <li>
          {" "}
          <Link className="link" to="/CONTACT-US">
            Contact us
          </Link>
        </li>
        <li>
          {" "}
          <Link className="link" to="/CEO-MESSAGE">
            Ceo Message
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Snavbar;
