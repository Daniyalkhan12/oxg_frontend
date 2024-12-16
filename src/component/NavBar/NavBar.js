import React from "react";
import "./NavBar.css";

const TopBar = ({setIsLoggedIn}) => {
  const logout = () =>{
    setIsLoggedIn(false);
  }
  return (
    <div className="top-bar">
      <div className="logo">
        <span className="logo-o">O</span>
        <span className="logo-x">X</span>
        <span className="logo-g">G</span>
      </div>
      <span className="nav-title">MATERIAL DATENBANK</span>
      <div className="ext-btn">
      <button className="exit-button" onClick={logout}>EXIT</button> 

      </div>
    </div>
  );
};

export default TopBar;