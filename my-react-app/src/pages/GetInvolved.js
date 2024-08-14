import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Sig from "../components/Signature/Sig";
import GetInvolvedMain from "../components/GetInvolvedMain/GetInvolvedMain";
import GetInvolvedBody from "../components/GetInvolvedBody/GetInvolvedBody";

export default function GetInvolved() {
  return React.createElement(
    "div",
    { id: "top" },
    <NavBar />,
    <GetInvolvedMain />,
    <GetInvolvedBody/>,
    <Sig />
  );
};