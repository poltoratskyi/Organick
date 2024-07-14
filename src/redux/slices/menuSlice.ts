import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface MenuState {
  // The active name of page
  activeNameMenu: string;
}

const initialState: MenuState = {
  // The active name of page
  activeNameMenu: "",
};

const menuSlice = createSlice({
  // Name is required
  name: "menu",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setActiveName(state, action: PayloadAction<string>) {
      state.activeNameMenu = action.payload;
    },
  },
});

// Export the function
export const { setActiveName } = menuSlice.actions;

// Export the selector
export const selectActiveNameMenu = (state: RootState) =>
  state.menu.activeNameMenu;

// Export the reducer
export default menuSlice.reducer;
