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
    setAddProduct(state, action) {
      state.shoppingCart = action.payload;
    },

    setToggleShoppingCart(state, action) {
      state.toggleShoppingCart = action.payload;
    },

    setRemoveProduct(state, action) {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.parent_id !== action.payload
      );
    },
  },
});

// Export the function
export const { setAddProduct, setToggleShoppingCart, setRemoveProduct } =
  cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
