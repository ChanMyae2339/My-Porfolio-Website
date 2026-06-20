import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
           {/* Navbar Section */}
        <nav className="flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto z-10 relative">
          <div className="text-2xl font-bold tracking-wider">
            MY PORTFOLIO
          </div>
          <ul className="flex gap-8 text-lg">
            <li>
              <Link href="#hero" className="hover:text-gray-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-300 transition-colors">About</Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-gray-300 transition-colors">Projects</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
