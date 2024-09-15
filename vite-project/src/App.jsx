import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQList from "./components/FAQList";
import FAQForm from "./components/FAQForm";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import TranslatorPage from "./components/TranslatorPage";
import "./App.css";
import About from "./components/About";
import Chatbot from "./components/Chatbot";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/FAQ" element={<FAQList />} />
      <Route path="/create" element={<FAQForm />} />
      <Route path="/edit/:id" element={<FAQForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/translate" element={<TranslatorPage />} />
      <Route path="/chat" element={<Chatbot />} />
    </Routes>
  </Router>
);

export default App;
