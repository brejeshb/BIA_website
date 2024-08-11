import React from "react";
import "./Partners.css";
import sginno from "../../assets/sginno.png";
import ihis from "../../assets/ihis.ico";
import govtech from "../../assets/govtech.png";
import ey from "../../assets/eylogo.png";
import alibaba from "../../assets/alibaba-cloud-logo.webp";
import tableau from "../../assets/Tableau-Emblem.png";


function Partners() {
    return(
        <div className="partners" id="Our-Partners">
            <div className="partner-row">
            <img src={sginno} alt=""/>
            <img src={ihis} alt=""/>
            <img src={govtech} alt=""/>
            </div>
            <div className="partner-row">
            <img src={ey} alt="" />
            <img src={alibaba} alt=""/>
            <img src={tableau} alt=""/>
            </div>
        </div>
    )
}

export default Partners;
