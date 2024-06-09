import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Catalogue Products
  catalogue: [],
};

const catalogue = createSlice({
  // Name is required
  name: "catalogue",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setCatalogue(state, action) {
      state.catalogue = action.payload;
    },
  },
});

// Export the function
export const { setCatalogue } = catalogue.actions;

// Export the reducer
export default catalogue.reducer;
