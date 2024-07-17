import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../components/headers/SearchModal";

interface CartState {
  // Shopping cart
  shoppingCart: Product[];

  // Toggle shopping cart
  toggleShoppingCart: boolean;
}

const initialState: CartState = {
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
    setAddProduct(state, action: PayloadAction<Product[]>) {
      state.shoppingCart = action.payload;
    },

    setIncrease(state, action: PayloadAction<Product>) {
      const product = state.shoppingCart.find(
        (item) => item.parent_id === action.payload.parent_id
      );

      if (product) {
        product.counter++;

        product.modifiedPrice =
          (product.salePrice || product.price) * product.counter;

        localStorage.setItem(
          "shoppingCart",
          JSON.stringify(state.shoppingCart)
        );
      }
    },

    setDecrease(state, action: PayloadAction<Product>) {
      const product = state.shoppingCart.find(
        (item) => item.parent_id === action.payload.parent_id
      );

      if (product) {
        if (product.counter > 1) {
          product.counter--;

          product.modifiedPrice = product.modifiedPrice =
            (product.salePrice || product.price) * product.counter;

          localStorage.setItem(
            "shoppingCart",
            JSON.stringify(state.shoppingCart)
          );
        } else {
          state.shoppingCart = state.shoppingCart.filter(
            (item) => item.parent_id !== action.payload.parent_id
          );

          localStorage.setItem(
            "shoppingCart",
            JSON.stringify(state.shoppingCart)
          );
        }
      }
    },

    setToggleShoppingCart(state, action: PayloadAction<boolean>) {
      state.toggleShoppingCart = action.payload;
    },

    setRemoveProduct(state, action: PayloadAction<number>) {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.parent_id !== action.payload
      );
    },
  },
});

// Export the function
export const {
  setAddProduct,
  setToggleShoppingCart,
  setRemoveProduct,
  setIncrease,
  setDecrease,
} = cartSlice.actions;

// Export the selectors
export const selectCart = (state: RootState) => state.cart.shoppingCart;
export const selectToggleShoppingCart = (state: RootState) =>
  state.cart.toggleShoppingCart;

// Export the reducer
export default cartSlice.reducer;
