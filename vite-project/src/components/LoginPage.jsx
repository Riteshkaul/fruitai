import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting
import "../css/login.css";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaFingerprint,
  FaEnvelope, // Mail icon
  FaLock, // Password icon
} from "react-icons/fa"; // Importing icons

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const [rememberPassword, setRememberPassword] = useState(false); // Checkbox state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials
    const dummyUserId = "admin";
    const dummyPassword = "password123";

    if (userId === dummyUserId && password === dummyPassword) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1 className="heading">Login</h1>
      <p>By signing in you are agreeing </p> <span className="our">our</span>
      <span className="policy"> Term and privacy policy</span>
      <div className="container">
        <p
          style={{
            marginRight: "20px",
            color: "#036BB9",
            borderBottom: "2px solid black",
          }}
        >
          Login
        </p>
        <p style={{ color: "#A6A6A6" }}>Register</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "1px" }}>
          <label htmlFor="userId"></label>
          <div className="input-wrapper">
            <input
              placeholder="User Id"
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
        </div>
        <div className="password-container">
          <FaLock className="input-icon" /> {/* Password icon */}
          <input
            placeholder="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Remember Password and Forgot Password Section */}
        <div className="remember-forgot-container">
          <div className="remember-container">
            <input
              type="checkbox"
              id="rememberPassword"
              checked={rememberPassword}
              onChange={() => setRememberPassword(!rememberPassword)}
            />
            <label htmlFor="rememberPassword">Remember Password</label>
          </div>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="connect-with">or connect with</p>
      {/* Social Media Icons */}
      <div className="social-icons-container">
        <a
          href="https://facebook.com"
          className="social-icon facebook"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          className="social-icon instagram"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://pinterest.com"
          className="social-icon pinterest"
          aria-label="Pinterest"
        >
          <FaPinterestP />
        </a>
        <a
          href="https://linkedin.com"
          className="social-icon linkedin"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
      {/* Fingerprint Icon */}
      <div className="fingerprint-container">
        <FaFingerprint className="fingerprint-icon" />
      </div>
    </div>
  );
};

export default LoginPage;
