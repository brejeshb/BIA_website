// import React from "react";
// import "../Main/Main.css";
// import image from "../../mainpics/Home_main.jpg";

// function Main_image() {
//   return (
//     <div>
//       <div className="container-fluid">
//         <img src={image} className="image" alt=""/>
//         <div class="bottom-left">
//           <h2>We are</h2>
//           <h1>SMUBIA</h1>
//         </div>
//       </div>
//       <div className="container-fluid" id="box">
//         <h4 id="vision" >Our vision:</h4>
//         <h4 id="SMU">To build a sustainable ecosystem for analytics in SMU</h4>
//       </div>
//     </div>
//   );
// }

// export default Main_image;
import React, { useState, useEffect } from "react";
import "../Main/Main.css";

function MainImage() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Load images from assets folder
  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context("../../mainpics", false, /\.(png|jpe?g|svg)$/));
    setImages(images);
  }, []);

  // Rotate images with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Match this to the fade-out time
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="main-container-fluid">
      <div className="image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`main-image ${index === currentIndex ? "fade-in" : "fade-out"}`}
            alt="SMUBIA Logo"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="main-bottom-left">
        <p id="weare">We are</p>
        <p id="smubia">SMUBIA</p>
      </div>

      <div className="main-box">
        <p id="vision">Our vision:</p>
        <p id="SMU">To build a sustainable ecosystem for analytics in SMU</p>
      </div>
    </div>
  );
}

export default MainImage;
