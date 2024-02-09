import React from "react";
import './NewsLetter.css';

const NewLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive Offers InYour E-mail</h1>
      <p>Subsscribe to our new newsletter and stay updated</p>
      <div>
        <input type="emai" placeholder="Your Email Id"/>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
