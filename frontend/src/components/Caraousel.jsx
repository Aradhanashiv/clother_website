import { useEffect, useState } from "react"

const Caraousel = () => {

    let [current, setCurrent] = useState(0)
    let images = ['/images/mainimg.jpg' , '/images/mainimg2.png', '/images/image (3).jpg']

    useEffect(()=>{ 
        const interval = setInterval(()=>{
        setCurrent((prev) => (prev + 1) % images.length)
        },2000)
        return () => clearInterval(interval)
        },[images.length])
       
  return (

    <>
    <section className="w-full h-[90vh] bg-pink-50 relative">
    {images.map((image, i) => 
    <img key={i} src={image} alt="header" className={`w-full h-[80vh] absolute object-cover absolute transition-opacity duration-500
    ${i == current? 'opacity-100' : 'opacity-0'} `}/>)}
   </section>
    </>
  )
}

export default Caraousel