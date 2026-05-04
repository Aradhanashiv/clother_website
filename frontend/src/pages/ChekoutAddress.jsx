import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify"
import axios from 'axios';
import { setUserData, setaddAddress } from '../redux/userSlice';


const ChekoutAddress = () => {
  
 
    const [showForm, setShowForm] = useState(false)
    const products = useSelector((state)=> state.cart?.products || [])
      // const {userData} = useSelector((state) => state.user);
       const { userData, loading } = useSelector((state) => state.user);
    const [err, setErr] = useState("")
    const dispatch = useDispatch()

    const totalPrice = products.reduce((acc, item) => {
      return acc + item.price * item.quantity
     }, 0)
   
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        addressLine1: "",
        city: "",
        state: "",
        postalCode: ""
    })

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
     }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault()
     try {
      const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/add-user-address` ,
         formData, {withCredentials: true})
         setFormData({
             fullName: "",
             phone: "",
             addressLine1: "",
             city: "",
             state: "",
             postalCode: "",
           });
        // const getresult = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/user-data` , {withCredentials: true})
        dispatch(setaddAddress(result.data.addresses))
        toast.success("Users Address Saved Successfully")
       setShowForm(false)
     } catch (error) {
      console.log(error);
      setErr(error?.response?.data?.message)
     }      
      
    }
      
  return (
      <section id="checkout_Address_details">
          <div className="w-full min-h-screen bg-pink-50 p-5">
          <h1 className=" font-semibold text-4xl text-center text-pink-800 mb-8">
           select delivery Address
          </h1>
        
          <div className="md:w-[80%] w-full m-auto flex justify-start items-center"> 
          <button className="py-2 px-4 text-lg font-semibold text-gray-800 border rounded-lg" 
          onClick={()=>setShowForm(true)}>Add New Address</button>
          </div>

          <div className="flex flex-col items-center m-auto md:w-[80%] w-full flex"> 
          <div className="w-full rounded-lg px-2 py-3 m-auto">
              {userData.addresses?.length === 0? 
              ( <p className="py-3 text-lg text-gray-800">No Address Saved</p> )
              :
               (userData.addresses.map((address, i) => (
              <div key={i} className="flex border border-gray-300 rounded-lg mt-1  m-auto px-3 py-4 bg-white/70">
                <div className="w-full px-4">
                  <p className="font-bold">{address.fullName}</p>
                  <p className="text-gray-700">
                    {address.addressLine1}
                  </p>
                   <p className="text-gray-700">
                    {address.city}, {address.state}, {address.postalCode}
                  </p>
                  </div>
                  </div>))
               )
              
         }
              
            

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
          <button className="bg-pink-700 border-none px-10 py-2 text-white rounded-lg font-semibold " 
          >Continue</button>
          </div>
          </div>
         
       {showForm && <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      
      <form className="bg-white p-5 shadow-md w-full md:w-[500px] mx-auto" onSubmit={handleSubmit}>
      <div className='flex items-center justify-between'>
      <h2 className="text-xl font-bold mb-4">Add Delivery Address</h2>
      <RxCross2 size={20} onClick={()=>setShowForm(false)}/>
      </div>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full border border-pink-600 p-2 mb-3 rounded-xl"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border border-pink-600 p-2 mb-3 rounded-xl"
        required
      />

      <input
        type="text"
        name="addressLine1"
        placeholder="Address Line 1"
        value={formData.addressLine1}
        onChange={handleChange}
        className="w-full border border-pink-600 p-2 mb-3 rounded-xl"
        required
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="w-full border border-pink-600 p-2 mb-3 rounded-xl"
        required
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="w-full border border-pink-600 p-2 mb-3 rounded-xl"
        required
      />

      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={handleChange}
        className="w-full border border-pink-600 p-2 mb-3 rounded-xl"
        required
      />

      {/* <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          name="isDefault"
          checked={formData.isDefault}
          onChange={handleChange}
        />
        Set as Default Address
      </label> */}

      <button type="submit"
       className="w-full bg-pink-700 text-white py-2 rounded font-semibold hover:bg-pink-500">Save Address</button>
      </form>
       </div>
      }
    

            </div>
           </div>
        </div>
        </section>
  )
}

export default ChekoutAddress