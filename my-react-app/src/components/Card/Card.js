import React, { useState } from "react";
import "../Card/Card.css";
import member from "../../assets/Home_members.jpg";
import workshop from "../../assets/Home_workshops.jpg";
import project from "../../assets/Home_projects.jpg";
import partner from "../../assets/Get_involved_main.jpg";


function Card(props) {

  return (
      <div className="custom-container" id="card">
        <h4 className="card-text">{props.title}</h4>
        <br></br>
        <img src={member} alt="" className="images" />
        <p className="para">
          {props.text}
        </p>
      </div>

  );
}

{/* <div className="container-row">
<div className="custom-container" id="card">
  <h4 className="card-text">{props.items[0].title}</h4>
  <br></br>
  <img src={member} alt="" className="images" />
  <p className="para">
    {props.items[0].text}
  </p>
</div>
<div className="custom-container" id="card">
  <h4 className="card-text">Workshops</h4>
  <br></br>
  <img src={workshop} alt="" className="images" />
  <p className="para">
    Conducted
    <span className="bold-text"> 16 curriculum workshops</span>,
    averaging 60 participants per workshop! Find out more about our curriculum workshops
    <a href="/workshops" className="bold-text"> here</a>!
  </p>
</div>
<div className="custom-container" id="card">
  <h4 className="card-text">Projects</h4>
  <br></br>
  <img src={project} alt="" className="images" />
  <p className="para">
    Carried out our
    <span className="bold-text"> 8th iteration of Data Associate Programme (DAP)</span>,
    our flagship Data Science program. Learn more about their projects
    <a href="/DAP" className="bold-text"> here</a>!
  </p>
</div>
<div className="custom-container" id="card">
  <h4 className="card-text">Partners</h4>
  <br></br>
  <img src={partner} alt="" className="images" />
  <p className="para">
    Partnered with
    <span className="bold-text"> 16 companies </span>
    to enhance our events and workshops! Reach out to us
    <a href="/DAP" className="bold-text"> here</a> for a partnership!
  </p>
</div>
</div> */}

// function Card(props) {
//   return (
//     <div className="container-row">
//       <div className="custom-container" id="card">
//         <h4 className="card-text">Members</h4>
//         <br></br>
//         <img src={member} alt="" className="images" />
//         <p className="para">
//           The largest student club for data analytics and data science with
//           <span className="bold-text"> 1,500 student members</span>
//         </p>
//       </div>
//       <div className="custom-container" id="card">
//         <h4 className="card-text">Workshops</h4>
//         <br></br>
//         <img src={workshop} alt="" className="images" />
//         <p className="para">
//           Conducted
//           <span className="bold-text"> 16 curriculum workshops</span>,
//           averaging 60 participants per workshop! Find out more about our curriculum workshops
//           <a href="/workshops" className="bold-text"> here</a>!
//         </p>
//       </div>
//       <div className="custom-container" id="card">
//         <h4 className="card-text">Projects</h4>
//         <br></br>
//         <img src={project} alt="" className="images" />
//         <p className="para">
//           Carried out our
//           <span className="bold-text"> 8th iteration of Data Associate Programme (DAP)</span>,
//           our flagship Data Science program. Learn more about their projects
//           <a href="/DAP" className="bold-text"> here</a>!
//         </p>
//       </div>
//       <div className="custom-container" id="card">
//         <h4 className="card-text">Partners</h4>
//         <br></br>
//         <img src={partner} alt="" className="images" />
//         <p className="para">
//           Partnered with
//           <span className="bold-text"> 16 companies </span>
//           to enhance our events and workshops! Reach out to us
//           <a href="/DAP" className="bold-text"> here</a> for a partnership!
//         </p>
//       </div>
//     </div>
//   );
// }


export default Card;

