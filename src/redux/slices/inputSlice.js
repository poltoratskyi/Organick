import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Visible <-> Hidden input
  visibleInput: false,

  // Input search value
  searchProduct: "",
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

    setSearchProduct(state, action) {
      state.searchProduct = action.payload;
    },
  },
});

// Export the function
export const { setVisibleInput, setSearchProduct } = inputSlice.actions;

// Export the reducer
export default inputSlice.reducer;
