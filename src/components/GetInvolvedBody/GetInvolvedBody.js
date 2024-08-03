import React from "react";
import "../GetInvolvedBody/GetInvolvedBody.css";
import Datathon_img1 from "../../assets/Get_involved_datathon1.jpg";
import Datathon_img2 from "../../assets/Get_involved_datathon2.jpg";
import Datathon_img3 from "../../assets/Get_involved_datathon3.jpg";
import NetworkingNight_img from "../../assets/Get_involved_Networking_Night.jpg";
import BIANight from "../../assets/Get_involved_BIANight.jpg";

export default function GetInvolvedBody() {
  return (
    <div>
      <div className="datathon" id="Datathon-2023">
        <div>
          <h1>Datathon 2023</h1>
          <p className="getinv-para">
            We launched our first ever Datathon this year! Datathon 2023 aims to
            provide the SMU community the opportunity to experience data in the
            working world. Over a span of 3 weeks, 86 participants were involved
            in our Fireside Chat, Data Workshops and finally tested their skills
            in our Data Challenges!
          </p>
        </div>
        <div className="datathon-container-row">
          <div className="datathon-custom-container" id="datathon-card">
            <h4 className="datathon-card-text">Fireside Chat</h4>
            <br></br>
            <img src={Datathon_img1} alt="" className="datathon-images" />
            <br></br>
            <p className="getinv-para">
              We invited guests from Prudential, Alibaba Cloud, and Alteryx to
              share with us their trends and insights they have seen in their
              respective industries!
            </p>
          </div>
          <div className="datathon-custom-container" id="datathon-card">
            <h4 className="datathon-card-text">Data Workshops</h4>
            <br></br>
            <img src={Datathon_img2} alt="" className="datathon-images" />
            <br></br>
            <p className="getinv-para">
              In collaboration with Alteryx, Tableau and foodpanda, we carried
              out a series of workshops to prepare participants for our upcoming
              Data Challenges!
            </p>
          </div>
          <div className="datathon-custom-container" id="datathon-card">
            <h4 className="datathon-card-text">Data Challenges</h4>
            <br></br>
            <img src={Datathon_img3} alt="" className="datathon-images" />
            <br></br>
            <p className="getinv-para">
              86 participants challenged themselves to solve the problem
              statement using Alteryx and Tableau platforms!
            </p>
          </div>
        </div>
      </div>

      <div className="networking" id="Networking-Night-2023">
        <h1>Networking Night 2023</h1>
        <div className="container-row" id="networking-night-row">
          <div className="custom-container" id="block">
            <h4 className="block-text">
              Networking with 9 participating companies
            </h4>
            <p className="getinv-para">
              Our annual networking night aims to give students the opportunity
              to explore and learn more about various data roles in various industries.
            </p>
            <p className="getinv-para">
              Students were given the opportunity to interact with representatives from the 9 participating companies.
            </p>
          </div>
          <img src={NetworkingNight_img} alt="" className="GetInvImg" />
        </div>
      </div>

      <div className="bianight" id="BIA-night-2023">
        <h1>BIA Night 2023</h1>
        <div className="container-row" id="bia-night-row">
          <img src={BIANight} alt="" className="GetInvImg" />
          <div className="custom-container" id="block">
            <h4 className="block-text">BIA Alumni sharing</h4>
            <p className="getinv-para">
              We invited our alumni to share their BIA journey, internship
              experiences, and what they were currently up to!
            </p>
            <p className="getinv-para">
              BIA Night also serves as a community bonding event for data
              enthusiasts to bond and network with other members, and share
              other BIA community initiatives.
            </p>
          </div>
        </div>
      </div>

      <div id="What-we-need-help-with">
        <h1>What we need help with</h1>
        <p className="getinv-para">We are currently looking to partner with more companies to bring greater value to our members and community. Do reach out to us at our email <a href="mailto: bia@sa.smu.edu.sg" id="email">here</a> if you are interested in working with us!</p>
      </div>
      <br></br>
    </div>
  );
}
