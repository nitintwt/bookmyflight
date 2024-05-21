import React, { useState } from 'react';

const FlightSearchCard = () => {
  const [airLine , setAirLine]= useState('')
  const [price , setPrice]= useState('')
  const [from , setFrom ]= useState('')
  const [fromTime , setFromTime]= useState('')
  const [to , setTo]= useState('')
  const [toTime , setToTime]= useState('')
  const [totalTravelTime , setTotalTravelTime]= useState('')
  const [numberOfStops , setNumberOfStops]= useState('')
  const [ stops , setStops]= useState('')

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 p-6">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <div className="ml-3 text-lg font-semibold text-gray-900">SWISS - Business</div>
        </div>
        <div className="flex justify-end items-center text-xl font-bold text-gray-900">$1,276</div>
      </div>
      <div className="grid grid-cols-3 gap-9 mb-2">
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-500">LHR</div>
          <div className="text-lg font-medium text-gray-900">8:40 AM</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-500">10h 30m </div>
          <h1>1 Stop</h1>
          <div className="text-sm text-gray-500 text-right">
           <div>LHR → ZRH</div>
           <div>ZRH → DEL</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-500">DEL</div>
          <div className="text-lg font-medium text-gray-900">11:40 PM</div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Book Flight</button>
      </div>
    </div>
  );
}

export default FlightSearchCard;