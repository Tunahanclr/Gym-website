import React from 'react';
import slider1 from "../assets/slider1.png"
import slider2 from "../assets/heroP.png"

export default function About() {

  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-28 mt-20'>
      <div className='mx-auto'>
        <h3 className='text-white text-3xl'>About Us</h3>
        <p className='mt-5 w-[500px]'>
          Gym24 is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis maxime non debitis quod quidem deserunt praesentium minus
          commodi quae natus!
        </p>
        <p className='mt-5 w-[370px] sm:w-[500px]'>
          Gym24 is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis maxime non debitis quod quidem deserunt praesentium minus
          commodi quae natus!
        </p>
        <p className='mt-5 w-[370px] sm:w-[500px]'>
          Gym24 is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis maxime non debitis quod quidem deserunt praesentium minus
          commodi quae natus!
        </p>
      </div>
      
      <div className=''>
      <img src={slider1} className='w-[400px] sm:w-[500px] object-contain' alt="Slider 1" />
      </div>
    </div>
  );
}
