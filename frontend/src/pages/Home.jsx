import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import UserContext from '../context/UserContext';
import GenerateAccessToken from '../utils/GenerateAccessToken';
import Flight from './Flight';

function Home() {
  const {setAccessToken , accessToken}= useContext(UserContext)
  
  
  useEffect(()=>{
    const generate = async ()=>{
      const token = await GenerateAccessToken()
      console.log("access token generated",token)
      setAccessToken(token?.data?.access_token)
    }
    generate()
  },[])

  return (
    <div className='bg-gray-950 min-h-screen'>
      <div>
        <HeroSection />
      </div>
      <div>
        <Flight/>
      </div>

    </div>
  );
}

export default Home;

