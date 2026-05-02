import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseItemQuantity, DecreaseQuantity, removeFromCart } from "../redux/cartSlice";
import { MdCheckBox } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";


const AddToCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {userData} = useSelector(state => state.user)
  const {products, totalQuantiy} = useSelector((state) => state.cart);
  const [selectedId, setSelectedId] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)

   
const totalPrice = products.reduce((total, item) => {
    return total + item.price * item.quantity
  },0)

  return (
    <section id="addToCart">
      <div className="w-full min-h-screen bg-pink-50 p-5">
      <button className="md:px-6 md:py-4 py-2 px-2" onClick={() => navigate("/")}> <FaBackward size={25} /> </button> 
      <h1 className=" font-semibold text-4xl text-center text-pink-800 mb-8">
        Items in Your Cart
      </h1>
    
       <div className="md:w-[80%] w-full m-auto flex justify-start items-center">
          <MdCheckBox size={25} className="text-pink-500 m-1"/>
          <p className="py-5 text-xl font-bold text-gray-800">{totalQuantiy} TOTAL ITEMS IN YOUR CART</p>
        </div>
      <div className="flex flex-col items-center m-auto md:w-[80%] w-full flex"> 
      <div className="w-full rounded-lg px-2 py-3 m-auto">
      
        {products.map((item, i) => (
          <div className="flex border border-gray-300 rounded-lg mt-1  m-auto px-3 py-4 bg-white/70" key={item.productName}>
           
            <div className="w-30 ">
              <img src={item.productImage[0]} alt="" className="rounded" />
            </div>
            <div className="w-full px-4">
              <p className="font-bold">{item.productName}</p>
              <p className="text-gray-700">
                {item.description.split(" ").slice(0, 7).join(" ")}...
              </p>
              <div className="flex items-center">
              <button className="px-2 py-1  text-white text-semibold rounded-full bg-pink-500 mt-2"
              onClick={() => dispatch(IncreaseItemQuantity(item._id))}>
              +
              </button>
              <p className="m-3">{item.quantity}</p>
              <button className="px-2 py-1 text-white text-semibold rounded-full bg-pink-500 mt-2"
              onClick={() => dispatch(DecreaseQuantity(item._id))}>
              -
              </button>
              </div>
              <p className="mt-1 font-bold text-gray-700">₹{(item.quantity) * (item.price)}</p>
            </div>
            <div className="">
            <RxCross2 size={25} onClick={()=>{
             setSelectedId(item),
             setShowConfirm(true)}}/>
             </div>

          </div>
        ))}

        {showConfirm && selectedId &&  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
         <div className="bg-white/95 shadow md:w-[35%] w-[90%] rounded m-auto px-3 py-4">
         <div className="flex">
          <img src={selectedId.productImage[0]} alt="" className="w-10"/>
          <div className="px-3">
          <p className="font-medium text-sm text-gray-800">Move from Cart</p>
          <p className="text-gray-700 text-sm">Are You Sure to Remove this product from Cart</p>
          </div>
        </div>

        <div className="mt-3 flex justify-between">
          <button className="w-full m-1 text-sm bg-pink-500 font-medium text-white px-3 py-2 rounded hover:bg-pink-600"
          onClick={()=>setShowConfirm(false)}
          >Cancel</button>
          <button className="w-full m-1 text-sm bg-white border font-medium text-pink-500 px-3 py-2 rounded hover:bg-pink-100"
          onClick={()=>{dispatch(removeFromCart(selectedId._id));
             setShowConfirm(false);}}
          >Remove</button>
        </div>
        </div>
       </div>}
      
      </div>
       
       <div className="w-full rounded border  border-gray-300 bg-white/90 px-5 py-4 mt-[20px]">
          <p className="font-bold py-3 text-gray-800">Price Details</p>
          <div className="flex items-center justify-between">
          <p>Total MRP</p>
          <p>{totalPrice}</p>
          </div>
           <div className="flex items-center justify-between mt-3">
          <p>Discount</p>
          <p>0</p>
          </div>
           <div className="flex items-center justify-between mt-3">
          <p>Platform fee</p>
          <p>0</p>
          </div>
           <div className="flex items-center justify-between mt-3 border-t border-gray-500">
          <p>Total Amount</p>
          <p>{totalPrice}</p>
          </div>
          <div className="text-right mt-5"><button className="bg-pink-700 border-none px-10 py-2 text-white rounded-lg font-semibold " 
          onClick={!userData ? ()=> navigate('/signin'): ()=>navigate('/checkout-address')}>Place Order</button>
          </div>
       </div>
       </div>
    </div>
    </section>
  );
};

export default AddToCart;
