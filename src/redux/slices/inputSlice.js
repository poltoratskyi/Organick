import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Visible <-> Hidden input
  visibleInput: false,

  // Visible <-> Hidden search
  visibleSearch: false,

  // Input search value
  searchProduct: "",

  // Visible <-> Hidden search products
  showNoResults: false,
};

const inputSlice = createSlice({
  // Name is required
  name: "input",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setVisibleInput(state, action) {
      state.visibleInput = action.payload;
    },

    setVisibleSearch(state, action) {
      state.visibleSearch = action.payload;
    },

    setSearchProduct(state, action) {
      state.searchProduct = action.payload;
    },

    setShowNoResults(state, action) {
      state.showNoResults = action.payload;
    },
  },
});

// Export the function
export const {
  setVisibleInput,
  setVisibleSearch,
  setSearchProduct,
  setShowNoResults,
} = inputSlice.actions;

// Export the selectors
export const selectVisibleInput = (state) => state.input.visibleInput;
export const selectSearchProduct = (state) => state.input.searchProduct;
export const selectInputResults = (state) => state.input;

// Export the reducer
export default inputSlice.reducer;
