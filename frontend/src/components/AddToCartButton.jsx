import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const AddToCartButton = ({cartproduct}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cart.products)
    const isAdded = cartItems.some((item) => item._id === cartproduct._id)

   const handleAddtoCart = () => {
    if(isAdded){
      navigate('/add-to-cart')
    }
    else{
     dispatch(addtoCart(cartproduct));  
    }
   
  };

  return (
    <div className="flex items-between justify-between mt-5">
      <button className={`px-4 py-2 text-white text-semibold rounded-lg ${isAdded ? "bg-green-500" : "bg-pink-500"}`}
       onClick={() => handleAddtoCart()}>
        {isAdded ? "Go to Cart" : "Add to Cart"}
      </button>
      <button className="px-4 py-2 bg-gray-500 text-white text-semibold rounded-lg">
        {" "}
        Buy Now
      </button>
    </div>
  );
};

export default AddToCartButton;
