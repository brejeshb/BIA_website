// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import NavBar from './components/Navbar/Navbar';
// import Main from './components/Main/Main';
// import Body from './components/Body/Body';
// import Sig from './components/Signature/Sig';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//     <NavBar />
//     <Main />
//     <Body />
//     <Sig />

//   </React.StrictMode>
// );

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GetInvolved from "./pages/GetInvolved";
import WhatWeDo from "./pages/WhatWeDo";
import Roadmap from "./pages/Roadmap";
import SideBar from "./components/SideBar/SideBar"

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="Roadmap" element={<Roadmap/>}/>
        </Routes>
        <SideBar />
      </main>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
