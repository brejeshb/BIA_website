import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Body from "../components/body/body";
import Card from "../components/Card/Card";
import Sig from "../components/Signature/Sig";


export default function Home() {

  return React.createElement(
    "div",
    {id:'top'},
    <NavBar />,
    <Main />,
    <Body />,
    <Sig />
    
  );
// }

};

