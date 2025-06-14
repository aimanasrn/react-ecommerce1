import React from 'react'
import { IoMdTime } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

const Features = () => {

  const card = [
    {id:1, name: 'Save Time', desc: 'Our intuitive interface helps you find what you need quickly and efficiently.', icon: <IoMdTime />, iconColor:'text-accent1', bgIcon:'bg-accent1/10', div: '/30'},
    {id:2, name: 'Save Money', desc: 'Compare prices across multiple retailers and find the best deals available.', icon: <RiMoneyDollarCircleLine />, iconColor:'text-accent2', bgIcon:'bg-accent2/10', div: '/30'},
    {id:3, name: 'Shop Securely', desc: 'Our platform ensures your personal and payment information is always protected.', icon: <AiOutlineSafety />, iconColor:'text-accent3', bgIcon:'bg-accent3/10', div: '/30'},
  ]

  const step = [
    {id:1, title: 'Create Account', detail: 'Sign up for free and set up your shopping preferences.', bgColor: 'bg-primary'},
    {id:2, title: 'Browse Products', detail: 'Explore thousands of products from various retailers.', bgColor: 'bg-accent1'},
    {id:3, title: 'Add to Cart', detail: 'Select items you want to purchase and add them to your cart.', bgColor: 'bg-accent2'},
    {id:4, title: 'Checkout', detail: 'Complete your purchase securely and track your delivery.', bgColor: 'bg-accent3'},
  ]
  return (
    <>
      <section id='Features' className='h-[50vh] px-4 py-20 mx-auto flex justify-center items-center bg-gray-50'>
          <div className='flex flex-col w-full h-100'>
              <div className='text-center font-poppins items-center'>
                <h1 className='text-5xl font-bold mb-3'>Why Choose ShopCart?</h1>
                <p className='text-xl text-text'>Our platform offers a range of features designed to enhance your shopping experience.</p>
              </div>
              <div className='flex flex-wrap mx-3 mt-10 gap-6 justify-center'>
                {card.map((item) => (
                  <div key={item.id} className='h-65 w-120 shadow-md rounded-xl p-3 flex flex-col font-poppins transform-transition duration-300 hover:-translate-y-2 hover:shadow-2xl bg-background'>
                    <div className={`flex justify-start items-center w-20 h-20`}>
                      <span className={`${item.iconColor} ${item.bgIcon} text-6xl p-2 rounded-full`}>{item.icon}</span>
                    </div>
                    <h1 className='mt-5 text-2xl font-bold'>{item.name}</h1>
                    <p className='text-lg text-gray-400 mt-2'>{item.desc}</p>
                  </div>
                ))}
              </div>
          </div>
      </section>
      <section id='Features' className='h-[50vh] px-4 py-20 mx-auto flex justify-center items-center'>
          <div className='flex flex-col w-full h-100'>
              <div className='text-center font-poppins items-center'>
                <h1 className='text-5xl font-bold mb-3'>How ShopCart Works</h1>
                <p className='text-xl text-text'>Get started in just a few simple steps.</p>
              </div>
              <div className='flex flex-wrap mx-3 mt-10 gap-20 justify-center text-center'>
                {step.map((item) => (
                  <div key={item.id} className=' h-60 w-100 flex flex-col p-5 font-poppins'>
                    <div className='text-center flex justify-center'>
                      <span className={`${item.bgColor} p-1 h-20 rounded-full w-20 flex items-center justify-center text-2xl text-white font-bold`}>{item.id}</span>
                    </div>
                    <div className='pt-5 text-3xl font-bold'>{item.title}</div>
                    <div className='pt-1 text-gray-400'>{item.detail}</div>
                  </div>
                ))}
              </div>
          </div>
      </section>
    </>
  )
}

export default Features