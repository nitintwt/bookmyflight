import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flightData: null,
};

const flightSlice = createSlice({
  name: 'user1',
  initialState,
  reducers: {
    setFlightData: (state, action) => {
      state.flightData = action.payload;
    },
  },
});

export const { setFlightData } = flightSlice.actions;
export default flightSlice.reducer;
