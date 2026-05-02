import { configureStore } from "@reduxjs/toolkit";

import reviewReducer from "../states/reviewsSlice";

const store = configureStore({
  reducer: {
    reviewsR: reviewReducer,
  },
});

export default store;
