import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // The active name of page
  activeNameMenu: "Home",
};

const menuSlice = createSlice({
  // Name is required
  name: "menu",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setActiveName(state, action) {
      state.activeNameMenu = action.payload;
    },
  },
});

// Export the function
export const { setActiveName } = menuSlice.actions;

// Export the reducer
export default menuSlice.reducer;
