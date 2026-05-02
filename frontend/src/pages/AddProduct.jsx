import { useState } from "react"
import { serverUrl } from "../App"
import ClipLoader from "react-spinners/ClipLoader"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RxCross1 } from "react-icons/rx";
import { useRef } from "react"
import { useGetAllCategories } from "../hooks/useGetAllCategories"

const AddProduct = () => {
  useGetAllCategories()
  const {categoryData} = useSelector(state => state.category)
  
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [sizes, setSizes] = useState([]);
  const [material, setMaterial] = useState("")
  const [category, setCategory] = useState("")
  const [frontend, setFrontend] = useState([])
  const [backend, setBackend] = useState([])
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const fileInputRef = useRef(null)


   const SIZE_OPTIONS = ["S", "M", "L", "XL", "XXL"];
   
   const handleImage = async (e) => {
    let files = Array.from(e.target.files)
    console.log(files);
    setBackend(files)
    const tempUrls = files.map((file) => URL.createObjectURL(file))
    setFrontend(tempUrls)
  }

   const handleRemoveImage = async (index) => {
    setBackend((prev) => prev.filter((_,i) => i !== index))
    setFrontend((prev) => {
    URL.revokeObjectURL(prev[index])
    return prev.filter((_,i) => i !== index)
    })

    const dt = new DataTransfer()
    const currentFiles = fileInputRef.current.files
    const newCurrentFiles =  Array.from(currentFiles)

    newCurrentFiles.forEach((file,i)=>{
    if(i !== index){
      dt.items.add(file)
    }
   })
    fileInputRef.current.files = dt.files
 }

  const handleAddProducts = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("productName" , productName)
      formData.append("price" , price)
      formData.append("description" , description)
      formData.append("material" , material)
      formData.append("category" , category)
      formData.append("sizes" , JSON.stringify(sizes)),
       backend.forEach((file)=>{
        formData.append("productImage" , file)
      })
      const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/product/add-product` , formData , {withCredentials: true})
      setProductName(""), setFrontend([]), setBackend([]) ,setPrice(""), setCategory(""),setDescription(""), setSizes([]), setMaterial("")
      console.log(result);
      setLoading(false)
      navigate('/')
    } catch (error) {
      console.log(error);
      setErr(error.response.data.message)
      setLoading(false)
    }
  }

  const toggleSize = (size) => {
  setSizes((prev) => {
    const exists = prev.find((s) => s.size === size);

    if (exists) {
      return prev.filter((s) => s.size !== size);
    }
    return [...prev, { size, stock: 0 }];
  });
};

const updateStock = (size, stock) => {
  setSizes((prev) =>
    prev.map((s) =>
      s.size === size ? { ...s, stock: Number(stock) } : s
    )
  );
};

 
  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4 bg-pink-50'>
      <div className={`w-[60%] bg-white rounded-xl shadow-lg p-8 border-[1px] border-pink-600`} >
         <h1 className={`text-4xl font-bold text-pink-500 mb-2 text-center`}>Admin Panel</h1>
          <p className='text-center mt-3 font-semibold mb-6 text-gray-700'>Add Products</p>
             {err && <p className="text-red-500 text-center font-semibold">*{err}</p>}   
             <form onSubmit={handleAddProducts}>

            <div className='mb-3'>  
            <label htmlFor="productName" className='block text-gray-700 font-medium mb-1'>Product Name</label>
            <input type='text' className='w-full border border-pink-600 rounded-lg px-3 py-2 outline-none' name='productName' 
            placeholder='Enter Product Name' required  value={productName} onChange={(e)=>setProductName(e.target.value)}/>
            </div>
               
              <div className="mb-3">
              <label htmlFor='productImage' className='block text-gray-700 font-medium mb-1'>product Image</label>
              <div className="relative">
              <input type='file' multiple name='productImage' ref={fileInputRef} className='w-full border border-pink-600 rounded-xl px-3 py-2' 
              placeholder='Product Image' required onChange={handleImage}/>
               <div className="mt-5 flex">
               {frontend && frontend.map((image,index)=>  
               <div className="relative" key={index}>
                <img src={image} alt="Preview Image" className=" h-50 mx-auto rounded-lg border border-pink-600" />
                <button className="absolute p-1 top-0 right-0 border rounded-sm bg-white border-pink-500"><RxCross1
                onClick={()=>handleRemoveImage(index)}
                /></button>
                
               </div>   
              )}    
              </div> 
              </div>
              </div>

             <div className='mb-3'>  
            <label htmlFor="Price" className='block text-gray-700 font-medium mb-1'>Product Price</label>
            <input type='number' className='w-full border border-pink-600 rounded-lg px-3 py-2 outline-none' name='price' 
            placeholder='Enter Product Price' required  value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            

            <div className='mb-3'>  
            <label htmlFor="category" className='block text-gray-700 font-medium mb-1'>Product Category</label>
             <select value={category} onChange={(e)=>setCategory(e.target.value)} required
              className="w-full border border-pink-600 rounded-lg px-3 py-2 outline-none">
              <option value="">Select Category</option>
             {categoryData.map((category => (
              <option key={category._id} value={category._id}>{category.categoryName}</option>
             )))} 
             </select>
             </div>
        


            <div className='mb-3'>  
            <label htmlFor="description" className='block text-gray-700 font-medium mb-1'>Product description</label>
            <input type='text' className='w-full border border-pink-600 rounded-lg px-3 py-2 outline-none' name='description' 
            placeholder='Enter Product Description' required  value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>

            <div className='mb-3'>  
            <label htmlFor="size" className='block text-gray-700 font-medium mb-1'>Product Available Sizes</label>
           
             {SIZE_OPTIONS.map((size) => 
                { const selected = sizes.find((s) => s.size === size);
                    return (
                      <div key={size} className="flex items-center gap-3 ml-2">
                        <input type="checkbox" checked={!!selected} onChange={() => toggleSize(size)}  />                  
                        <span>{size}</span>                  

                        {selected && (
                          <input type="number" placeholder="Stock" value={selected.stock}
                           onChange={(e) => updateStock(size, e.target.value)}
                          className=" border border-pink-600 rounded-lg  outline-none"/>
                        )}
                      </div>
                    );
                  })}
            </div>


            <div className='mb-3'>  
            <label htmlFor="Material" className='block text-gray-700 font-medium mb-1'>Product Material</label>
            <input type='text' className='w-full border border-pink-600 rounded-lg px-3 py-2 outline-none' name='material' 
            placeholder='Enter Product Material' required  value={material} onChange={(e)=>setMaterial(e.target.value)}/>
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

export default AddProduct 