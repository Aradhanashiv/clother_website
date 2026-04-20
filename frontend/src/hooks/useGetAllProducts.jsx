import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
// import { setMyProductData } from "../redux/productSlice"
import axios from "axios"
import { serverUrl } from "../App"

 
// function useGetAllProducts () {
//     const dispatch = useDispatch()
//     useEffect(()=>{
//      const fetchProducts = async () => {
//      try {
//         const result = await axios.get(`${serverUrl}/product/all-products`, {withCredentials: true})
//         // console.log(result.data.data);
//         dispatch(setMyProductData(result.data.data))
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchProducts()
//     },[dispatch])
// }

// export default useGetAllProducts