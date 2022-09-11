import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { auth } from "./firebase";
import add from "./screens/images/33ae441d41562169278c7308a29b2c59.png";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={add} alt="Netflix logo" />
      <button type="Submit" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
}

export default Navbar;
