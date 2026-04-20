import axios from "axios"
import { useEffect } from "react"
import { serverUrl } from "../App"
import { useDispatch } from "react-redux"
import { setCategoryData } from "../redux/categorySlice"


export const useGetAllCategories = () => {
    const dispatch = useDispatch()
   useEffect(()=>{
    const fetchCategories = async() => {
        try {
          const result = await axios.get(`${serverUrl}/category/all-category` , {withCredentials:true}) 
          console.log(result.data.category);
          dispatch(setCategoryData(result.data.category))
        } catch (error) {
          console.log(error)
        }
    }
    fetchCategories()
   },[])
}