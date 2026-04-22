import { useEffect } from "react"
import axios from 'axios'
import { serverUrl } from "../App"
import { useDispatch } from "react-redux"
import { setUserData,clearUserData } from "../redux/userSlice"


export const useGetCurrentUser = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/user-data` , {withCredentials: true})
        console.log(result.data.user);
        dispatch(setUserData({userData: result.data.user, loading: false}))
      } catch (error) {
        console.log(error);
        // dispatch(setUserData({ userData: null, loading: false }));
        dispatch(clearUserData())
      }
    }
    fetchUser()
    },[])
}