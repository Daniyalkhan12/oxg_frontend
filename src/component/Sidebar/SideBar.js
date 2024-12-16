import React, { useState, useEffect } from "react";
import "./SideBar.css";
import axios from "axios";

const Sidebar = ({ selectedComponent, onComponentChange }) => {
  
  const [category, setCategory] = useState([]);
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
  const [categories, setCategories] = useState([]); // State to hold category data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch categories from the Django API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/material/categories/");
        console.log(response.data)
        if (response.data.length > 0){
          const defaultItem = response.data[0].name + "%" + response.data[0].categoryID
          setSelectedMenuItem(response.data[0].name)
          onComponentChange(defaultItem)
          setCategories(response.data); // Set the categories in state
        }
        setLoading(false); // Turn off loading state
        
      } catch (err) {
        console.error(err);
        setError("Failed to fetch categories");
        setLoading(false); // Turn off loading state
      }
    };

    fetchCategories();
  }, []);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedMenuItem(item);
    onComponentChange(item); 
    console.log(selectedMenuItem)
  };

  return (
    <div className="sidebar">
      {categories.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${item.name === selectedMenuItem.split("%")[0] || item.name === 'Co Digging VF'  ? "selected" : ""}`}
          onClick={() => handleItemClick(item.name + "%" + item.categoryID)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;