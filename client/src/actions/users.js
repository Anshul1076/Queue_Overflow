// users.js
import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers();
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = (id, updatedData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updatedData);
    dispatch(updateCurrentUser(data));
  } catch (error) {
    console.log(error);
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
    updateCurrentUser: (state, action) => {
      return state.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    },
  },
});

export const { setUsers, updateCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;
