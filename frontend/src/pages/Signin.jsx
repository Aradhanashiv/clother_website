import { useState } from "react"
import { serverUrl } from "../App"
import ClipLoader from "react-spinners/ClipLoader"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useDispatch, } from "react-redux"
import { setUserData } from "../redux/userSlice"
import { useEffect } from "react"

const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {userData} =  useSelector(state => state.user)

  const handleSignIn = async () => {
    try {
      setLoading(true)
      const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin` , {email, password} , {withCredentials: true})
      dispatch(setUserData(result.data.user))
      setEmail(""), setPassword("")
      
      toast.success('User SignIn Successfully', {autoClose: 2000})
      console.log(result.data.user);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setErr(error.response.data.message)
      setLoading(false)

    }
  }
console.log("userData from redux:", userData);
  useEffect(()=>{
    if(userData){
   navigate('/')
    }
  },[userData])
  return (
    <div className='min-h-screen  flex items-center justify-center p-4 bg-pink-50'>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px] border-pink-600`} >
         <h1 className={`text-4xl font-bold text-pink-500 mb-2 text-center`}>Clother</h1>
          <p className='text-center mt-3 font-semibold mb-6 text-gray-700'>SignIn into Your Account</p>
             {err && <p className="text-red-500 text-center font-semibold">*{err}</p>}
            <div className='mb-3'>  
            <label htmlFor="Email" className='block text-gray-700 font-medium mb-1'>Email</label>
            <input type='email' className='w-full border border-pink-600 rounded-lg px-3 py-2 outline-none' name='email' 
            placeholder='Enter Your Email' required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
               
            <div className="mb-3">
            <label htmlFor='password' className='block text-gray-700 font-medium mb-1'>Password</label>
            <div className="relative">
            <input type='text' name='password' className='w-full border border-pink-600 rounded-xl px-3 py-2' 
            placeholder='Enter Your Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='absolute right-4.5 top-3 text-gray-800'> </button>
            </div>
            </div>

           <button type='submit'
            className='mt-4 w-full font-semibold rounded-xl px-6 py-2 text-white bg-pink-700 border border-pink-600 rounded-xl transition duration-200 hover: hover:text-gray-800  
            hover:bg-white cursor-pointer' disabled={loading} onClick={handleSignIn}>
             {loading ? <ClipLoader size={20} />: "SignIn" }
            </button>

            <p className='text-center mt-5 cursor-pointer text-gray-700' >Don't have an Account?
            <span className='font-bold' onClick={()=>navigate('/signup')} > Sign Up</span></p>
      </div>
    </div>
  )
}

export default Signin 