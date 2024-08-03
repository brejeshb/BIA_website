import logo from "../../assets/BIA_Logo.png";
import { React, useState } from "react";
import "../Navbar/Navbar.css";
import { HashLink as Link } from 'react-router-hash-link';
import prospectus from "../../assets/SMUBIA_Prospectus.pdf"

import {
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <div class="navbar">
      <img src={logo} className="logo" alt="" />

      <nav>
        <div className={nav ? ["btn_menu", "active"].join(' ') : ["btn_menu"]}>
            <button class="btn"><Link to="/#top">Home</Link></button>
            <button class="btn dropdown"><Link to="/whatwedo#top">What We Do</Link></button>
            <button class="btn dropdown"><Link to="/getinvolved#top">Get Involved</Link></button>
            <a href={prospectus} download id="prospectus-text">
            <button class="btn" id="prospectus">
                Download Prospectus
            </button>
            </a>
        </div>
      </nav>
      <div onClick={() => setNav(!nav)} className="mobile_menu_btn">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </div>
  );
}

export default NavBar;
