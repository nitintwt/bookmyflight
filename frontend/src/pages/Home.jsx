import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import generateAccessToken from '../utils/generateAccessToken.js';
import { useDispatch , useSelector } from 'react-redux';
import { assignAccessToken } from '../store/UserSlice';
import FlightSection from '../components/Flights/FlightsSection.jsx';

function Home() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state?.user?.accessToken);
  
  const fetchAccessToken = useCallback(async () => {
    try {
      if (!accessToken) {
        const token = await generateAccessToken();
        console.log('token generated')
        dispatch(assignAccessToken(token?.data?.access_token));
      }
    } catch (error) {
      console.error('Failed to generate access token', error);
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  return (
    <div className="bg-gray-950 min-h-screen">
      <div>
        <HeroSection />
      </div>
      <div>
        <FlightSection/>
      </div>
    </div>
  );
}

export default Home;
