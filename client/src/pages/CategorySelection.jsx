// src/pages/CategorySelection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleSelect = (category) => {
    localStorage.setItem("selectedCategory", category);
    navigate("/dashboard");
  };

  return (
    <div className="category-selection-container">
      <h1 className="category-selection-title">Select a Category</h1>
      <div className="category-grid">
        <div className="category-card" onClick={() => handleSelect('screw')}>
          <span className="category-name">Screw</span>
        </div>
        <div className="category-card" onClick={() => handleSelect('transistor')}>
          <span className="category-name">Transistor</span>
        </div>
        {/* Add more categories if needed */}
      </div>
    </div>
  );
};

export default CategorySelection;
