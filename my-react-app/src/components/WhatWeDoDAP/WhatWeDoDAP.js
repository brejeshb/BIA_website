import { React, useEffect, useState } from "react";
import "../WhatWeDoDAP/WhatWeDoDAP.css";
import DAP_image1 from "../../assets/What_we_do_DAP1.jpg";
import DAP_image2 from "../../assets/What_we_do_DAP2.jpg";
import Workshop_image1 from "../../assets/What_we_do_workshops1.jpg";
import Workshop_image2 from "../../assets/What_we_do_workshops2.jpg";
import Workshop_image3 from "../../assets/What_we_do_workshops3.jpg";
import Lyrics_Machine from "../../assets/Lyrics-Machine.gif";
import ASL from "../../assets/ASL2.jpg";
import Help_Htoo_Resale from "../../assets/Help-Htoo-Resale.jpg"


function DAP() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      <div className="container-fluid" id="box">
        <h5 id='DAP'>
          We offer technically-inclined members to deepen their knowledge
          through our Data Associate Programme
        </h5>
      </div>
      <div>
        <h1>Data Associate Programme</h1>
        <div className="container-row" id="DAP-row">
          <div className="custom-container" id="block">
            <h4 className="block-text">Co-Learning Sessions</h4>
            <p className="para">
              We believe the best way to learn is to teach. We hope to help Data
              Associates build a strong foundation of Machine Learning concepts
              and understand the intuition behind the math in Machine Learning.
            </p>
            <p className="para">
              Data Associates are split into teams of 4 and will present on the
              topic they are assigned to their fellow Data Associates. Topics
              presented at co-learning sessions include but is not limited to:
              Regression, Classification, Ensemble Learning, Neural Networks,
              Unsupervised Learning and Natural Language Processing
            </p>
          </div>
          <img src={DAP_image1} alt="" className="DAP_image" />
        </div>

        {/* Second container */}

        <div className="container-row" id="DAP-row">
          <img src={DAP_image2} alt="" className="DAP_image" />
          <div className="custom-container" id="block">
            <h4 className="block-text">Project-based Learning</h4>
            <p className="para">
              We believe in an application-first approach to learning.
            </p>
            <p className="para">
              Every Data Associate will have to form a group size of 4 and work
              on a project they propose. We do not limit the type of projects
              that Data Associates embark on, with the sole requirement that
              their project has to be related to Data Analytics
            </p>
            <p className="para">
              In addition, our Data Associates get the opportunity to share
              their findings and final project outcomes with the rest of the
              community
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 id="Featured-Projects">Featured Projects</h1>
        <div className="container-row">
          <div className="custom-container" id="card">
            <h6 className="card-text">ASL Fingerspelling Detection Tool</h6>
            <p className="para">By Jolene Yeo, Regine Tan, Rheza Paleva, Vicky Qu, Jowett (Mentor)</p>
            <img src={ASL} alt="" className="images" />
            <p className="para">
              As part of our DAP project, we delved into the realm of American Sign Language (ASL), exploring how we could harnass machine learning to create a model capable of detecting and spelling out the sign languages given from the user.
            </p>
            <a href="https://github.com/auyeongweibin/asl" id="project-link">Github Link</a>
          </div>
          <div className="custom-container" id="card">
            <h6 className="card-text">HDB Price prediction model</h6>
            <p className="para">By Elijah Khor, Htoo Myat Naing, Ivan Yeo, Keng Boon, King Yeh (Mentor), Gabriel Sidik (Mentor)</p>
            <img src={Help_Htoo_Resale} alt="" className="images" />
            <p className="para">
              We created new features for each individual flat using OneMap API such as coordinate data, postal code and distances from places of interest. We then clustered the data by sector code and coordinates, before comparing different Regression methods to find the optimal model
            </p>
            <a href="https://github.com/ekcm/Help-Htoo-Resale" id="project-link">Github Link</a>
          </div>
          <div className="custom-container" id="card">
            <h6 className="card-text">Lyrics Machine</h6>
            <p className="para">By Phyo, Rafe, Charmaine, Shu Rui, Gabriel Sidik (Mentor), Renata (Mentor)</p>
            <img src={Lyrics_Machine} alt="" className="images" />
            <p className="para">
              Ever wondered how cool it would be if we can use machine learning to generate some sick lyrics? That was exactly what went through our minds while writing the project proposal for SMUBIA's Data Associate Programme
            </p>
            <a href="https://medium.com/smubia/the-dap-journey-lyrics-machine-95fcdc462182" id="project-link">Medium Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DAP;
