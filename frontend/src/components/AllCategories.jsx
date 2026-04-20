import React from 'react'
import { useGetAllCategories } from '../hooks/useGetAllCategories'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";


const AllCategories = () => {
    
    useGetAllCategories()
    const {categoryData} = useSelector(state => state.category)
    const navigate = useNavigate()
  return (
    <>
     {/* <Header/> */}
      <section id='categories'>
      <div className='w-full h-full bg-pink-100 p-8 '>
        <h1 className='font-bold text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-[#fc00ff] animate-pulse'>Fusion! Find Best</h1>
        <div className="w-[60%] h-[50%] flex items-center mx-auto ">
        {categoryData.map((category,index) => 
            <div key={index} className="flex items-center justify-center overflow-hidden rounded-sm mx-auto" 
            onClick={()=>navigate(`/category?category=${category.categoryName}`)}>
              <div className="relative">
               <p className='absolute bottom-20 right-5 flex items-center border border-4  justify-center bg-pink-500 px-3 py-1 font-semibold text-white text-2xl mt-4 rounded'>
               For {category.categoryName} <MdArrowForwardIos/></p>
              <img src={category.image}  className={`h-[75vh]`} alt={`${category.categoryName}-Category`}   />
              </div>
              {/* <p className='font-bold text-gray-800 mt-4'>{category.categoryName}</p> */}
              </div>
        )} 
          </div>
          </div>
    </section>
    </>
  )
}

export default AllCategories