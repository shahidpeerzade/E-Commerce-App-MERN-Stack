import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="loginsignip-fields">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email Adress"/>
          <input type="password"  placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p className="loginsign-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
