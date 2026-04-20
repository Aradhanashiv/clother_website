import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-toastify'
import { serverUrl } from "../App"
import ClipLoader from 'react-spinners/ClipLoader'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUserData } from "../redux/userSlice"

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [role, setRole] = useState("user")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignup = async () => {

    
     try {
       setLoading(true)
       const result = await axios.post(`${serverUrl}/user/signup` , 
        {name, email, password, mobileNumber, role} , 
        {withCredentials: true})
        dispatch(setUserData(result.data.user))
        setName(""), setEmail(""), setPassword(""), setMobileNumber(""), setRole("")
        toast.success("User SignedUp Successfully", {autoClose: 3000})
        navigate('/signin')
        setLoading(false)
     } catch (error) {
         console.log(error);
         setErr(error.response.data.message)
         setLoading(false)
     }   
  }

  return (
    <div className='min-h-screen  flex items-center justify-center p-4 bg-pink-50'>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px] border-pink-600`} >
         <h1 className={`text-4xl font-bold text-pink-500 mb-2 text-center`}>Clother</h1>
         <p className='text-gray-700 mb-6 text-center mt-3 font-semibold'>Create Your Account</p>
             {err && <p className="text-red-500 text-center font-semibold">*{err}</p>}
          <div className='mb-3'>
          <label htmlFor="fullName" className='block text-gray-700 font-medium mb-1'>FullName</label>
          <input type='text' className='w-full border border-pink-600 rounded-lg px-3 py-2 outline-none' name='name' 
          placeholder='Enter Your FullName' required value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>

            <div className='mb-3'>  
            <label htmlFor="Email" className='block text-gray-700 font-medium mb-1'>Email</label>
            <input type='email' className='w-full border border-pink-600 rounded-lg px-3 py-2 outline-none' name='email' 
            placeholder='Enter Your Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
               
            <div className="mb-3">
            <label htmlFor='password' className='block text-gray-700 font-medium mb-1'>Password</label>
            <div className="relative">
            <input type='text' name='password' className='w-full border border-pink-600 rounded-xl px-3 py-2' 
            placeholder='Enter Your Password'  required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='absolute right-4.5 top-3 text-gray-800'> </button>
            </div>
            </div>

            <div className="mb-3">
            <label htmlFor="MobileNumber" className='block text-gray-700 font-medium mb-1'>Mobile Number</label>
            <input type='number' name='mobileNumber' placeholder='Enter Your MobileNumber' 
             className='w-full border border-pink-600 rounded-xl px-3 py-2' required 
             value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
             </div>

              <div className='mb-3'>  
              <label htmlFor="Role" className='block text-gray-700 font-medium mb-1'>Select Role</label>
              <div className="flex justify-left gap-4">
              { ['admin' , 'user'].map((role,i) =><button key={i} className="border px-5 py-1 rounded-xl bg-pink-700 font-semibold text-white 
              shadow-lg hover:shadow-xl hover:bg-white/70 hover:border-pink-600 hover:bg-pink-50 hover:text-black transition-all duration-300" 
              onClick={()=>setRole(role)}>{role}</button> )}
              </div>
              </div>
              
    
            <button type='submit'
            className='mt-4 w-full font-bold rounded-xl px-6 py-2 text-pink-800 border border-pink-600 rounded-xl transition duration-200 hover:bg-pink-700 hover:text-white 
            hover:text-[black] cursor-pointer' disabled={loading} onClick={handleSignup}>
             {loading ? <ClipLoader size={20} color="white"/> : "Sign Up"}
            </button>

            <p className='text-center mt-5 cursor-pointer text-gray-700'>Already have an Account?
 <span className='font-bold' onClick={()=>navigate("/signin")}>Sign In</span></p>
      </div>
    </div>
  )
}

export default Signup