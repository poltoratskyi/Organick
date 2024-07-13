import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../components/headers/SearchModal";

// Only obj
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

    setToggleShoppingCart(state, action: PayloadAction<boolean>) {
      state.toggleShoppingCart = action.payload;
    },

    setRemoveProduct(state, action: PayloadAction<number>) {
      state.shoppingCart = state.shoppingCart.filter(
        (item: Product) => item.parent_id !== action.payload
      );
    },
  },
});

// Export the function
export const { setAddProduct, setToggleShoppingCart, setRemoveProduct } =
  cartSlice.actions;

// Export the selectors
export const selectCart = (state: RootState) => state.cart.shoppingCart;
export const selectToggleShoppingCart = (state: RootState) =>
  state.cart.toggleShoppingCart;

// Export the reducer
export default cartSlice.reducer;
