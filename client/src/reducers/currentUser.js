// currentUser.js
import { createSlice } from '@reduxjs/toolkit';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: null,
  reducers: {
    fetchCurrentUser: (state, action) => {
      // fetch form local storage name Profile

      

      console.log("action.payload" , action.payload);
      
      return action.payload;
    },
    setCurrentUser: (state, action) => {
      console.log("action.payload" , action.payload);
      
      return action.payload;
    }
  },
});

export const { fetchCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
