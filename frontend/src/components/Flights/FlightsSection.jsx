import React, { Fragment, useState, useEffect, useCallback , useMemo } from 'react';
import axios from 'axios';
import FlightCard from './FlightCard.jsx';
import FlightsFilter from './FlightsFilter.jsx';
import { Slider } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlightData } from '../../store/FlightSlice.js';
import fetchFlightDetails from '../../utils/fetchFlightDetails.js';
import formatTiming from '../../utils/formatTiming.js';
import formatTotalTravelDuration from '../../utils/formatTotalTravelDuration.js';
import FlightSearchInput from './FlightSearchInput.jsx';
import { Toaster, toast } from 'sonner';

function FlightSection() {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [numberOfPassengers, setNumberOfPassengers] = useState(1);
  const [trip, setTrip] = useState('one-way');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [flights, setFlights] = useState([]);
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNonStop, setIsNonStop] = useState(false);
  const [isOneStop, setIsOneStop] = useState(false);
  const [isMorningDeparture, setIsMorningDeparture] = useState(false);
  const [isAfternoonDeparture, setIsAfternoonDeparture] = useState(false);
  const [isNightDeparture, setIsNightDeparture] = useState(false);
  const [isFastest, setIsFastest] = useState(false);
  const [priceRange, setPriceRange] = useState(100000);

  const dispatch = useDispatch();
  const userAccessToken = useSelector((state) => state?.user?.accessToken);
  const flightData = useSelector((state) => state?.flight?.flightData);

    // debouncing. Whenever the user was typing city name , the api was called with every letter , so we delayed the API call by 500ms.
    useEffect(() => {
      const handler = setTimeout(() => {
        const fetchAirportData = async (keyword, setAirportCode) => {
          const headers = { 'Authorization' : `Bearer ${userAccessToken}` };
          const params = { subType: 'CITY,AIRPORT', keyword: keyword };
          try {
            const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations',{ headers, params });
            //console.log(response.data.data[0]?.iataCode)
            setAirportCode(response.data.data[0]?.iataCode);
          } catch (error) {
            if (error?.response?.statusText =='Unauthorized') {
              try {
                const token = await generateAccessToken();
                //console.log('Token generated');
                dispatch(assignAccessToken(token?.data?.access_token));
              } catch (tokenError) {
                toast.error('Failed to refresh access token');
              }
            } else {
              toast.warning('Please put a valid city name');
            }
          }
        };
  
        if (from) fetchAirportData(from, setDepartureAirport);
  
        if (to)  fetchAirportData(to, setArrivalAirport);
        
      }, 500); // 500ms debounce delay
  
      // When setTimeout is used in a useEffect hook, it schedules a delayed task, here it is delayed by 500ms.
      // If dependencies change before the delay ends, multiple timeouts and API calls can occur.
      // The cleanup function clears pending timeouts, ensuring only the latest input triggers the API call after the debounce delay.
      return () => clearTimeout(handler);
      
    }, [from, to]);
  
  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    dispatch(setFlightData({departureAirport,arrivalAirport,numberOfPassengers,departureDate}));

    try {
      const data = await fetchFlightDetails({
        departureAirport: flightData?.departureAirport,
        arrivalAirport: flightData?.arrivalAirport,
        departureDate: flightData?.departureDate,
        numberOfPassengers: flightData?.numberOfPassengers,
        userAccessToken:userAccessToken
      })
      setFlights(data?.data?.data);
    } catch (error) {
      if (error?.response?.statusText =='Unauthorized') {
        toast.warning("Access token expired. Retry")
        const token = await generateAccessToken();
        console.log('token generated')
        dispatch(assignAccessToken(token?.data?.access_token));
      }
      toast.warning( error?.response?.data?.errors?.[0].detail)
    } finally {
      setIsLoading(false)
    }
  }, [departureAirport, arrivalAirport, numberOfPassengers, departureDate , dispatch , userAccessToken]);

  // useMemo memoizes the filtering and sorting result 
  // it helps optimize performance by avoiding unnecessary computations
  const filteredFlights = useMemo(() => {
    return flights
      .filter((flight) => !isNonStop || flight?.itineraries[0]?.segments?.length === 1)
      .filter((flight) => parseInt(flight?.price?.total) < priceRange)
      .filter((flight) => !isMorningDeparture || parseInt(formatTiming(flight.itineraries[0].segments[0].departure.at)) < 12)
      .filter((flight) => !isAfternoonDeparture || (parseInt(formatTiming(flight.itineraries[0].segments[0].departure.at)) >= 12 && parseInt(formatTiming(flight.itineraries[0].segments[0].departure.at)) <= 16))
      .filter((flight) => !isNightDeparture || (parseInt(formatTiming(flight.itineraries[0].segments[0].departure.at)) >= 19 && parseInt(formatTiming(flight.itineraries[0].segments[0].departure.at)) <= 23))
      .filter((flight) => !isOneStop || flight?.itineraries[0]?.segments?.length === 2)
      .sort((a, b) => isFastest ? parseFloat(formatTotalTravelDuration(a.itineraries[0]?.duration)) - parseFloat(formatTotalTravelDuration(b.itineraries[0]?.duration)) : 0);
  }, [flights, isNonStop, isOneStop, isMorningDeparture, isAfternoonDeparture, isNightDeparture, isFastest, priceRange]);

  return (
    <Fragment>
      <FlightSearchInput
        trip={trip}
        setTrip={setTrip}
        numberOfPassengers={numberOfPassengers}
        setNumberOfPassengers={setNumberOfPassengers}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        isLoading={isLoading}
        handleSearch={handleSearch}
      />

      { flights.length > 0 && 
      <div className="p-2">
        <Slider
          label="Price less than"
          formatOptions={{ style: 'currency', currency: 'INR' }}
          step={1000}
          maxValue={100000}
          minValue={3000}
          defaultValue={100000}
          showTooltip={true}
          value={priceRange}
          onChange={setPriceRange}
          className="max-w-md text-white font-bold p-2"
        />
        <div className="m-5">
          <FlightsFilter
            isNonStop={isNonStop}
            setIsNonStop={setIsNonStop}
            isOneStop={isOneStop}
            setIsOneStop={setIsOneStop}
            isMorningDeparture={isMorningDeparture}
            setIsMorningDeparture={setIsMorningDeparture}
            isAfternoonDeparture={isAfternoonDeparture}
            setIsAfternoonDeparture={setIsAfternoonDeparture}
            isNightDeparture={isNightDeparture}
            setIsNightDeparture={setIsNightDeparture}
            isFastest={isFastest}
            setIsFastest={setIsFastest}
          />
        </div>
        {filteredFlights.map((flight) => (
          <FlightCard
            key={flight?.id}
            flightcode={flight?.id}
            airLine={flight?.validatingAirlineCodes[0]}
            price={flight?.price?.total}
            from={flight?.itineraries[0]?.segments[0]?.departure?.iataCode}
            fromTime={flight?.itineraries[0]?.segments[0]?.departure?.at}
            to={flight?.itineraries[0]?.segments[flight?.itineraries[0]?.segments.length - 1]?.arrival?.iataCode}
            toTime={flight?.itineraries[0]?.segments[flight?.itineraries[0]?.segments.length - 1]?.arrival?.at}
            numberStops={flight?.itineraries[0]?.segments?.length}
            totalTravelTime={flight?.itineraries[0]?.duration}
            stopOneDeparture={flight?.itineraries[0]?.segments[0]?.departure?.iataCode}
            stopOneArrival={flight?.itineraries[0]?.segments[0]?.arrival?.iataCode}
            stopTwoDeparture={flight?.itineraries[0]?.segments[1]?.departure?.iataCode}
            stopTwoArrival={flight?.itineraries[0]?.segments[1]?.arrival?.iataCode}
            stopThreeDeparture={flight?.itineraries[0]?.segments[2]?.departure?.iataCode}
            stopThreeArrival={flight?.itineraries[0]?.segments[2]?.arrival?.iataCode}
          />
        ))}
      </div>}
      <Toaster position="bottom-center" />
    </Fragment>
  );
}

export default FlightSection;
