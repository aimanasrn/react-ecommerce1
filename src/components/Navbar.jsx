import React from 'react'
import { Logo1 } from '../assets/img'

const Navbar = () => {

    const Items = [
        {id: 1, name: 'Home'},
        {id: 2, name: 'Features'},
        {id: 3, name: 'Pricing'},
        {id: 4, name: 'Testimonials'},
        {id: 5, name: 'Contact'},
    ]
  return (
    <nav className='flex justify-between items-center bg-primary py-4 px-5 shadow-md fixed z-1 w-full rounded-b-md'>
        {/* Logo */}
        <a href="#Home" className='flex items-center gap-2'>
            <img src={Logo1} alt="logo1" className='size-15'/>
            <span className='text-3xl font-bold text-white'>ShopCart</span>
        </a>
        {/* element */}
        <ul className='flex items-center gap-10 '>
          {Items.map((item) => (
            <li>
              <a key={item.id} href={item.name} className='group font-medium text-white block relative '>
                {item.name}
                <span className='absolute inset-x-0 bottom-0 h-0.5 bg-accent1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
              </a>
            </li>
          ))}       
        </ul>
        <div className='bg-primary'>
          <a href="#" className='p-4 bg-accent2 rounded-4xl font-medium text-white text-center hover:bg-accent1 hover:text-primary transform duration-300'>Get Started</a>
        </div>
    </nav>
  )
}

export default Navbar