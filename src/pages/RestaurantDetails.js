import React, { useEffect, useState } from "react";
// import AppLayout from "../Layouts/AppLayout";
// import Navigationsidebar from "../components/Navigationsidebar";
// import RestarantCArd from "../components/RestarantCArd";
import { useParams } from "react-router-dom";
import { url } from "../App";
import ProductCard from "../components/ProductCard";
function RestaurantDetails() {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`${url}/foods/${id}`)
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          if (result.response.length > 0) {
            console.log(result.response);
            setFoods(result.response);
          }
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }, []);

  return (
    // <AppLayout>
      // <Navigationsidebar />
      <div className="main-container">
        {/* {console.log(foods)} */}
        {foods.length > 0 ? (
          foods.map((data, idx) => {
            return <ProductCard key={idx} data={data} />;
          })
        ) : (
          <p>No Food Found</p>
        )}
      </div>
      // <div className="cart-container">cart-Area</div>
    // </AppLayout>
  );
}

export default RestaurantDetails;
