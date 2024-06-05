import React from 'react'
import { Input } from '@nextui-org/input';
import { useDispatch } from 'react-redux';

function CityInput({label , keyword , setAirportCode}) {
  const dispatch = useDispatch()

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
  return (
    <Input 
    type='text'
    label={`${label}`}
    variant='bordered'
    />
  )
}

export default CityInput
