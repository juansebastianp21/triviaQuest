import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "trivia",
  initialState: {
    isLoading: false,
    questionList: [],
    fetchSuccess: false,
  },
  reducers: {
    getQuestionList: (state, action) => {
      state.isLoading = true;
    },
    getQuestionListSuccess: (state, action) => {
      const { response_code, results } = action.payload;
      state.isLoading = false;
      state.fetchSuccess = true;
      state.questionList = results;
    },
    getQuestionListFailure: (state, action) => {
      state.isLoading = false;
      state.fetchSuccess = false;
    },
    answerQuestion: (state, action) => {
      const { index, answer } = action.payload;
      state.questionList[index].answer = answer;
    },
    clearFetchData: (state) => {
      state.isLoading = false;
      state.fetchSuccess = false;
    },
  },
});

export const {
  getQuestionList,
  getQuestionListSuccess,
  getQuestionListFailure,
  answerQuestion,
  clearFetchData,
} = taskSlice.actions;

export default taskSlice.reducer;
