import React from "react";
import "../css/home.css";
import google from "../assets/google.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Fruit.Ai</h1>
      <p>"Be Healthy!"</p>
      <div className="boxes-container">
        <Link to={"/chat"} className="box">
          <div className="colored-box" style={{ backgroundColor: "#FFE5C2" }}>
            <p className="label chat-label">Chat.</p>
          </div>
        </Link>
        <Link to={"/translate"} className="box">
          <div className="colored-box" style={{ backgroundColor: "#EFFFC2" }}>
            <p
              className="label 
            google-translate-label"
            >
              <img src={google} />
            </p>
          </div>
        </Link>
        <Link to={"/FAQ"} className="box">
          <div className="colored-box" style={{ backgroundColor: "#E4CAFF" }}>
            <p className="label faqs-label">FAQs</p>
          </div>
        </Link>
        <Link to={"/about"} className="box">
          <div className="colored-box" style={{ backgroundColor: "#FFC2F2" }}>
            <p className="label about-label">About</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
