import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCookies } from 'react-cookie';


function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookieName']);
  const [isAuth , setIsAuth] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      if(cookies.accessToken){
        setIsAuth(true)
      }
    }, 2000)
  })

  return (
  <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-black dark:bg-black shadow">
    <Link className="text-lg font-bold text-white" to="/">
      Bookmyflight
    </Link>
    { isAuth ? ("") : (<NavLink to="/signup"  
    style={({ isActive }) => {
    return isActive ? { color: "black" } : {};}}
    className='text-white'>
      Login
    </NavLink>)}
  </header>
  )
}

export default Navbar
