import axios from 'axios'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/Home/HeroSection'

function Home() {


  return (
    <div className='bg-gray-950 h-screen'>
      <div>
        <HeroSection/>
      </div>
    </div>
    
  )
}

export default Home
