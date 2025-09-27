import React from "react";
import Image from "../../Assits/vission and Mission.jpg";
import "./vission&mission.scss";

const VissionMission = () => {
  return (
    <div>
      <h3>Vission & Mission</h3>
      <img src={Image} />
     <h4>Vission</h4>
      <h5>
       To be a state-of-the-art contractor in the oil and gas sector.
      </h5>
      <h5>
        Well-defined business vision statement provides are:
      </h5>
      <ul>
        <li> <b>Directional Guidance:</b> Acts as a compass, guiding strategic planning and decision-
          making by defining the desired end state.
          </li>
          <li> <b>Motivation and Inspiration:</b> Inspire and motivate stakeholders, including
          employees, customers, and investors, by providing a sense of purpose and
          direction.
          </li>
          <li> <b>Unity and Alignment:</b> Align the efforts of all team members, fostering a sense of
          unity and shared purpose.
          </li>
          <li> <b>Strategic Framework:</b> Foundational element in the strategic planning process
          and helps to shape the objectives, strategies, and action plans that will drive the
          organization toward its envisioned future state.
          </li>
          <li> <b>Decision-Making Clarity:</b> Evaluated based on their alignment with the desired
          future, ensuring that actions contribute to long-term success.
          </li>
          <li> <b>Differentiation:</b> A distinct and ambitious vision is set an organization apart from
          its competitors.</li>
      </ul>
      <h4>Mission</h4>
      <h5>
        To provide the standard quality products and services to our valuable
        customers at the best competitive rates.
      </h5>
      <h5>To ensure environment friendly industrial effluents.</h5>
      <h5>To provide prime significance to Stakeholders values.</h5>
      <h5>To contribute in a responsible corporate citizens society.</h5>
    </div>
  );
};
export default VissionMission;
