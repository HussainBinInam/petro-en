import React from "react";
import "./principals.scss";
import Image from "../../Assits/principles.jpg";
const Principals = () => {
  return (
    <div className="principals">
      <img src={Image} alt="principals" />
      <h2>Principals</h2>
      <b>Integrity</b>
      <p>
        Building a trustworthy environment based on honesty and mutual respect.
      </p>
      <b>Customer Focus</b>
      <p>
        Picking up the customer’s need and requirement and providing the
        professional, technical and competent feedback accordingly.
      </p>
      <b>Win-Win Relationship</b>
      <p>
        Focusing on building a relationship highlighting the importance of all
        the concerned parties.
      </p>
      <b>Continuous Improvement</b>
      <p>
        Continuous efforts in improving our quality and services with the help
        of our valuable customers, suppliers and affiliates.
      </p>
      <b>Team Work</b>
      <p>
        Our success is our teamwork. Continuous efforts have been made to join
        all the individuals and groups together in order to improve our efficacy
        and professionalism.
      </p>
      <b>Professionalism</b>
      <p>
        Following the business ethics and principles is our motto to prove our
        commitment towards our profession.
      </p>
    </div>
  );
};
export default Principals;
