// // src/pages/CategorySelection.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CategorySelection = () => {
//   const navigate = useNavigate();

//   const handleSelect = (category) => {
//     localStorage.setItem("selectedCategory", category);
//     navigate("/dashboard");
//   };

//   return (
//     <div className="category-selection-container">
//       <h1 className="category-selection-title">Select a Category</h1>
//       <div className="category-grid">
//         <div className="category-card" onClick={() => handleSelect('screw')}>
//           <span className="category-name">Screw</span>
//         </div>
//         <div className="category-card" onClick={() => handleSelect('transistor')}>
//           <span className="category-name">Transistor</span>
//         </div>
//         {/* Add more categories if needed */}
//       </div>
//     </div>
//   );
// };

// export default CategorySelection;
// src/pages/CategorySelection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CategorySelection.css";

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleSelect = (category) => {
    localStorage.setItem("selectedCategory", category);
    navigate("/dashboard");
  };

  return (
    <div className="category-selection-container">
      {/* <header className="category-header">
        <h1 className="category-selection-title">Welcome!</h1>
        <p className="category-description">
          Please select a product category below to start analyzing components.
        </p>
      </header> */}
<header className="category-header">
  <h1 className="category-selection-title">Welcome to Precision Inspection — your gateway to flawless quality control.</h1>
  <p className="category-description">
    You're now in command of precision. Choose a component category to begin your smart inspection journey.<br />
    Our system will guide you in detecting anomalies and ensuring product excellence.
  </p>
</header>

      <div className="category-grid">
        <div className="category-card" onClick={() => handleSelect('screw')}>
          <span className="category-name">Screw</span>
        </div>
        <div className="category-card" onClick={() => handleSelect('transistor')}>
          <span className="category-name">Transistor</span>
        </div>
        {/* You can add more categories as needed */}
      </div>

      <footer className="category-footer">
  &copy; {new Date().getFullYear()} Precision Inspection Inc. All rights reserved.
</footer>

    </div>
  );
};

export default CategorySelection;
