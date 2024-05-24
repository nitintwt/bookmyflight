import React, { useState } from 'react'
import {Checkbox} from "@nextui-org/checkbox";


function FlightsFilter({ isFastest , setIsFastest ,  isNonStop , setIsNonStop , isOneStop , setIsOneStop , isMorningDeparture , setIsMorningDeparture , isAfternoonDeparture , setIsAfternoonDeparture , isNightDeparture , setIsNightDeparture}) {
  
  //console.log(isNonStop)

  return (
    <div className='flex w-full flex-wrap md:flex-nowrap gap-7 dark font-bold'>
      <div>
      <Checkbox size="lg" isDisabled defaultSelected   >Cheapest First</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isFastest} onChange={(()=> setIsFastest(!isFastest))}>Fastest</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isNonStop} onChange={()=> setIsNonStop(!isNonStop)}>Non Stop</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isOneStop} onChange={()=> setIsOneStop(!isOneStop)}>1 Stop</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isMorningDeparture} onChange={()=> setIsMorningDeparture(!isMorningDeparture)}>Morning Departure</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isAfternoonDeparture} onChange={()=> setIsAfternoonDeparture(!isAfternoonDeparture)}>Afternoon Departure</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isNightDeparture} onChange={()=> setIsNightDeparture(!isNightDeparture)}>Night departure</Checkbox>
      </div>
    </div>
  )
}

export default FlightsFilter
