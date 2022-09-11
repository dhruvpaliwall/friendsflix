import React from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import add from "./images/33ae441d41562169278c7308a29b2c59.png";

const LoginScreen = () => {
  return (
    <div className="LoginScreen">
      <img className="LoginScreen_logo" src={add} alt="Netflix logo" />

      <div className="LoginScreen_gradient"></div>
      <div className="LoginScreen_body">
        <SignupScreen />
      </div>
    </div>
  );
};

export default LoginScreen;
