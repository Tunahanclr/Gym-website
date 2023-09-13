import React from 'react'
import heroP from "../assets/heroP.png"

export default function Hero() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-20 min-h-screen'>
        <div>
            <h2 className='text-white text-3xl sm:text-5xl font-extrabold md:w-[600px]'>
                Free trial session with a trainer
            </h2>
            <button className='mt-6 w-32 rounded-md bg-yellow-200 text-black h-12'>Detailed</button>
        </div>
        <div className='max-w-3xl'>
            <img className='opacity-50 w-full rounded-full object-cover' src={heroP} alt="Hero Image" />
        </div>
    </div>
  )
}
