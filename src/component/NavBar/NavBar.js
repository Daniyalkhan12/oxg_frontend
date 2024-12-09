import React from "react";
import "./NavBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <span className="logo-o">O</span>
        <span className="logo-x">X</span>
        <span className="logo-g">G</span>
      </div>
      <span className="nav-title">MATERIAL DATENBANK</span>
      <div className="ext-btn">
      <button className="exit-button">EXIT</button> 

      </div>
    </div>
  );
};

export default TopBar;