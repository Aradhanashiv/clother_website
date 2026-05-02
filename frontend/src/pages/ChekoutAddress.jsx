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
         
            {addresses.map((address, i) => (
              <div className="flex border border-gray-300 rounded-lg mt-1  m-auto px-3 py-4 bg-white/70" key={address.fullName}>
                <div className="w-full px-4">
                  <p className="font-bold">{address.fullName}</p>
                  <p className="text-gray-700">
                    {address.addressLine1}
                  </p>
                   <p className="text-gray-700">
                    {address.city},{address.state},{address.postalCode}
                  </p>
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
           
     
           </div>
        </div>
        </section>
  )
}

export default ChekoutAddress