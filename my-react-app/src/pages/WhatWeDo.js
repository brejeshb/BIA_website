import React from "react";
import NavBar from "../components/Navbar/Navbar";
import WhatWeDoMain from "../components/WhatWeDoMain/WhatWeDoMain";
import WhatWeDoBody from "../components/WhatWeDoBody/WhatWeDoBody";
import WhatWeDoDAP from "../components/WhatWeDoDAP/WhatWeDoDAP";
import Card from "../components/Card/Card";
import Sig from "../components/Signature/Sig";


const WhatWeDo = () => {

  return React.createElement(
    "div",
    {id: 'top'},
    <NavBar />,
    <WhatWeDoMain />,
    <WhatWeDoBody />,
    <WhatWeDoDAP />,
    <Sig />
  );

  };
  
  export default WhatWeDo; 