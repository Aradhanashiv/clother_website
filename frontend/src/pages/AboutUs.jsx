import React from 'react'
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
     <section id='AboutUs'>
      
    <div className="mt-[70px] w-full min-h-screen bg-pink-50 p-5 ">
        <button className="px-6 py-4" onClick={() => navigate("/")}>
                  <FaBackward size={25} />
                </button> 
      <h1 className="mt-5 font-semibold text-4xl text-center mb-8 text-pink-800">
        About Us - Clother
      </h1>
      <div className='md:w-[70%] w-full m-auto text-gray-600 text-sm'>
    <p><b>Welcome to Clother,</b> your go-to destination for stylish, comfortable, and affordable fashion. At Clother, we believe that clothing is more than just fabric—it’s a powerful form of self-expression. The way you dress reflects your personality, mood, and confidence, and we’re here to help you express yourself effortlessly.</p>

<p className='mt-2'><b>Our mission is simple:</b> to make trendy, high-quality clothing accessible to everyone without compromising on style or comfort. Whether you're searching for everyday essentials, casual wear, or statement pieces that stand out, Clother offers a carefully curated collection to suit every occasion and preference.</p>

<p className='mt-2'>We are passionate about bringing you the latest fashion trends while maintaining a focus on quality and affordability. Each product is selected with attention to detail, ensuring that you not only look good but feel good too. We aim to create a balance between modern style and everyday practicality.</p>

<p className='mt-2'><b>At Clother,</b> user experience is at the heart of everything we do. From smooth navigation to a seamless checkout process, our platform is designed to make your shopping journey easy, fast, and enjoyable. We continuously work to improve and evolve, keeping your needs and expectations in mind.</p>

<p className='mt-2'>More than just a shopping platform, Clother is a growing community of fashion lovers who value style, simplicity, and confidence. We are committed to building trust and delivering value with every purchase.</p>

<p className='mt-2'>We focus on simplicity, quality, and user experience. From browsing to checkout, every step is designed to be smooth and enjoyable. Our platform is built to help you discover the latest trends effortlessly while ensuring reliability and convenience.</p>

<p className='mt-2'>Clother is not just a shopping website—it’s a fashion experience built with passion and creativity.</p>
<p className='mt-2'><b>Thank you for choosing Clother.</b></p>

<p className='mt-2'><b>Stay stylish. Stay confident. Stay Clother.</b></p>

   </div>
      </div>
      </section>
      </>
  )
}

export default AboutUs
