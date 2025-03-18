// auth.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { data: null },
  reducers: {
    auth: (state, action) => {
      localStorage.setItem('Profile', JSON.stringify(action.payload));
      state.data = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('Profile');
      state.data = null;
      
    },
  },
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;
