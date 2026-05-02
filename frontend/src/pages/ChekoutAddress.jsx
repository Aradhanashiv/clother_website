import React from 'react'
import { useSelector } from 'react-redux'

const ChekoutAddress = () => {
    
    const {addresses} = useSelector(state => state.user)
    const {products} = useSelector(State=> state.cart)

  return (
      <section id="checkout_Address_details">
          <div className="w-full min-h-screen bg-pink-50 p-5">
          <h1 className=" font-semibold text-4xl text-center text-pink-800 mb-8">
           select delivery Address
          </h1>
        
          <div className="md:w-[80%] w-full m-auto flex justify-start items-center"> 
          <button className="py-3 text-xl font-bold text-gray-800">Add New Address</button>
          </div>

          <div className="flex flex-col items-center m-auto md:w-[80%] w-full flex"> 
          <div className="w-full rounded-lg px-2 py-3 m-auto">
          <div className="flex border border-gray-300 rounded-lg mt-1  m-auto px-3 py-4 bg-white/70">
                <div className="w-full px-4">
                  <p className="font-bold">addressfullName</p>
                  <p className="text-gray-700">
                    addressaddressLine1
                  </p>
                   <p className="text-gray-700">
                    addresscity,addressstate,addresspostalCode
                  </p>
                  </div>
          </div>

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
          <p>{products.totalPrice}</p>
          </div>
          <div className="text-right mt-5">
          <button className="bg-pink-700 border-none px-10 py-2 text-white rounded-lg font-semibold " 
          >Continue</button>
          </div>
          </div>

            </div>
           </div>
        </div>
        </section>
  )
}

export default ChekoutAddress