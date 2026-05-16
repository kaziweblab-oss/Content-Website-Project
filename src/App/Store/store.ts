import { configureStore } from "@reduxjs/toolkit";

import reviewReducer from "../States/reviewsSlice";

const store = configureStore({
  reducer: {
    reviewsR: reviewReducer,
  },
});

export default store;
