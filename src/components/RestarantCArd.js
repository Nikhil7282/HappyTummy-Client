import React from "react";
import veg from "../assets/veg.png";
import NonVeg from "../assets/nonveg.png";
import NoFood from "../assets/noFoodImg.png";
const foodTypes = (foodType = []) => {
  let icon = [];
  if (foodType.includes("Non-veg"))
    icon.push(<img className="food-type-icon" src={NonVeg} alt="nonveg" />);
  if (foodType.includes("veg"))
    icon.push(<img className="food-type-icon" src={veg} alt="veg" />);
  return icon;
};

function RestarantCArd({ data = {}, handleClick = (e) => {} }) {
  return (
    <div className="restaurant-card" id="restaurant-card">
      <div className="restaurant-logo">
        <img
          className="logo-image"
          src={data.logo || NoFood}
          alt="Restaurant Logo"
        />
      </div>
      <div className="restaurant-details">
        <div className="name-row">
          <h2>{data?.name ? data.name : "Restaurant Name"}</h2>
          {foodTypes(data.foodTypes)}
        </div>
      </div>
      <div
        className="restaurant-goto-cta"
        role="button"
        onClick={() => handleClick(data._id)}
      >
        Menu
      </div>
    </div>
  );
}

export default RestarantCArd;
