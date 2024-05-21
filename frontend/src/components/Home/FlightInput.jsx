import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { DateRangePicker } from "@nextui-org/date-picker";

function FlightInput() {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [numberPassengers, setNumberOfPassengers] = useState(1);
  const [trip, setTrip] = useState('one-way');
  const [oneWayDate, setOneWayDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  

  return (
    <div className='flex flex-col  p-5 bg-white m-5 border rounded-3xl '>
      <div className='flex'>
        <Select label='One way or round trip' variant='bordered' className='max-w-xs mr-5' size='sm' value={trip} onChange={(e)=> setTrip(e.target.value)}>
          <SelectItem key="one-way" value='one-way'>One way</SelectItem>
          <SelectItem key='round-trip' value='round-trip'>Round Trip</SelectItem>
        </Select>

        <Select label='Number of passengers' className='max-w-xs ' variant='bordered' size='sm' value={numberPassengers} onChange={(e)=> setNumberOfPassengers(e.target.value)}>
          <SelectItem key="1" value="1">1 Passenger</SelectItem>
          <SelectItem key='2' value="2">2 Passengers</SelectItem>
          <SelectItem key="3" value="3">3 Passengers</SelectItem>
          <SelectItem key='4' value="4">4 Passengers</SelectItem>
          <SelectItem key="5" value="5">5 Passengers</SelectItem>
          <SelectItem key='6' value="6">6 Passengers</SelectItem>
        </Select>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4  mt-5">
        <Input type="text" label="From" variant='bordered' value={from} onChange={(e) => setFrom(e.target.value)} />
        <Input type="text" label="To" variant='bordered' value={to} onChange={(e) => setTo(e.target.value)} />
        <DatePicker label="Departure Date" variant='bordered' className="max-w-[284px]" value={oneWayDate} onChange={setOneWayDate} />
        {trip === 'round-trip' && (
          <DatePicker label="Return Date" variant='bordered' className="max-w-[284px]" value={returnDate} onChange={setReturnDate} />
        )}
      </div>
    </div>
  );
}

export default FlightInput;
