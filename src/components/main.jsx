import React from "react";
import Typical from "react-typical";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="text-container">
          <h1>
            <Typical
              steps={["Omni Digital Solutions", 1000]}
              loop={1}
              wrapper="span"
            />
          </h1>
          <p>
            We provide cutting-edge digital solutions to help businesses thrive
            in the modern world. Our team specializes in web development,
            digital marketing, and IT consulting, ensuring your business stays
            ahead of the curve with the latest technology and strategies.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://media.designrush.com/tinymce_images/93610/conversions/3D-elements-content.jpg"
            alt="Omni Digital Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
