import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
     let footer_items = [ {name:'Contact Us' , path:"/" }, {name:'Terms & Conditions' , path:"/term-and-condition" }, 
    {name:'Shop' , path:"/" }]

  return (
    <div className='w-full h-full bg-gray-300 p-8 '>
      <div className="w-[100px] mx-auto">
          <img src="/images/clother.png" alt="Logo_Image" />
      </div>
       <ul className='flex items-center justify-center gap-5 font-semibold text-gray-700'>
               {footer_items.map((item, i) => <Link key={i} to={item.path} className=' hover:text-gray-500'>{item.name  }</Link>)}
       </ul>
       <p className='text-center mt-5 text-gray-700'>© 2026 Clother. All rights reserved</p>
    </div>
  )
}

export default Footer