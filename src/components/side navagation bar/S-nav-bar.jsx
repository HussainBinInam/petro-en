import React from "react";
import { Link } from "react-router-dom";
import './S-nav-bar.scss';

const Snavbar = ()=> {
    return(
    <div className="Snavbar">
        <ul>
            <h3>ProTech</h3>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/ABOUT US'>About us</Link></li>
            <li> <Link to='/DIVISION'>Division</Link></li>
            <li> <Link to='/VISSION-&-MISSION'>Vission and Mission</Link></li>
            <li> <Link to='/CARRERS'>Carrers</Link></li>
            <li> <Link to='/CONTACT-US'>Contact us</Link></li>
            <li> <Link to='/CEO-MESSAGE'>Ceo Message</Link></li>
        </ul>
    </div>
        )
}
export default Snavbar; 