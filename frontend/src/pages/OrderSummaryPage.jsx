import React from 'react'
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";


const OrderSummaryPage = () => {


    const {products, totalQuantiy} = useSelector((state) => state.cart);
    const totalPrice = products.reduce((total, item) => {
    return total + item.price * item.quantity
    },0)

  return (
      <section id="order-summary-page">
          <div className="w-full min-h-screen bg-pink-50 p-5">
          <h1 className=" font-semibold text-4xl text-center text-pink-800 mb-8">
           Order Summary
          </h1>
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
                        <p className="mt-1 font-bold text-gray-700">₹{(item.quantity) * (item.price)}</p>
                      </div>
                     
          
                    </div>
                  ))}

            <div className="w-full rounded border  border-gray-300 bg-white/90 px-5 py-4 mt-[20px]">
          <p className="font-bold py-3 text-gray-800">Price Details ({products.length})</p>
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
          <div className="text-right mt-5">
          <button disabled={!selectedAddressId} className="bg-pink-700 border-none px-10 py-2 text-white rounded-lg font-semibold " 
         onClick={()=>navigate('/order-summary-page')} >Continue</button>
          </div>
          </div>
          </div>
      </section>    
  )
}

export default OrderSummaryPage