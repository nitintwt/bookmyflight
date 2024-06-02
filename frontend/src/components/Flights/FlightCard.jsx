import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import formatTiming from '../../utils/formatTiming';
import formatTotalTravelDuration from '../../utils/formatTotalTravelDuration';
import fetchAirlineName from '../../utils/fetchAirlineName';

const FlightCard = ({
  flightcode,
  airLine,
  price,
  from,
  fromTime,
  to,
  toTime,
  totalTravelTime,
  numberStops,
  stopOneDeparture,
  stopOneArrival,
  stopTwoDeparture,
  stopTwoArrival,
  stopThreeDeparture,
  stopThreeArrival,
}) => {
  const userAccessToken = useSelector((state) => state?.user?.accessToken);
  const [airlineName, setAirlineName] = useState(null);

  useEffect(() => {
    const fetchAirline = async () => {
      try {
        const response = await fetchAirlineName({
          userAccessToken: { userAccessToken },
          airLine: { airLine },
        });
        setAirlineName(response?.data?.data[0]?.businessName);
      } catch (error) {
        console.log('Error fetching airlines name', error);
      }
    };
    fetchAirline();
  }, [airLine]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 p-6 ">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <div className="ml-3 text-lg font-semibold text-gray-900">
            {airlineName}
          </div>
        </div>
        <div className="flex justify-end items-center text-xl font-bold text-gray-900">
          ₹{price}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-9 mb-2">
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-500">{from}</div>
          <div className="text-lg font-medium text-gray-900">
            {formatTiming(fromTime)}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-500">
            {formatTotalTravelDuration(totalTravelTime)}{' '}
          </div>
          <h1>{numberStops - 1} stop</h1>
          <div className="text-sm text-gray-500 text-right">
            <div>
              {stopOneDeparture} → {stopOneArrival}
            </div>
            {stopTwoDeparture ? (
              <div>
                {stopTwoDeparture} → {stopTwoArrival}
              </div>
            ) : (
              ''
            )}
            {stopThreeDeparture ? (
              <div>
                {stopThreeDeparture} → {stopThreeArrival}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-500">{to}</div>
          <div className="text-lg font-medium text-gray-900">
            {formatTiming(toTime)}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button color="primary">
          {<Link to={`/flight-info/${flightcode}`}>Flight Details</Link>}
        </Button>
      </div>
    </div>
  );
};

export default FlightCard;
