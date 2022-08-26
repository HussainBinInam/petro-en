import React from "react";
import "./about-us.scss";
import Image from "../../Assits/about-us.jpg";
const AboutUs = () => {
  return (
    <div>
      <h2>About Us</h2>
      <img src={Image} />
      <p>
        Pro-Tech started its operation in Dubai, United Arab Emirates in 2007.
      </p>
      <p>
        Pro-Tech DMCC is one the most trusted names in the market of Engineering
        & Contracting. Pro-Tech is operational across the Middle East &
        Pakistan. The main feature of its development is dynamic growth,
        prosperity and stability. Since 2007 company is specializing in the
        field of Instrument, Control, Automation, Fire & Security, Electrical
        and Mechanical installation and maintenance.
      </p>
      <p>
        Quality has always been a prime focus of Pro-Tech operations. It has
        always invested in the area where ever there is even a bleak chance of
        improvement in quality services. Starting from the selection of trained
        and professional and purchase of state or the art equipment, access to
        latest technological development s and standards – to continuous
        trainings and workshops to train our professional staff, Pro-Tech has
        turned every stone to make all our products and services including
        engineering, procurement, construction, & commissioning quicker, safer
        and economical.
      </p>
      <p>
        Now we are happy to say that we have all the resources available to
        fulfill your business needs in a more professional manner.
      </p>
      <p>
        We have strong back office operational staff to handle the day to day
        matters of on-going projects (like coordination with all
        interdepartmental teams and clients, material management, workforce
        management, reporting, handling customer complaints and requirements
        etc.
      </p>
    </div>
  );
};
export default AboutUs;
