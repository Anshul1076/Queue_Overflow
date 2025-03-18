// questions.js
import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

// Async thunks for handling async operations like fetching, posting questions, etc.
export const askQuestion = (questionData) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch(postQuestion(data));
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const  data  = await api.getAllQuestions();
    console.log("all questions 1.0 " , data.data);
    
    dispatch(setQuestions(data.data));
  } catch (error) {
    console.log(error);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
    const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId);
    dispatch(postAnswerAction(data));
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch(fetchAllQuestions());
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const voteQuestion = (id, value, userId) => async (dispatch) => {
  try {
    await api.voteQuestion(id, value, userId);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    await api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState: { data: null },
  reducers: {
    postQuestion: (state, action) => {
      // Logic for adding the question to the state if necessary
    },
    postAnswerAction: (state, action) => {
      // Logic for posting the answer to the state if necessary
    },
    setQuestions: (state, action) => {
      console.log("action.payload question 2.0" , action.payload);
      
      state.data = action.payload;
    },
  },
});

export const { postQuestion, postAnswerAction, setQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
