import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Shopping cart
  shoppingCart: [],

  // Toggle shopping cart
  toggleShoppingCart: false,
};

const cartSlice = createSlice({
  // Name is required
  name: "cart",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setShoppingCart(state, action) {
      state.shoppingCart = action.payload;
    },

    setToggleShoppingCart(state, action) {
      state.toggleShoppingCart = action.payload;
    },
  },
});

// Export the function
export const { setShoppingCart, setToggleShoppingCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
