import { Input } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/react';
import { DatePicker } from '@nextui-org/date-picker';
import { Button } from '@nextui-org/button';
import {useForm} from 'react-hook-form'

import React from 'react';

function FlightSearchInput({isLoading,handleSearch }) {
  const { register , handleSubmit , setValue}= useForm()

  const handleDateChange = (field, value) => {
    setValue(field, value);
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex flex-col  p-5 bg-white m-5 border rounded-3xl ">
      <div className="flex">
        <Select
          label="One way or round trip"
          variant="bordered"
          className="max-w-xs mr-5"
          size="sm"
          {...register('trip')}
        >
          <SelectItem key="one-way" value="one-way">
            One way
          </SelectItem>
          {/*<SelectItem key="round-trip" value="round-trip">
            Round Trip
          </SelectItem>*/}
        </Select>

        <Select
          label="Number of passengers"
          className="max-w-xs "
          variant="bordered"
          size="sm"
          {...register('numberOfPassengers')}
        >
          <SelectItem key="1" value="1">
            1 Passenger
          </SelectItem>
          <SelectItem key="2" value="2">
            2 Passengers
          </SelectItem>
          <SelectItem key="3" value="3">
            3 Passengers
          </SelectItem>
          <SelectItem key="4" value="4">
            4 Passengers
          </SelectItem>
          <SelectItem key="5" value="5">
            5 Passengers
          </SelectItem>
          <SelectItem key="6" value="6">
            6 Passengers
          </SelectItem>
        </Select>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4  mt-5">
        <Input
          type="text"
          label="From"
          variant="bordered"
          {...register('from')}
        />
        <Input
          type="text"
          label="To"
          variant="bordered"
          {...register('to')}
        />
        <DatePicker
          label="Departure Date"
          variant="bordered"
          className="max-w-[284px]"
          onChange={(date)=> handleDateChange('departureDate' , date)}
        />
        {/*trip === 'round-trip' && (
          <DatePicker
            label="Return Date"
            variant="bordered"
            className="max-w-[284px]"
            {...register('returnDate')}
          />
        )*/}
      </div>
      <div className="mt-5">
        {isLoading ? (
          <Button color="primary" isLoading>
            Loading
          </Button>
        ) : (
          <Button color="primary" type='submit'>
            Search
          </Button>
        )}
      </div>
    </form>
  );
}

export default FlightSearchInput;
