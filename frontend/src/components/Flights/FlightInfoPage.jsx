import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchFlightDetails from "../../utils/fetchFlightDetails";
import { useParams } from "react-router-dom";
import formatTiming from "../../utils/formatTiming";

export default function FlightInfoPage() {
  const flightData = useSelector((state)=> state?.flight?.flightData)
  const userAccessToken = useSelector((state)=> state?.user?.accessToken)
  const {id}= useParams()
  const  [flightInfo , setFlightInfo]= useState('')

  useEffect(()=>{
    const flightDetails = async ()=>{
      try {
        const data = await fetchFlightDetails(
          {
            departureAirport: flightData?.departureAirport,
            arrivalAirport:flightData?.arrivalAirport,
            departureDate: flightData?.departureDate,
            numberPassengers: flightData?.numberPassengers,
            userAccessToken: userAccessToken,
          }
      )
      const dataArray = data?.data?.data
      const myFlight = dataArray?.filter((flight)=> {
        return flight?.id === id
      }
      )
      setFlightInfo(myFlight[0])
      } catch (error) {
        console.log('Error fetching flight data' , error)
      }
    }
    flightDetails()
  },[])

  console.log(flightInfo) 
 
  return (
    <div className="w-full lg:h-screen mx-auto p-4 lg:px-6 sm:py-8 md:py-10 bg-gray-950">
      <section className="grid md:grid-cols-2 gap-8 ">
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl text-white font-bold">Air India</h1>
              <p className="text-white">Flight  {flightInfo?.itineraries?.[0]?.segments?.[0]?.number} </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Cabin Class</div>
              <div className="text-lg font-bold">{flightInfo?.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.cabin}</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Price</div>
              <div className="text-lg font-bold">₹{flightInfo?.price?.total}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">CO2 Emissions</div>
              <div className="text-lg font-bold">1.2 tons</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Trip type</div>
              <div className="text-lg font-bold">One way</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Layover</div>
              <div className="text-lg font-bold">2h 15m</div>
            </div>
            <div className="grid gap-1">
            <div className="text-sm font-medium">Stops</div>
            <div className="text-lg font-bold">{flightInfo?.itineraries?.[0]?.segments?.length}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Departs</div>
              <div className="text-lg font-bold">{formatTiming(flightInfo?.itineraries?.[0]?.segments?.[0]?.departure?.at) }</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Arrives</div>
              <div className="text-lg font-bold">{formatTiming(flightInfo?.itineraries?.[0]?.segments?.[0]?.arrival?.at) }</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Passengers</div>
              <div className="text-lg font-bold">{flightData?.numberPassengers}</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Excess Hand Baggage</div>
              <div className="text-lg font-bold">{flightInfo?.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.includedCheckedBags?.weight}kg</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Baggage Limit</div>
              <div className="text-lg font-bold">{flightInfo?.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.amenities?.[0]?.isChargeable === false ? ('Included'):('Not Included')}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Meal Service</div>
              <div className="text-lg font-bold">{flightInfo?.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.amenities?.[2]?.isChargeable === false ? ('Included'):('Not Included')}</div>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <Card className="dark">
            <div>
              <CardHeader>Upgrade Options</CardHeader>
            </div>
            <CardBody className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Business Class</div>
                  <div className="text-lg font-bold">₹10000</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium">First Class</div>
                  <div className="text-lg font-bold">₹15000</div>
                </div>
              </div>
              <Button className="justify-self-start" color="primary">
                Upgrade
              </Button>
            </CardBody>
          </Card>
          <Card className="dark">
            <div>
              <CardHeader>Flight Details</CardHeader>
            </div>
            <CardBody className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Departure Airport</div>
                  <div className="text-lg font-bold">{flightInfo?.itineraries?.[0]?.segments?.[0]?.departure?.iataCode}</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Arrival Airport</div>
                  <div className="text-lg font-bold">{flightInfo?.itineraries?.[0]?.segments[flightInfo?.itineraries?.[0]?.segments.length - 1]?.arrival?.iataCode}</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Departure Time</div>
                  <div className="text-lg font-bold">{formatTiming(flightInfo?.itineraries?.[0]?.segments?.[0]?.departure?.at)}</div>
                </div>  
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Arrival Time</div>
                  <div className="text-lg font-bold">{formatTiming(flightInfo?.itineraries?.[0]?.segments?.[0]?.arrival?.at)}</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-medium"> Arrival Terminal</div>
                  <div className="text-lg font-bold">{flightInfo?.itineraries?.[0]?.segments?.[0]?.arrival?.terminal}</div>
                </div>   
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Stops</div>
                  <div className="text-lg font-bold">{flightInfo?.itineraries?.[0]?.segments?.length}</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Layover</div>
                  <div className="text-lg font-bold">At Bombay of 2h 15m</div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Button color="primary" size="lg" variant="shadow" className="font-bold">Book</Button>
        </div>
     </section>  
    </div>
  )
}
