import React from 'react';
import AirportResult from './AirportResult';

function AirportResultLists({ airportData }) {
  return (
    <div>
      {airportData.map((airport) => (
        <AirportResult
          key={airport?.iataCode}
          city={airport?.data?.name}
          airportCode={airport?.iataCode}
        />
      ))}
    </div>
  );
}

export default AirportResultLists;
