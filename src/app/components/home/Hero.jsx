import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen  font-sans text-white overflow-hidden flex flex-col items-center justify-center text-center px-4  z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                Hi, I'm a <span className="text-blue-500">Frontend Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
                I build beautiful, responsive, and engaging web experiences using Next.js and Tailwind CSS.
            </p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                View My Work
            </button>
    </div>
  )
}

export default Hero
