import React from 'react'
import {Input} from "@nextui-org/react";

function AirportResult({city , airportCode}) {
  return (
    <div>
      <p className='text-black border'>{city}</p>
    </div>
  )
}

export default AirportResult