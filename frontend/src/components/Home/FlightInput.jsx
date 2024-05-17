import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/input";
import {Select, SelectItem} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/date-picker";
import {DateRangePicker} from "@nextui-org/date-picker";

function FlightInput() {
  const [to , setTo] = useState('')
  const [from , setFrom] = useState('')
  const [numberPassengers , setNumberOfPassengers] = useState('')
  const [trip , setTrip] = useState('')
  const [oneWayDate , setOneWayDate] = useState('')
  const []= useState()

 console.log(trip)

  return (
    <div className='flex flex-col dark p-5'>
      <div className='flex'>
        <Select label='one way or round trip' className='max-w-xs mr-5' size='sm'onClick={(e)=> setTrip(e.target.value)} >
          <SelectItem key="one-way" value='one-way'  >One way</SelectItem>
          <SelectItem key='round-trip'>Round Trip</SelectItem>
        </Select>

        <Select label='number of passengers' className='max-w-xs dark' size='sm'>
          <SelectItem key="1">1 Passemgers</SelectItem>
          <SelectItem key='2'>2 Passengers</SelectItem>
          <SelectItem key="3">3 Passemgers</SelectItem>
          <SelectItem key='4'>4 Passengers</SelectItem>
          <SelectItem key="5">5 Passemgers</SelectItem>
          <SelectItem key='6'>6 Passengers</SelectItem>
        </Select>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 dark mt-5 ">
       <Input type="name" label="From" value={from} onChange={(e)=> setFrom(e.target.value)}/>
       <Input type="name" label="To" value={to} onChange={(e)=> setTo(e.target.value)} />
       <DatePicker label="Departure Date" className="max-w-[284px]" />
       <DatePicker label="Return Date" className="max-w-[284px]" />
       
      </div>
    </div>
  )
}

export default FlightInput 

