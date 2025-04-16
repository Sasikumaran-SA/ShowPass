import { createRoot } from "react-dom/client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope ,faLock } from "@fortawesome/free-solid-svg-icons";
import "./SignInUp.css";

function SignUp() {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="input-container">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
        <input type="text" placeholder="Username" required />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
        <input type="email" placeholder="Email" required />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faLock} className="input-icon" />
        <input type="password" placeholder="Password" required />
      </div>
      <button type="submit">Sign Up</button>
      <div>
        <p>Already have an account? <a href="sign_in">Sign In</a></p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("sign_up")).render(<SignUp />);
