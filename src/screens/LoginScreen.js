import React from "react";
import "./LoginScreen.css";
import { useState } from "react";
import SignupScreen from "./SignupScreen";

const LoginScreen = () => {
  const [signIn, setSignin] = useState(false);
  return (
    <div className="LoginScreen">
      <img
        className="LoginScreen_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <button onClick={() => setSignin(true)} className="LoginScreen_button">
        Sign In
      </button>
      <div className="LoginScreen_gradient"></div>
      <div className="LoginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>movies, TV Shows and more.</h1>
            <h2>Watch anywhere.Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form>
              <input type="email" placeholder="Email Address" />
              <button
                onClick={() => setSignin(true)}
                className="LoginScreen_getStarted"
              >
                GET STARTED
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
