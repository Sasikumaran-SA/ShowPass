import { createRoot } from "react-dom/client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./SignInUp.css";

function SignIn() {
  return (
    <div className="container">
      <h1>Sign In</h1>
      <div className="input-container">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
        <input type="text" placeholder="Username" required />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faLock} className="input-icon" />
        <input type="password" placeholder="Password" required />
      </div>
      <button type="submit">Sign In</button>
      <div>
        <p>Don't have an account? <a href="sign_up">Sign Up</a></p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("sign_in")).render(<SignIn />);
