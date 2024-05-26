import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null
}

const userSlice = createSlice({
  name: "user1",
  initialState,
  reducers:{
    assignAccessToken:(state , action)=>{
      state.accessToken = action.payload
    }
  }
})

export const { assignAccessToken} = userSlice.actions

export default userSlice.reducer