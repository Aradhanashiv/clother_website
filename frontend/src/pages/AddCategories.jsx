import { useState } from "react"
import { serverUrl } from "../App"
import ClipLoader from "react-spinners/ClipLoader"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddCategories = () => {
  // const [num, setNum] = ("")
  const [categoryName, setCategoryName] = useState("")
  const [frontend, setFrontend] = useState([])
  const [backend, setBackend] = useState([])
//   const [isActive, setIsActive] = useState(false)
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['Men' , 'Women' , 'Kids']

  const handleCategoryName = (e) => {
     const name = e.target.value
     setCategoryName(name)
     
  }

  
  // setTimeout(()=>{
  //   console.log("e");
  //   setNum("c")
  // })
  // console.log("b");
  

  const handleImage = async (e) => {
    let files = Array.from(e.target.files)
    console.log(files);
    setBackend(files)
    const tempUrls = files.map((file) => URL.createObjectURL(file))
    setFrontend(tempUrls)
  }

  const handleAddCategories = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("categoryName" , categoryName)
      backend.forEach((file)=>{
        formData.append("image" , file)
      })
      const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/category/add-category` , formData , {withCredentials: true})
      setCategoryName(""), setFrontend([]), setBackend([])
      console.log(result);
      setLoading(false)
      navigate('/')
    } catch (error) {
      console.log(error);
      setErr(error.response.data.message)
      setLoading(false)
    }
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4 bg-pink-50'>
      <div className={`w-[60%] bg-white rounded-xl shadow-lg p-8 border-[1px] border-pink-600`} >
         <h1 className={`text-4xl font-bold text-pink-500 mb-2 text-center`}>Admin Panel</h1>
          <p className='text-center mt-3 font-semibold mb-6 text-gray-700'>Add Categories</p>
             {err && <p className="text-red-500 text-center font-semibold">*{err}</p>}                
            <form onSubmit={handleAddCategories}>
             
            <div className='mb-3'>  
            <label htmlFor="categoryName" className='block text-gray-700 font-medium mb-2'>Select Categories</label>
            {categories.map((category) => ( 
            <div key={category} className="flex items-center gap-3 ml-2">   
            <input type='radio' name='categoryName' placeholder='Enter Category Name' required  value={category}
            onChange={handleCategoryName} />
            <span >{category}</span>
            </div>
            ))}
            </div>
               
            <div className="mb-3">
            <label htmlFor='categoryImage' className='block text-gray-700 font-medium mb-1'>Category Image</label>
            <div className="relative">
            <input type='file' multiple name='image' className='w-full border border-pink-600 rounded-xl px-3 py-2' 
            placeholder='category Image' required onChange={handleImage}/>
            <div className="mt-5 flex">
            {frontend && frontend.map((image,index)=>       
            <img key={index} src={image} alt="Preview Image" className=" h-50 mx-auto rounded-lg border border-pink-600" /> )}
            </div> 
            </div>
            </div>

          
        
           <button type='submit'
            className='mt-4 w-full font-semibold rounded-xl px-6 py-2 text-white bg-pink-700 border border-pink-600 rounded-xl transition duration-200 hover: hover:text-gray-800  
            hover:bg-white cursor-pointer' disabled={loading}>
             {loading ? <ClipLoader size={20} />: "Add Product" }
            </button>
         </form>
      </div>
    </div>
  )
}

export default AddCategories 