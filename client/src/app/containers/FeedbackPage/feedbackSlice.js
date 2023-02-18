import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbackList: [],
  currentFeedbackSentStatus: true,
};

export const feedbackPageSlice = createSlice({
  name: "feedbackPage",
  initialState,
  reducers: {
    feedbackListPopulated: (state, action) => {
      state.feedbackList = action.payload;
    },
    feedbackAdded: (state, action) => {
      state.feedbackList.push(action.payload);
    },
    currentFeedbackSentStatusChanged: (state, action) => {
      state.currentFeedbackSentStatus = action.payload;
    },
  },
});

export const {
  feedbackListPopulated,
  feedbackAdded,
  currentFeedbackSentStatusChanged,
} = feedbackPageSlice.actions;
export default feedbackPageSlice.reducer;
