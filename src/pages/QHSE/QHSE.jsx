import React from "react";
import "./QHSE.scss";
import Image from "../../Assits/QHSE.gif";
const QHSE = () => {
  return (
    <div>
      <h2>QHSE</h2>
      <img src={Image} />
      <p>
        Pro-Tech is focused on its commitment to deliver the best and we ensure
        that the highest quality standards are followed while giving the utmost
        importance to health, safety and environment. Petroen Engineering and
        its associated companies believe in professional, honest and ethical
        behavior to deliver quality services in a safe and timely manner with
        the overall objective of ensuring customer satisfaction and sustainable
        development.
      </p>
      <p>
        Pro-Tech and the group QHSE strategy is built around a comprehensive
        system which is based on a well-integrated management system conforming
        to international standards and industry best practices. Our system
        establishes well laid out documents at our projects for implementation
        at the grass-root level. These plans are customized and shared with our
        clients prior to implementation.
      </p>
      <p>
        We encourage our top management, line managers, supervisors, workers as
        well as sub-contractor staff to demonstrate complete ownership of our
        QHSE objectives.
      </p>
    </div>
  );
};
export default QHSE;
