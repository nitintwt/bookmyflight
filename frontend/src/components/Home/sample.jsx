
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oCaQwUKyFIr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
/*import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row sm:space-x-4 items-center justify-between">
      <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
        <Select>
          <SelectTrigger id="trip-type">
            <SelectValue placeholder="Round trip" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="round-trip">Round trip</SelectItem>
            <SelectItem value="one-way">One way</SelectItem>
            <SelectItem value="multi-city">Multi-city</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger id="passenger-count">
            <SelectValue placeholder="1 Passenger" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Passenger</SelectItem>
            <SelectItem value="2">2 Passengers</SelectItem>
            <SelectItem value="3">3 Passengers</SelectItem>
            <SelectItem value="4">4 Passengers</SelectItem>
            <SelectItem value="5">5 Passengers</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger id="class-type">
            <SelectValue placeholder="Business & First" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="premium-economy">Premium Economy</SelectItem>
            <SelectItem value="business-first">Business & First</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mt-4 sm:mt-0">
        <div className="flex space-x-2 items-center">
          <PlaneTakeoffIcon className="h-6 w-6 text-gray-400" />
          <Input placeholder="City or airport" />
        </div>
        <div className="flex space-x-2 items-center">
          <PlaneLandingIcon className="h-6 w-6 text-gray-400" />
          <Input placeholder="City or airport" />
        </div>
        <div className="flex space-x-2 items-center">
          <CalendarDaysIcon className="h-6 w-6 text-gray-400" />
          <Input placeholder="Departure Date" value="5/14/2024" />
        </div>
        <div className="flex space-x-2 items-center">
          <CalendarDaysIcon className="h-6 w-6 text-gray-400" />
          <Input placeholder="Return Date" value="5/15/2024" />
        </div>
      </div>
      <Button className="bg-blue-600 text-white mt-4 sm:mt-0">Search Flights</Button>
    </div>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function PlaneLandingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22h20" />
      <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
    </svg>
  )
}


function PlaneTakeoffIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22h20" />
      <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
    </svg>
  )
}*/

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/I6h9ZvnAIgu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="flex items-center gap-2">
          <LocateIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="flex-1 bg-transparent border-none focus:ring-0 dark:text-gray-300"
            placeholder="Departure City"
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <LocateIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="flex-1 bg-transparent border-none focus:ring-0 dark:text-gray-300"
            placeholder="Arrival City"
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Popover>
            <PopoverTrigger asChild>
              <Input
                className="flex-1 bg-transparent border-none focus:ring-0 dark:text-gray-300"
                placeholder="Departure Date"
                type="text"
              />
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Popover>
            <PopoverTrigger asChild>
              <Input
                className="flex-1 bg-transparent border-none focus:ring-0 dark:text-gray-300"
                placeholder="Return Date"
                type="text"
              />
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4">4 Passengers</SelectItem>
              <SelectItem value="5">5 Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div className="flex items-center gap-2">
          <RadioGroup>
            <div className="text-gray-500 dark:text-gray-400">Flight Class</div>
            <div className="flex items-center gap-4">
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="economy">
                <RadioGroupItem id="economy" name="flight-class" value="economy" />
                Economy
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="business">
                <RadioGroupItem id="business" name="flight-class" value="business" />
                Business
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup>
            <div className="text-gray-500 dark:text-gray-400">Trip Type</div>
            <div className="flex items-center gap-4">
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="roundtrip">
                <RadioGroupItem id="roundtrip" name="trip-type" value="roundtrip" />
                Roundtrip
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="oneway">
                <RadioGroupItem id="oneway" name="trip-type" value="oneway" />
                One-way
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex justify-end">
          <Button className="w-full sm:w-auto" variant="primary">
            Search Flights
          </Button>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
