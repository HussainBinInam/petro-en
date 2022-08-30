import React from "react";
import "./EPCC.scss";

import Image from "../../Assits/EPCC 300x195.jpg";
import mechanical_engineering from "../../Assits/mechanical_engineering.jpg";
import engineering_solutions from "../../Assits/engineering_solutions.jpg";

const EPCC = () => {
  return (
    <div className="EPCC">
      <h2>EPCC</h2>
      <p>
        <img alt="Factory" src={Image} />
        EPCC is the design, procure, fabricate, install and commission process
        modules and equipment for oil and gas production and power sector on a
        turnkey project basis. These modules and equipment will form the
        operating system of the production and storage facility for oil and gas
        and power sector.
      </p>
      <p>
        Offshore oil and gas activities are capital intensive and
        time-sensitive. The Group has, over the years, built up extensive
        capabilities and track record for fast-track projects.
      </p>
      <p>
        In executing each EPCC project, the Group will assign a Project Team to
        approach the given tasks. And in each team, one Project Manager will
        lead the team in project schedule planning, design, procurement &amp;
        contract administration, construction, progress reporting, commissioning
        and other tasks. The team will consist of a Design Engineer, Mechanical
        Engineer, QC Engineer, Instrumentation Engineer and other supporting
        staffs where applicable.
      </p>
      <p>
        From the initial design, fabrication, implementation to final
        commissioning and operation, our highly experienced and responsive
        Project Managers are hands-on at each stage to ensure the timely
        completion of our customers’ projects.
      </p>
      <p>
        With a customer-oriented approach, our team always aims to deliver more
        than expected and to value-add to our customers’ growth and development.
      </p>
      <p>
        Following are the main packages of utilities and processes which are
        being focused based on client requirement.
      </p>
      <p>
        <strong>Core Strengths</strong>
      </p>
      <ul>
        <img src={mechanical_engineering} alt="mechanical_engineering" />
        <li>Basic Engineering</li>
        <li>Detailed Engineering</li>
        <li>Procurement</li>
        <li>Fabrication</li>
        <li>Construction</li>
        <li>Installation</li>
        <li>Pre Commission, Commissioning &amp; Startup</li>
        <li>Onsite and Vendor Training</li>
        <li>Plant Operation &amp; Maintenance</li>
        <li>Man Power Supply</li>
        <li>Technical Services &amp; Consultancy</li>
      </ul>
      <p>
        <strong>Process Area Strength</strong>
      </p>
      <ul>
        <li>Crude Oil processing</li>
        <li>Separation Package</li>
        <li>Oil Washing &amp; Desalination</li>
        <li>Oil Storage and pumping</li>
        <li>Oil Metering units</li>
        <li>Line Pipe, Flowlines &amp; Trunk lines design and supply</li>
        <li>Hydrocarbon dew point control units</li>
        <li>LPG/NGL recovery units</li>
        <li>H2S &amp; CO2 removal systems</li>
        <li>Condensate stabilization &amp; fractionation units</li>
        <li>Dehydration units</li>
        <li>Separator packages</li>
        <li>Gas metering units</li>
        <li>Heater packages</li>
        <li>Gas scrubbers &amp; filters</li>
        <li>Production Manifold Packages</li>
        <li>Oil Stabilization &amp; Fractionation Systems</li>
        <img src={engineering_solutions} alt="engineering solutions" />
      </ul>
      <p>
        <strong>Utilities Area Strength</strong>
      </p>
      <ul>
        <li>Plant Management Control System (PMCS)</li>
        <li>ESD &amp; F&amp;G System</li>
        <li>
          Power Generation, Load Management &amp; Shedding System &amp; MCC
        </li>
        <li>Instrumentation</li>
        <li>Instrument Air System</li>
        <li>Fuel Gas System</li>
        <li>Flare System</li>
        <li>Acid Gas Incineration System</li>
        <li>Waste Water Treatment System</li>
        <li>Inert Gas System</li>
        <li>Fire Water &amp; Fire Fighting System</li>
        <li>Condensate/LPG storage/Diesel Storage &amp;Handeling</li>
        <li>Truck Loading &amp; Automation System</li>
        <li>Hot Oil System</li>
        <li>Chemical Injection System</li>
        <li>Plant Lighting</li>
        <li>Telecom System</li>
      </ul>
      <p>&nbsp;</p>
    </div>
  );
};
export default EPCC;
