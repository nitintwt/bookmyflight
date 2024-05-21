import React, { Fragment, useContext, useState } from 'react';
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { DateRangePicker } from "@nextui-org/date-picker";
import axios from 'axios';
import UserContext from '../../context/UserContext';
import GenerateAccessToken from '../../utils/GenerateAccessToken';
import FlightCard from './FlightCard';

function FlightInput() {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [numberPassengers, setNumberOfPassengers] = useState(1);
  const [trip, setTrip] = useState('one-way');
  const [oneWayDate, setOneWayDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [flights , setFlights]= useState([])

  const {accessToken , setAccessToken}= useContext(UserContext)

  const handleSearch = ()=>{
    const fetchFlightDetails = async()=>{
      const params = {
        originLocationCode : "DEL",
        destinationLocationCode : "BOM",
        departureDate : '2024-06-06',
        adults: '2',
        max: '5',
      }
      const headers = {'Authorization' :`Bearer ${accessToken}`}
      try {
        const data = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {params , headers})
        console.log(data)
        //console.log(data?.data?.data)
        setFlights(data?.data?.data)
      } catch (error) {
        /*if(error){
          const token = await GenerateAccessToken()
          setAccessToken(token?.data?.access_token)
        }*/
        console.log('Error while fetching flight data ' , error)
      }
    }
    fetchFlightDetails()
  }

  console.log(flights[0])

  return (
    <Fragment>
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
        <div>
          <button onClick={handleSearch}>SEARCH</button>
        </div>
      </div>
      <div className='p-2'>
        { flights >0 ? (
          flights.map((flight)=>{
            <FlightCard airLine={flight?.validatingAirlineCodes[0]} price={flight?.price?.base} from={flight?.itineraries[0]?.segments[0]?.departure?.iataCode} fromTime={flight?.itineraries[0]?.segments[0]?.departure?.at} to={flight?.itineraries[0]?.segments[0]?.arrival?.iataCode} toTime={flight?.itineraries[0]?.segments[0]?.arrival?.at} numberStops={flight?.itineraries[0]?.segments[0]?.numberOfStops} totalTravelTime={flight?.itineraries[0]?.segments[0]?.duration} />
          })
        ):('')}
      </div>
    </Fragment>
  );
}

export default FlightInput;
