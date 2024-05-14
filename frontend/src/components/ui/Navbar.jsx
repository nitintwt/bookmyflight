import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
  <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-black dark:bg-black shadow">
    <Link className="text-lg font-bold text-white" to="/">
      Bookmyflight
    </Link>
    <NavLink to="/signup"  
    style={({ isActive }) => {
    return isActive ? { color: "black" } : {};}}
    className='text-white'>
      Login
    </NavLink>
  </header>
  )
}

export default Navbar
