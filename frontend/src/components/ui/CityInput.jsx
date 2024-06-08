import React from 'react'
import { Input } from '@nextui-org/input';
import axios from 'axios';
import { useState, useCallback , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setFlightData } from '../../store/FlightSlice';

function CityInput({label}) {

  const [city , setCity]= useState('')

  const dispatch = useDispatch();
  const userAccessToken = useSelector((state) => state?.user?.accessToken);

      // debouncing. Whenever the user was typing city name , the api was called with every letter , so we delayed the API call by 500ms.
      useEffect(() => {
        const handler = setTimeout(() => {
          const fetchAirportData = async () => {
            const headers = { 'Authorization' : `Bearer ${userAccessToken}` };
            const params = { subType: 'CITY,AIRPORT', keyword: city };
            try {
              const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations',{ headers, params });
              //console.log('city',response.data.data[0]?.iataCode)
              if (label=='from'){
                dispatch(setFlightData({departureAirport : response.data.data[0]?.iataCode}))
              } else {
                dispatch(setFlightData({arrivalAirport : response.data.data[0]?.iataCode}))
              }
            } catch (error) {
              if (error?.response?.statusText =='Unauthorized') {   // if the access token got expired , we will re-generate the access token
                try {
                  const token = await generateAccessToken();
                  console.log('Token generated');
                  dispatch(assignAccessToken(token?.data?.access_token));
                } catch (tokenError) {
                  console.error('Failed to refresh access token');
                }
              } else {
                console.error('Please put a valid city name');
              }
            }
          };
    
          if (label=='from') fetchAirportData(city);
    
          if (label =='to')  fetchAirportData(city);
          
        }, 500); // 500ms debounce delay
    
        // When setTimeout is used in a useEffect hook, it schedules a delayed task, here it is delayed by 500ms.
        // If dependencies change before the delay ends, multiple timeouts and API calls can occur.
        // The cleanup function clears pending timeouts, ensuring only the latest input triggers the API call after the debounce delay.
        return () => clearTimeout(handler);
        
      }, [city]);
  return (
    <Input
    type="text"
    label={`${label}`}
    variant="bordered"
    value={city}
    onChange={(e)=>setCity(e.target.value)}
    />
  )
}

export default CityInput
