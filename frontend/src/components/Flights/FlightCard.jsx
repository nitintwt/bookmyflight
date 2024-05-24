import React, { useState , useContext , useEffect } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext'
import {Button, ButtonGroup} from "@nextui-org/button"

const FlightCard = ({airLine , price , from , fromTime , to , toTime , totalTravelTime , numberStops , stopOneDeparture , stopOneArrival , stopTwoDeparture , stopTwoArrival , stopThreeDeparture , stopThreeArrival}) => {
  const {accessToken , setAccessToken}= useContext(UserContext)
  const [airlineName, setAirlineName] = useState(null);
  

  const formatTotalTravelDuration = (duration) => {
    // Match the duration string against the regular expression pattern
    const match = duration.match(/PT(\d+H)?(\d+M)?/)
  
    // Extract hours and minutes from the matched groups
    const hours = match[1] ? match[1].replace('H', '') : '0'
    const minutes = match[2] ? match[2].replace('M', '') : '0'
  
    // Construct the human-readable format by combining hours and minutes
    return `${hours}h ${minutes}m`.trim()
  }
  
  const formatTiming = (dateTime) => {
    // Extract the time part from the datetime string
    const timePart = dateTime.split('T')[1]
  
    // Match the time part against the regular expression pattern
    const match = timePart.match(/(\d+):(\d+):(\d+)/)
  
    // Extract hours and minutes from the matched groups
    const hours = match && match[1] ? match[1] : '0'
    const minutes = match && match[2] ? match[2] : '0'
  
    // Construct the human-readable format by combining hours and minutes
    return `${hours}:${minutes}`.trim()
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { 'Authorization': `Bearer ${accessToken}` };
        const params = { 'airlineCodes': `${airLine}` };
        const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes', { params, headers });
        setAirlineName(response?.data?.data[0]?.businessName);
      } catch (error) {
        console.log("error fetching airlines name ", error);
      }
    };

    fetchData();
  }, [airLine]);


  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 p-6 ">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <div className="ml-3 text-lg font-semibold text-gray-900">{airlineName}</div>
        </div>
        <div className="flex justify-end items-center text-xl font-bold text-gray-900">₹{price}</div>
      </div>
      <div className="grid grid-cols-3 gap-9 mb-2">
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-500">{from}</div>
          <div className="text-lg font-medium text-gray-900">{formatTiming(fromTime)}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-500">{formatTotalTravelDuration(totalTravelTime)} </div>
          <h1>{numberStops - 1} stop</h1>
          <div className="text-sm text-gray-500 text-right">
           <div>{stopOneDeparture} → {stopOneArrival}</div>
           {stopTwoDeparture ? (<div>{stopTwoDeparture} → {stopTwoArrival}</div>):('')}
           {stopThreeDeparture ? (<div>{stopThreeDeparture} → {stopThreeArrival}</div>):('')}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-500">{to}</div>
          <div className="text-lg font-medium text-gray-900">{formatTiming(toTime)}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button color='primary'>Flight Details</Button>
      </div>
    </div>
  );
}

export default FlightCard;