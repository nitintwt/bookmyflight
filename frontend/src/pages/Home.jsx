import axios from 'axios'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/Home/HeroSection'
import FlightInput from '../components/Home/FlightInput'

function Home() {


  return (
    <div className='bg-gray-950 h-screen'>
      <div>
        <HeroSection/>
      </div>
      <div>
        <FlightInput/>
      </div>
    </div>
    
  )
}

export default Home
