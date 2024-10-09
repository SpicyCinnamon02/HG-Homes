import React from 'react'
import HeroBG from "/src/assets/home-page/Hero-Bg.jpeg"

const HomeHero = () => {
  return (
    <div
      className="h-[400px] lg:h-[100vh] py-[80px] sm:pt-[160px] sm:pb-[80px] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col gap-10 lg:gap-5"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)),url(${HeroBG})` }}
    >
      <div className='flex justify-center items-center flex-col w-[85%] lg:w-[80%]' >
        <h1 className='text-[30px] lg:text-[80px] font-bold text-white tracking-tight'>Your Dream Home Awaits</h1>
        <p className='text-[20px] lg:text-[30px] font-medium text-center text-white tracking-tight'>
          Modern, energy-efficient homes designed for comfort and sustainability.
        </p>
      </div>
      <div>
        <button
          className="px-3 py-2 lg:px-6 lg:py-3 text-[16px] bg-green-light text-black font-semibold rounded-lg shadow-md hover:bg-green-darker focus:outline-none hover:text-white focus:ring-2 focus:ring-opacity-75 transition duration-300"
        >
          View House Plans
        </button>
      </div>
    </div>
  )
}

export default HomeHero