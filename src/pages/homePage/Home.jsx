import React from "react";
import "./home.scss";
import slogan from "../../Assits/Slogan-rev1-1024x88.jpg";
import PTP from "../../Assits/power-transmission-products-300x128.jpg";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="intro">
        <h2>Welcome to Petroen Engineering DMCC</h2>
        <img src={slogan} alt="Slogan" />
        <div className="para">
          <p>
            Petroen Engineering DMCC is an integrated company, “committed service provider” known as
            “committed service provider” in Oil and Gas Industry in specialized sector such as Mechanical
            Completion verification, Pre-Commissioning, Commissioning, Start-up, Operation &amp;
            Maintenance and Packages EPCC (Engineering, Procurement, Construction and Commissioning);
            our services are being recognized by the world best Exploration Production companies. Our
            primary expertise in oil &amp; gas and energy sectors is well known for Providing best services for all
            kind of production &amp; processing equipment and related utilities.
          </p>
          <img src={PTP} alt="power transmission products" />
          <p>
            <ul>
              <li>Project management and technical assistance.</li>
              <li>Mechanical Completion Verification</li>
              <li>Operation and Maintenance services.</li>
              <li>Pre-Commissioning & Commissioning</li>
              <li>Supply of Skilled and Un Skilled Manpower</li>
            </ul>
              
            <br />
            Petroen Engineering DMCC brings experience around the globe through our associations and
            affiliations with the renowned technology leaders to its clients. Combined with in depth
            knowledge of the local environment, we have proven track record of undertaking projects right
            from the concept stage to handing over of the facilities. Petroen Engineering DMCC carries a
            trademark of Fast-track EPCC projects. We are recognized in the oil &amp; gas industry, for meeting
            highest Quality &amp; HSE standards and delivering world-class facilities on-time; these are our
            proofs of capabilities to meet the wide-ranging challenges, faced by our clients.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
