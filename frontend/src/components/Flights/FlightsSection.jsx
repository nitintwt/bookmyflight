import React, { Fragment, useState, useEffect, useCallback } from 'react';
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
import { useForm } from 'react-hook-form';

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
            setAirportCode(response.data.data[0]?.iataCode);
          } catch (error) {
            console.error('Error fetching airport data', error);
          }
        };
  
        if (from) {
          fetchAirportData(from, setDepartureAirport);
        }
  
        if (to) {
          fetchAirportData(to, setArrivalAirport);
        }
      }, 500); // 500ms debounce delay
  
      // When setTimeout is used in a useEffect hook, it schedules a delayed task, here it is delayed by 500ms.
      // If dependencies change before the delay ends, multiple timeouts and API calls can occur.
      // The cleanup function clears pending timeouts, ensuring only the latest input triggers the API call after the debounce delay.
      return () => {
        clearTimeout(handler);
      };
    }, [from, to]);
  
  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    dispatch(
      setFlightData({
        departureAirport,
        arrivalAirport,
        numberOfPassengers,
        departureDate,
      })
    );

    try {
      const data = await fetchFlightDetails({
        departureAirport: flightData?.departureAirport,
        arrivalAirport: flightData?.arrivalAirport,
        departureDate: flightData?.departureDate,
        numberOfPassengers: flightData?.numberOfPassengers,
        userAccessToken:userAccessToken
      })
  
      setFlights(data?.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error while fetching flight data ', error);
      setIsLoading(false);
    }
  }, [departureAirport, arrivalAirport, numberOfPassengers, departureDate]);

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

        {flights.length > 0
          ? flights
              .slice()
              .sort((a, b) => {
                if (isFastest) {
                  return (
                    parseFloat(
                      formatTotalTravelDuration(a.itineraries[0]?.duration)
                    ) -
                    parseFloat(
                      formatTotalTravelDuration(b.itineraries[0]?.duration)
                    )
                  );
                }
              })
              .filter((flight) => {
                return isNonStop
                  ? flight?.itineraries[0]?.segments?.length === 1
                  : flight;
              })
              .filter((flight) => {
                return parseInt(flight?.price?.total) < `${priceRange}`;
              })
              .filter((flight) => {
                return isMorningDeparture
                  ? parseInt(
                      formatTiming(
                        flight.itineraries[0].segments[0].departure.at
                      )
                    ) < 12
                  : flight;
              })
              .filter((flight) => {
                return isAfternoonDeparture
                  ? parseInt(
                      formatTiming(
                        flight.itineraries[0].segments[0].departure.at
                      )
                    ) >= 12 &&
                      parseInt(
                        formatTiming(
                          flight.itineraries[0].segments[0].departure.at
                        )
                      ) <= 16
                  : flight;
              })
              .filter((flight) => {
                return isNightDeparture
                  ? parseInt(
                      formatTiming(
                        flight.itineraries[0].segments[0].departure.at
                      )
                    ) >= 19 &&
                      parseInt(
                        formatTiming(
                          flight.itineraries[0].segments[0].departure.at
                        )
                      ) <= 23
                  : flight;
              })
              .filter((flight) => {
                return isOneStop
                  ? flight?.itineraries[0]?.segments?.length === 2
                  : flight;
              })
              .map((flight) => (
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
              ))
          : ''}
      </div>
    </Fragment>
  );
}

export default FlightSection;
