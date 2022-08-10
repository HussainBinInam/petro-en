import React from "react";
import "./home.scss";
import slogan from '../../Assits/Slogan-rev1-1024x88.jpg'
import PTP from '../../Assits/power-transmission-products-300x128.jpg'
import NewsNevents from "../../components/NewsNevents/newsNevent";
import Snavbar from "../../components/side navagation bar/S-nav-bar";
const HomePage = ()=> {

   return ( <div className = 'homePage'>
        <div className= "intro">
            <h2 >Welcome to ProTech</h2>
            <div className= "tail">
                <img src= {slogan} alt = "Slogan"/>
                <div className= "para">
                    <img src={PTP} alt= "power transmission products"/>
                    <p >ProTech is an integrated Engineering, Procurement, Construction and Commissioning (EPCC) company; recognized as a “committed service provider” by the Exploration & Production companies. Our primary expertise in oil & gas and energy sectors are Providing seamless services for production & processing equipment, their related utilities.
                        Setting up complete production & processing facilities on turnkey basis.<br/> <br/>
                        Line pipe, flow line and trunk line detailed design, supply and installation.<br/> <br/>
                        Project management and technical assistance.<br/><br/>
                        Operation and Maintenance services.<br/><br/>
                        ProTech brings around the globe experience through its associations and affiliations with the renowned technology leaders to its clients. Combined with in depth knowledge of the local environment, we have proven track record of undertaking projects right from the concept stage to handing over of the facilities.
                        ProTech carries a trademark of Fast-track EPCC projects. We are recognized in the oil & gas industry, for meeting highest Quality & HSE standards and delivering world-class facilities on-time; these are our proofs of capabilities to meet the wide ranging challenges, faced by its clients.
                    </p>
                </div>
            </div>
        </div>
        <div className= 'sidebar'>
            <NewsNevents/>
                   <Snavbar/>
        </div>
    </div>
    )
}
export default HomePage;