import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";



export default function FlightInfoPage() {
  return (
    <div className="w-full lg:h-screen mx-auto p-4 lg:px-6 sm:py-8 md:py-10 bg-gray-950">
      <section className="grid md:grid-cols-2 gap-8 ">
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl text-white font-bold">Air India</h1>
              <p className="text-white">Flight #ABC123</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Cabin Class</div>
              <div className="text-lg font-bold">Economy</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Price</div>
              <div className="text-lg font-bold">₹5000</div>
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
            <div className="text-lg font-bold">1</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Departs</div>
              <div className="text-lg font-bold">9:00 AM</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Arrives</div>
              <div className="text-lg font-bold">5:15 PM</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Passengers</div>
              <div className="text-lg font-bold">2 Adults, 1 Child</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Baggage Limit</div>
              <div className="text-lg font-bold">15kg</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-white">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Meal Service</div>
              <div className="text-lg font-bold">Included</div>
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
                  <div className="text-lg font-bold">LAX</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Arrival Airport</div>
                  <div className="text-lg font-bold">JFK</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Departure Time</div>
                  <div className="text-lg font-bold">9:00 AM</div>
                </div>  
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Arrival Time</div>
                  <div className="text-lg font-bold">5:15 PM</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Terminal</div>
                  <div className="text-lg font-bold">B</div>
                </div>   
                <div className="grid gap-1">
                  <div className="text-sm font-medium">Stops</div>
                  <div className="text-lg font-bold">1</div>
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

