import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Sig from "../components/Signature/Sig";
import Timeline from "../components/Timeline/Timeline";
// import Countdown from "../components/Countdown/Countdown";


const Roadmap = () => {

  return React.createElement(
    "div",
    {id: 'top'},
    <NavBar />,
    // <Countdown/>,
    <Timeline/>,
    
    <Sig />
  );

  };
  
  export default Roadmap; 