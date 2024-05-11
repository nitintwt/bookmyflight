import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
  <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-black dark:bg-black shadow">
    <Link className="text-lg font-bold text-white" to="/">
      Bookmyflight
    </Link>
    <Link to="/signup"  className='text-white'>Login</Link>
  </header>
  )
}

export default Navbar
