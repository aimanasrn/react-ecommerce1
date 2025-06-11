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
    <nav className='flex justify-between items-center bg-primary py-4 px-5 shadow-md fixed w-full rounded-b-md'>
        {/* Logo */}
        <a href="#Home" className='flex items-center gap-2'>
            <img src={Logo1} alt="logo1" className='size-15'/>
            <span className='text-3xl font-bold text-white'>ShopCart</span>
        </a>
        {/* element */}
        <div className='flex items-center gap-10'>
          {Items.map((item) => (
            <a key={item.id} href={item.name} className='font-medium text-white inline-block hover:text-accent1 duration-200'>{item.name}</a>
          ))}       
        </div>
        <div className='bg-primary'>test</div>
    </nav>
  )
}

export default Navbar