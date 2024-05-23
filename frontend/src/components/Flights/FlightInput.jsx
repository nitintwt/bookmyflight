import React, { Fragment, useContext, useState } from 'react';
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { DateRangePicker } from "@nextui-org/date-picker";
import axios from 'axios';
import UserContext from '../../context/UserContext';
import GenerateAccessToken from '../../utils/GenerateAccessToken';
import FlightCard from './FlightCard';
import AirportResultLists from './AirportResultLists';

function FlightInput() {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [numberPassengers, setNumberOfPassengers] = useState(1);
  const [trip, setTrip] = useState('one-way');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [flights , setFlights]= useState([])
  const [airportData , setAirportData]= useState([])
  const [departureAirport , setDepartureAirport]= useState('')
  const [arrivalAirport , setArrivalAirport]= useState('')

  const {accessToken , setAccessToken}= useContext(UserContext)

  const formatDate = (date) => {
    const year = date?.year
    const month = date?.month < 10 ? `0${date?.month}` : date?.month
    const day = date?.day < 10 ? `0${date?.day}` : date?.day
  
    return `${year}-${month}-${day}`
  }
  


  
  
  

  const handleFromInputSearch = async (value)=>{
    setFrom(value)
    const headers = {'Authorization' :`Bearer ${accessToken}`}
    const params = {'subType':'CITY,AIRPORT' , 'keyword':`${value}`}
    try {
      const airportData = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {headers , params})
      setAirportData(airportData?.data?.data)
      setDepartureAirport(airportData?.data?.data[0]?.iataCode)
      console.log(airportData?.data?.data[0]?.iataCode)
    } catch (error) {
      console.log('Error fetching airport data' , error)
    } 
  }

  const handleToInputSearch = async (value)=>{
    setTo(value)
    const headers = {'Authorization' :`Bearer ${accessToken}`}
    const params = {'subType':'CITY,AIRPORT' , 'keyword':`${value}`}
    try {
      const airportData = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {headers , params})
      setAirportData(airportData?.data?.data)
      setArrivalAirport(airportData?.data?.data[0]?.iataCode)
      //console.log(airportData?.data?.data[0]?.iataCode)
    } catch (error) {
      console.log('Error fetching airport data' , error)
    } 
  }

  const handleSearch = ()=>{
    const fetchFlightDetails = async()=>{
      const params = {
        currencyCode: "INR",
        originLocationCode : `${departureAirport}`,
        destinationLocationCode : `${arrivalAirport}`,
        departureDate : `${formatDate(departureDate)}`,
        adults: `${numberPassengers}`,
        max: '10',
        
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

  //console.log(flights[0])
  //console.log(formatDate(departureDate))

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
          <Input type="text" label="From" variant='bordered' value={from} onChange={(e) => handleFromInputSearch(e.target.value)} />
          
          <Input type="text" label="To" variant='bordered' value={to} onChange={(e) => handleToInputSearch(e.target.value)} />
          <DatePicker label="Departure Date" variant='bordered' className="max-w-[284px]" value={departureDate} onChange={setDepartureDate} />
          {trip === 'round-trip' && (
            <DatePicker label="Return Date" variant='bordered' className="max-w-[284px]" value={returnDate} onChange={setReturnDate} />
          )}
        </div>
        <div>
          <button onClick={handleSearch}>SEARCH</button>
        </div>
      </div>
      <div className='p-2'>
        { flights.length >0 ? (
          flights.map((flight)=>(
            <FlightCard 
            key={flight?.id} 
            airLine={flight?.validatingAirlineCodes[0]} 
            price={flight?.price?.total} 
            from={flight?.itineraries[0]?.segments[0]?.departure?.iataCode} 
            fromTime={flight?.itineraries[0]?.segments[0]?.departure?.at} 
            to={flight?.itineraries[0]?.segments[flight?.itineraries[0]?.segments.length - 1]?.arrival?.iataCode} 
            toTime={flight?.itineraries[0]?.segments[0]?.arrival?.at} 
            numberStops={flight?.itineraries[0]?.segments?.length} 
            totalTravelTime={flight?.itineraries[0]?.duration} 
            stopOneDeparture={flight?.itineraries[0]?.segments[0]?.departure?.iataCode} 
            stopOneArrival={flight?.itineraries[0]?.segments[0]?.arrival?.iataCode} 
            stopTwoDeparture={flight?.itineraries[0]?.segments[1]?.departure?.iataCode} 
            stopTwoArrival={flight?.itineraries[0]?.segments[1]?.arrival?.iataCode}
            stopThreeDeparture={flight?.itineraries[0]?.segments[2]?.departure?.iataCode} 
            stopThreeArrival={flight?.itineraries[0]?.segments[2]?.arrival?.iataCode}/>
          ))
        ):('')}
      </div>
    </Fragment>
  );
}

export default FlightInput;
