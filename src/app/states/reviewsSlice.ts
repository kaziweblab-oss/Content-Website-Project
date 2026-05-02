import { createSlice } from "@reduxjs/toolkit";

//import Image here
import reviewer1 from "../../assets/home/reviews/woman-s-face-1 1.jpg";
import reviewer2 from "../../assets/home/reviews/woman-s-face-2 1.png";
import reviewer3 from "../../assets/home/reviews/woman-s-face-38289 1.jpg";

const reviewesSlice = createSlice({
  name: "reviewers",
  initialState: {
    isLoading: false,
    reviews: [
      {
        id: 1,
        userName: "UserName",
        userPic: reviewer1,
        rating: 5,
        reviewMessage:
          "Voluptua diam lorem voluptua labore et labore invidunt dolores kasd no, stet ea sadipscing amet eirmod invidunt labore rebum. Kasd.",
      },
      {
        id: 2,
        userName: "UserName",
        userPic: reviewer2,
        rating: 5,
        reviewMessage:
          "Voluptua diam lorem voluptua labore et labore invidunt dolores kasd no, stet ea sadipscing amet eirmod invidunt labore rebum. Kasd.",
      },
      {
        userName: "UserName",
        userPic: reviewer3,
        rating: 5,
        reviewMessage:
          "Voluptua diam lorem voluptua labore et labore invidunt dolores kasd no, stet ea sadipscing amet eirmod invidunt labore rebum. Kasd.",
      },
    ],
    Error: null,
  },
  reducers: {
    addReview: (state, action) => {
      state.reviews = [...state.reviews, action.payload];
    },

    removeReview: (state, action) => {
      state.reviews = state.reviews.filter((review) => {
        return review.id !== action.payload;
      });
    },
    updateReview: (state, action) => {
      const { id, userName, userPic, rating, reviewMessage } = action.payload;
      state.reviews.map((review) => {
        if (review.id === id) {
          return {
            ...review,
            userName: userName,
            userPic: userPic,
            rating: rating,
            reviewMessage: reviewMessage,
          };
        } else return review;
      });
    },
  },
});

export const { addReview, removeReview, updateReview } = reviewesSlice.actions;
export default reviewesSlice.reducer;
