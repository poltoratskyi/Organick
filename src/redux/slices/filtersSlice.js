import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // The active index menu of sort
  activeIndex: 0,

  // Index popup
  popupIndex: 0,

  // Tag categories
  categories: "All",

  // Open / Close popup
  openSortMenu: false,
};

const filtersSlice = createSlice({
  // Name is required
  name: "filters",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },

    setPopupIndex(state, action) {
      state.popupIndex = action.payload;
    },

    setTagCategories(state, action) {
      state.categories = action.payload;
    },

    setOpenSortMenu(state, action) {
      state.openSortMenu = action.payload;
    },
  },
});

// Export the function
export const {
  setTagCategories,
  setActiveIndex,
  setPopupIndex,
  setOpenSortMenu,
} = filtersSlice.actions;

// Export the reducer
export default filtersSlice.reducer;
