import React, { useEffect, useState } from "react";
// import AppLayout from '../Layouts/AppLayout'
// import Navigationsidebar from '../components/Navigationsidebar'
import RestarantCArd from "../components/RestarantCArd";
import { useNavigate } from "react-router-dom";
import { url } from "../App";
function Restaurants() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch(`${url}/restaurants`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data.length > 0) {
          //   console.log(result.data)
          setRestaurants(result.data);
        }
      });
  }, []);
  const handleRestaurantSelect = (id) => {
    // console.log(id);
    if (id) {
      navigate(`/restaurant/${id}`);
    }
  };
  return (
    <div className="main-container">
      {restaurants.length > 0 ? (
        restaurants.map((restaurant, idx) => {
          return (
            <RestarantCArd
              key={idx}
              data={restaurant}
              handleClick={handleRestaurantSelect}
            />
          );
        })
      ) : (
        <p>No Restaurant Found</p>
      )}
    </div>
  );
}

export default Restaurants;
