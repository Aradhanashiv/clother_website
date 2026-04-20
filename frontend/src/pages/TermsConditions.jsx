import React from 'react'
import Header from '../components/Header'
import Footer from './Footer';

const TermsConditions = () => {
    const termsData = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing this website, you confirm that you are at least 18 years old or using the platform under the supervision of a parent or legal guardian. Your continued use of Clother indicates your acceptance of these Terms and Conditions."
  },
  {
    title: "Use of the Website",
    content:
      "You agree to use Clother only for lawful purposes. You must not misuse the website by introducing viruses, attempting unauthorized access, or engaging in any activity that may harm the platform or its users."
  },
  {
    title: "Account Responsibility",
    content:
      "If you create an account on Clother, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account."
  },
  {
    title: "Product Information",
    content:
      "We strive to ensure that all product descriptions, images, and pricing are accurate. However, Clother does not guarantee that all information is error-free and reserves the right to correct any errors."
  },
  {
    title: "Pricing and Payments",
    content:
      "All prices listed on Clother are subject to change without notice. Payments must be completed through the available payment methods provided on the platform."
  },
  {
    title: "Order Acceptance and Cancellation",
    content:
      "Clother reserves the right to refuse or cancel any order due to product availability, pricing errors, or suspected fraudulent activity. Refunds will be processed if payment has already been made."
  },
  {
    title: "Shipping and Delivery",
    content:
      "Delivery times are estimates and may vary depending on location and external factors. Clother is not responsible for delays caused by shipping partners."
  },
  {
    title: "Returns and Refunds",
    content:
      "Users may request returns within a specified period, provided the product is unused and in its original condition. Refunds will be processed as per policy."
  },
  {
    title: "Intellectual Property",
    content:
      "All content on Clother, including text, images, logos, and design, is the property of Clother and is protected by applicable intellectual property laws."
  },
  {
    title: "Limitation of Liability",
    content:
      "Clother shall not be held liable for any direct, indirect, or incidental damages arising from the use or inability to use the website or its services."
  },
  {
    title: "Third-Party Links",
    content:
      "Clother may include links to third-party websites. We are not responsible for the content, policies, or practices of these external sites."
  },
  {
    title: "Privacy",
    content:
      "Your use of Clother is also governed by our Privacy Policy. We are committed to protecting your personal information and ensuring a secure experience."
  },
  {
    title: "Changes to Terms",
    content:
      "Clother reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the platform indicates acceptance of the updated terms."
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions shall be governed and interpreted in accordance with applicable laws. Any disputes will be subject to the jurisdiction of the relevant courts."
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding these Terms and Conditions, you may contact us through our official website."
  }
];

  
  return (
    <>
    <Header/>
     <section id='termCondition'>
    <div className="mt-[70px] w-full min-h-screen bg-pink-50 p-5 ">
      <h1 className="mt-5 font-semibold text-4xl text-center mb-8 text-pink-800">
       Terms and Conditions - Clother
      </h1>
      <div className='w-[70%] m-auto text-sm'>
   {termsData.map((item,index) => (
    <div key={index} className='mt-2'>
        <p className='font-bold text-medium'>{index+1}. {item.title}</p>
        <p className='text-gray-600'>{item.content}</p>
    </div>
   ))}

   </div>
      </div>
      </section>
      <Footer/>
      </>
  )
}

export default TermsConditions
