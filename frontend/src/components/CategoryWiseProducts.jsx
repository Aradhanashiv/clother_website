// import useGetAllProducts from '../hooks/useGetAllProducts.jsx'
import { useDispatch, useSelector } from 'react-redux'
import ProductsSlider from './ProductsSlider.jsx'
import { use, useEffect } from 'react'
import {fetchProductsByCategory} from '../redux/productSlice.js'
import { useParams, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { addtoCart } from '../redux/cartSlice.js'
import AddToCartButton from './AddToCartButton.jsx'
import Header from './Header.jsx'

const CategoryWiseProducts = ({}) => {
   const dispatch = useDispatch()
   const [searchParams] = useSearchParams()
   const category = searchParams.get("category")
   console.log(searchParams.get("category"));

   const {myProductsData, loading, error} = useSelector(state => state.product)

   useEffect(()=>{
  if(category){
    dispatch(fetchProductsByCategory(category))
  }
   },[category,dispatch])


   if(loading) return <p>loading...</p>
   if(error) return <p>error...</p>
  return (
    <>
    <Header/>
    <section className='mt-[70px] w-full min-h-screen bg-pink-50'>
        <h1 className='font-bold text-5xl text-pink-800 text-center mb-[20px] p-[30px]'>Your Fashion, Your Style</h1>
        <div className="grid grid-cols-5 gap-5 mx-8 ">
         {myProductsData.map((product,index) => 
            <div key={index} className="overflow-hidden rounded-xl">
               <ProductsSlider images={product.productImage}/>
                <p className='font-bold text-gray-800 mt-4'>{product.productName}</p>
                <p className='font-semibold'>{product.price}</p>
                <AddToCartButton cartproduct={product}/>
            </div>
            
             )} 
              </div>
    </section>
    </>
  )
}

export default CategoryWiseProducts