import React from "react";
import "../GetInvolvedMain/GetInvolvedMain.css";
import getInv from "../../assets/Get_involved_main.jpg";

function GetInvolvedMain() {

  return (

    <div className="container-fluid">
      <img src={getInv} className="getInv" alt="" />
      <div className="bottom-left">
        <p id ="filler">filler</p>
        <p id="get-involved">Get Involved</p>
      </div>

        <div className="main-box">
            <p id="DoMore" style={{"font-size": 20}}>
            We are always on the lookout for ways to
            <span className="bold-text"> do more </span>
            for our members
            </p>
        </div>
    </div >
  );
}

export default GetInvolvedMain;