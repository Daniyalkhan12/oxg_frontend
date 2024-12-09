import React, { useState } from "react";
import "./SideBar.css";

const Sidebar = () => {
  const menuItems = [
    "Verbundrohre",
    "Kabel aussen",
    "Kabel innen",
    "Patchkabel",
    "Schächte",
    "GF-Hüp",
    "GF-ADo",
    "Konnektoren",
    "PDP und Splitter",
    "MFG Sockel",
    "Muffen",
    "Splitter",
    "Hauseinführung",
    "Trassenwarnband",
    "Co Digging VF",
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState("Co Digging VF");

  const handleItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${item === selectedMenuItem || item === 'Co Digging VF'  ? "selected" : ""}`}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;