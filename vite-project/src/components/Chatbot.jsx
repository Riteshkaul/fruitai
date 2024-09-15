// src/components/Chatbot.js
import React, { useState } from "react";
import FruitList from "./FruitList";
import FruitDetail from "./FruitDetail";
import "../css/chatbot.css";

const fruits = [
  {
    id: 1,
    name: "Apple",
    image:
      "https://imgs.search.brave.com/mxdSOwHt2DfDGzQMZJWaMGJcYzO7dN3vzCAHlGj0D8Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU3/NjE1NTAvcGhvdG8v/cHJvZmVzc2lvbmFs/LXBob3RvZ3JhcGgt/b2YtYS1ncmVlbi1h/cHBsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YmdtYWNJ/Um5aN3NrcnBKZ0JP/US1zRjRTUVpfbkhV/S3M5TWpUNzNqQzA1/Zz0", // Update path if needed
    description: "An apple is a sweet fruit.",
  },
  {
    id: 2,
    name: "Banana",
    image: "./path/to/banana.jpg", // Update path if needed
    description: "A banana is a tropical fruit.",
  },
  // Add more fruits as needed
];

const Chatbot = () => {
  const [step, setStep] = useState("greeting"); // 'greeting', 'fruitList', 'fruitDetail'
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hello! What fruits would you like to know about today?",
      type: "bot",
    },
  ]);

  const handleFruitSelect = (fruit) => {
    setMessages([
      ...messages,
      { text: `You selected ${fruit.name}.`, type: "user" },
      { text: `Here are the details for ${fruit.name}:`, type: "bot" },
    ]);
    setSelectedFruit(fruit);
    setStep("fruitDetail");
  };

  const handleBack = () => {
    setMessages([
      ...messages,
      { text: "Going back to the fruit list.", type: "user" },
      { text: "Here is the list of fruits.", type: "bot" },
    ]);
    setSelectedFruit(null);
    setStep("fruitList");
  };

  const handleReset = () => {
    setMessages([
      {
        text: "Hello! What fruits would you like to know about today?",
        type: "bot",
      },
    ]);
    setStep("fruitList"); // Or set to "greeting" if you want to display only the greeting
    setSelectedFruit(null);
  };

  return (
    <div className="chatbot">
      <div className="header">Fruit.Ai Chatbot</div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}-message`}>
            {message.text}
          </div>
        ))}
        {step === "fruitList" && (
          <div className="message">
            <FruitList fruits={fruits} onSelectFruit={handleFruitSelect} />
          </div>
        )}
        {step === "fruitDetail" && selectedFruit && (
          <div className="message">
            <FruitDetail fruit={selectedFruit} onBack={handleBack} />
          </div>
        )}
      </div>
      <div className="footer">
        <button className="about-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
