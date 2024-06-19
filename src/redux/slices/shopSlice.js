import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // The active index menu of sort
  activeIndex: "Relevance",

  // Tag categories
  categories: "All",

  // Open / Close popup
  openSortMenu: false,

  // Current page
  currentPage: 1,
};

const shopSlice = createSlice({
  // Name is required
  name: "shop",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },

    setTagCategories(state, action) {
      state.categories = action.payload;
    },

    setOpenSortMenu(state, action) {
      state.openSortMenu = action.payload;
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

// Export the function
export const {
  setTagCategories,
  setActiveIndex,
  setOpenSortMenu,
  setCurrentPage,
} = shopSlice.actions;

// Export the reducer
export default shopSlice.reducer;
