import React from 'react'
import { useSelector } from 'react-redux'

const ChekoutAddress = () => {
    
    const {addresses} = useSelector(state => state.user)

  return (
      <section id="checkout_Address_details">
          <div className="w-full min-h-screen bg-pink-50 p-5">
          <h1 className=" font-semibold text-4xl text-center text-pink-800 mb-8">
           select delivery Address
          </h1>
        
          <div className="md:w-[80%] w-full m-auto flex justify-start items-center"> 
          <button className="py-5 text-xl font-bold text-gray-800">Add New Address</button>
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
    
        
          
          </div>
           
     
           </div>
        </div>
        </section>
  )
}

export default ChekoutAddress