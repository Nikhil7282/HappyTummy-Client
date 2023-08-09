import React from "react";
import veg from "../assets/veg.png"
import NonVeg from "../assets/nonveg.png"
import {BiEditAlt} from "react-icons/bi"
const foodTypes=(foodType)=>{
  let icon=[];
  if(foodType==="Non-veg") icon.push(<img className="food-type-icon" src={NonVeg} alt="nonveg"/>)
  if(foodType==="veg") icon.push(<img className="food-type-icon" src={veg} alt="veg"/>)
  return icon;
}

function ProductCard({data={},handleClick=(e)=>{}}) {
  return (
    <div className="restaurant-card" id="restaurant-card">
      <div className="restaurant-logo"></div>
      <div className="restaurant-details">
        <div className="name-row">
        <h2>{data?.foodName ? data.foodName:"NA"}</h2>
        {data?.foodType ? foodTypes(data.foodType):"Food Type"}
        </div>
        <div>
            <p>{data.foodDescription}</p>
            <p>{data.price+" "}Rs</p>
        </div>
        <BiEditAlt/>
      </div>
      <div className="restaurant-goto-cta" role="button" onClick={()=>handleClick(data._id)}>
        Add
      </div>
    </div>
  );
}

export default ProductCard
