import React from "react";
import "../../components/homeContent/udemyForBusiness.css";

function UdemyForBusiness() {
  return (
    <div className="udemyForBusiness">
      <div className="backgroundColorDiv"></div>
      <div className="contentDiv">
        <h2 className="heading">The more you know, the more you grow.</h2>
        <p className="about">Email us, we'll get back to you.</p>
        <div
          className="startTeching button"
          onClick={() => (window.location = "mailto:yourmail@domain.com")}
        >
          Email
        </div>
      </div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg"
        alt="instructorImg"
        className="Img"
      ></img>
    </div>
  );
}

export default UdemyForBusiness;
