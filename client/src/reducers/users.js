// users.js
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    updateCurrentUser: (state, action) => {
      return state.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    },
  },
});

export const { fetchUsers, updateCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;
