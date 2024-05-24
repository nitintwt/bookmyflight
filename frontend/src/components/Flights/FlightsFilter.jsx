import React, { useState } from 'react'
import {Checkbox} from "@nextui-org/checkbox";


function FlightsFilter({isNonStop , setIsNonStop , isOneStop , setIsOneStop}) {
  
  console.log(isNonStop)

  return (
    <div className='flex w-full flex-wrap md:flex-nowrap gap-7 dark font-bold'>
      <div>
      <Checkbox size="lg" isDisabled defaultSelected   >Cheapest First</Checkbox>
      </div>
      <div>
      <Checkbox size="lg">Fastest</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isNonStop} onChange={()=> setIsNonStop(!isNonStop)}>Non Stop</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isOneStop} onChange={()=> setIsOneStop(!isOneStop)}>1 Stop</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isOneStop} onChange={()=> setIsOneStop(!isOneStop)}>Morning Departure</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isOneStop} onChange={()=> setIsOneStop(!isOneStop)}>Afternoon Departure</Checkbox>
      </div>
      <div>
      <Checkbox size="lg" isSelected={isOneStop} onChange={()=> setIsOneStop(!isOneStop)}>Night departure</Checkbox>
      </div>
    </div>
  )
}

export default FlightsFilter
