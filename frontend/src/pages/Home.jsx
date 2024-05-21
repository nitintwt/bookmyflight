import axios from 'axios';
import React, { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import FlightInput from '../components/Home/FlightInput';
import FlightSearchCard from '../components/Home/FlightCard';

function Home() {

  useEffect(()=>{
    const fetchAccesssToken = async ()=>{
      try {
      const data = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token" , {client_id:`${import.meta.env.VITE_CLIENT_ID}` , client_secret:`${import.meta.env.VITE_CLIENT_SECRET}` ,  grant_type: 'client_credentials'} , {headers: {'Content-Type': 'application/x-www-form-urlencoded'}} )
      console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAccesssToken()
  },[])

  return (
    <div className='bg-gray-950 min-h-screen'>
      <div>
        <HeroSection />
      </div>
      <div>
        <FlightInput />
      </div>
      <div>
        <FlightSearchCard />
      </div>
    </div>
  );
}

export default Home;

