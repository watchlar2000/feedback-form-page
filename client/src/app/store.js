import { configureStore } from "@reduxjs/toolkit";
import feedbackPageReducer from "./containers/FeedbackPage/feedbackSlice";

export const store = configureStore({
  reducer: {
    feedbackPage: feedbackPageReducer,
  },
});
