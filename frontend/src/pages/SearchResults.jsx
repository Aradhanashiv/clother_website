import React, { useState } from 'react'
import ProductsSlider from '../components/ProductsSlider.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import axios from 'axios'
import { serverUrl } from '../App'
import { BiSad } from "react-icons/bi";
import AddToCartButton from '../components/AddToCartButton.jsx'


const SearchResults = () => {

  const query = new URLSearchParams(useLocation().search).get("q")
  const [results, setResults] = useState([])

  useEffect(()=>{
    if(!query) return;
    const fetchSearchResults = async() => {
      try {
        const res = await axios.get(`${serverUrl}/search?q=${query}` , {withCredentials: true})
        setResults(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearchResults()
  },[query])

  return (
    <>
    <Header/>
      <section className='mt-[70px] w-full min-h-screen bg-pink-50 p-5 '>
        <h1 className='font-semibold text-5xl text-center mb-8 text-pink-800'>Your Fashion, Your Style</h1>
        {results.length === 0 ? (
          <div className='flex items-center justify-center font-semibold text-xl text-green-800'>
            <BiSad size={25} /><p className='px-2'>No Results to Shown </p>
            </div>
        ):(
         <div className="grid grid-cols-4 gap-5 ">
         {results.map((product,index) => 
            <div key={index} className="overflow-hidden shadow bg-white/70">
               <ProductsSlider images={product.productImage}/>
               <div className="p-5">
                <p className='font-bold text-lg text-black mt-4'>{product.productName}</p>
                <p className='font-semibold'>Rs. {product.price}</p>
                 <AddToCartButton cartproduct={product}/>
                </div>
            </div>
             )} 
              </div>
        )}
       
    </section>
    </>
  )
}

export default SearchResults