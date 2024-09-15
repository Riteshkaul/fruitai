import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="white-background">
        {/* This white background div is positioned absolutely */}
        <div className="about-content">
          <h1>Fruit.AI</h1>
          <p>
            Whether you're looking to discover new fruits, understand their
            nutritional values, or find the perfect fruit for your diet, our
            AI-driven chatbot is here to assist. We provide personalized fruit
            recommendations tailored to your health needs, making it easier for
            you to integrate the best fruits into your daily routine.
          </p>
          <button className="about-button">About</button>
        </div>
      </div>
    </div>
  );
};

export default About;
