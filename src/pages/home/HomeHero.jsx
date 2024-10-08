import React from 'react'
import HeroBG from "/src/assets/home-page/Hero-Bg.jpeg"

const HomeHero = () => {
  return (
    <div
      className="h-[400px] lg:h-[100vh] py-[80px] sm:pt-[160px] sm:pb-[80px] bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${HeroBG})` }}
    >
    </div>
  )
}

export default HomeHero