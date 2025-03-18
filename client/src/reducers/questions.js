// questions.js
import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: { data: null },
  reducers: {
    postQuestion: (state) => {
      // Logic for postQuestion can be added here
    },
    postAnswer: (state) => {
      // Logic for postAnswer can be added here
    },
    setQuestions: (state, action) => {
      console.log("all questions 3.0" , action.payload);
      state.data = action.payload;
    },

  },
});

export const { postQuestion, postAnswer, fetchAllQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
