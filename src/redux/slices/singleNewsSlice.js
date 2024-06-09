import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Single news
  singleNews: [],
};

const singleNewsSlice = createSlice({
  // Name is required
  name: "singleNews",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setSingleNews(state, action) {
      state.singleNews = action.payload;
    },
  },
});

// Export the function
export const { setSingleNews } = singleNewsSlice.actions;

// Export the reducer
export default singleNewsSlice.reducer;
