import React from 'react'
import { Cart1, Cart2, Cart3, Cart4 } from '../assets/img'

const Hero = () => {
  return (
    <section id='Home' className='h-[80vh] flex items-center bg-accent2/10 pt-5 px-4 mx-auto'>
        <div className='flex items-center w-full'>
            {/* left section */}
            <div className='flex-1 flex flex-col justify-between'>
                <h1 className='text-7xl text-primary font-bold font-poppins mb-3'>
                    Revolutionize Your<br/> <span className='text-accent2'>Shopping Experience</span>
                </h1>
                <p className='font-poppins text-2xl font-thin'>
                    Streamline your shopping journey with our innovative platform designed to save you time and money
                </p>
            </div>
            {/* image */}
            <div className='flex-1 w-full h-150 flex justify-center items-center'>
                <img src={Cart1} alt="" className='rounded-full size-130 top-20 left-30 shadow-2xl'/>
            </div>
        </div>
    </section>
  )
}

export default Hero