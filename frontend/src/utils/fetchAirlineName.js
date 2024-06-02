import axios from 'axios';
const fetchAirlineName = async ({ userAccessToken, airLine }) => {
  try {
    const headers = { Authorization: `Bearer ${userAccessToken}` };
    const params = { airlineCodes: `${airLine}` };
    const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/airlines',{ params, headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchAirlineName;
