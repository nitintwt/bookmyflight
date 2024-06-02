import axios from 'axios';

const formatDate = (date) => {
  const year = date?.year;
  const month = date?.month < 10 ? `0${date?.month}` : date?.month;
  const day = date?.day < 10 ? `0${date?.day}` : date?.day;

  return `${year}-${month}-${day}`;
};

const fetchFlightDetails = async ({
  departureAirport,
  arrivalAirport,
  departureDate,
  numberOfPassengers,
  userAccessToken,
}) => {
  const params = {
    currencyCode: 'INR',
    originLocationCode: departureAirport,
    destinationLocationCode: arrivalAirport,
    departureDate: formatDate(departureDate),
    adults: numberOfPassengers,
    max: '20',
  };
  const headers = { Authorization: `Bearer ${userAccessToken}` };
  try {
    const data = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers',{ params, headers });
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchFlightDetails;
