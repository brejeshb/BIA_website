import React from "react";
import "./Sig.css";
import logo2 from "../../assets/BIA_Logo.png";
import ig from "../../assets/instagram.png"
import email from "../../assets/email.png"
import linkedin from "../../assets/linkedin.png"
import { auto } from "@popperjs/core";
import { HashLink as Link } from 'react-router-hash-link';


export default function Sig() {
  return (
    <footer className="signature-bar">
      <div className="bar-items">
        <div className="logo-container">
          <img src={logo2} className="logo-image" alt="" />
        </div>
        <div className="social-links flush-left">
          <a
            href="https://www.linkedin.com/company/smubia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="social-icon"
              width={30}
              height={auto}
            />
          </a>
          <a
            href="https://www.instagram.com/smu.bia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ig}
              alt="Instagram"
              className="social-icon"
              width={30}
              height={auto}
            />
          </a>
          <a
            href="mailto: bia@sa.smu.edu.sg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={email}
              alt="email"
              className="social-icon"
              width={30}
              height={auto}
            />
          </a>
        </div>
      </div>
      <div className="bar-items">
      <Link to="/#top"><h3 className="bar-item">Home</h3></Link>
        <div className="bar-items-comps">
        <p><Link to="/#top">We are SMUBIA</Link></p>
        <p><Link to="/#Our-Partners">Our Partners</Link></p>
        </div>
      </div>
      <div className="bar-items">
      <Link to="/WhatWeDo#top"><h3 className="bar-item">What we do</h3></Link>
        <div className="bar-items-comps">
        <p><Link to="/WhatWeDo#ourworkshops">Workshops</Link></p>
        <p><Link to="/WhatWeDo#DAP">Data Associate Programme</Link></p>
        <p><Link to="/WhatWeDo#Featured-Projects">Featured projects</Link></p>
        </div>
      </div>
      <div className="bar-items">
      <Link to="/GetInvolved#top"><h3 className="bar-item">Get involved</h3></Link>
        <div className="bar-items-comps">
        <p><Link to="/GetInvolved#Datathon-2023">Datathon 2023</Link></p>
        <p><Link to="/GetInvolved#Networking-Night-2023">Networking Night 2023</Link></p>
        <p><Link to="/GetInvolved#BIA-night-2023">BIA Night 2023</Link></p>
        <p><Link to="/GetInvolved#What-we-need-help-with">What we need help with</Link></p>
        </div>
      </div>
      <div className="bar-items">
        <h3 className="bar-item">Where to find us</h3>
        <div className="bar-items-comps">
          <a href="https://goo.gl/maps/FbAHdtdAouhEmrNF6" class="custom-link">
          <p>
            Institute of Innovation & Entrepreneurship
            <br />
            Singapore Management University
            <br />
            Level 5, SMU Connexion
            <br />
            40 Stamford Road
            <br />
            Singapore 178908
          </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
