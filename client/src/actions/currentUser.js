import { createSlice } from '@reduxjs/toolkit';
const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: null,
  reducers: {
    fetchCurrentUser: (state, action) => action.payload,
    setCurrentUser: (state, action) => action.payload, // Add this
  },
});

export const { fetchCurrentUser, setCurrentUser } = currentUserSlice.actions;
