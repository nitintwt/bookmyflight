import React, { useState } from 'react';

const FlightCard = ({airLine , price , from , fromTime , to , toTime , totalTravelTime , numberStops , stops}) => {

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 p-6 ">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <div className="ml-3 text-lg font-semibold text-gray-900">{airLine}</div>
        </div>
        <div className="flex justify-end items-center text-xl font-bold text-gray-900">{price}</div>
      </div>
      <div className="grid grid-cols-3 gap-9 mb-2">
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-500">{from}</div>
          <div className="text-lg font-medium text-gray-900">{fromTime}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-500">{totalTravelTime} </div>
          <h1>{numberStops}</h1>
          <div className="text-sm text-gray-500 text-right">
           <div>LHR → ZRH</div>
           <div>ZRH → DEL</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-500">{to}</div>
          <div className="text-lg font-medium text-gray-900">{toTime}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Book Flight</button>
      </div>
    </div>
  );
}

export default FlightCard;