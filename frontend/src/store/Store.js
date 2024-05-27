import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlice"
import FlightSlice from "./FlightSlice"

export const store = configureStore({
  reducer: {
   user: UserSlice, 
   flight: FlightSlice
  }
})