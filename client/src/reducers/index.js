// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import currentUserReducer from './currentUser';
import questionsReducer from './questions';
import usersReducer from './users';

const store = configureStore({
  reducer: {
    auth: authReducer,
    currentUser: currentUserReducer,
    questions: questionsReducer,
    users: usersReducer,
  },
});

export default store;
