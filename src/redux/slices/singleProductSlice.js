import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Related products
  relatedProducts: [],

  // Single product
  singleProduct: [],
};

const singleProduct = createSlice({
  // Name is required
  name: "singleProduct",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setRelatedProducts(state, action) {
      state.relatedProducts = action.payload;
    },

    setSingleProduct(state, action) {
      state.singleProduct = action.payload;
    },
  },
});

// Export the function
export const { setSingleProduct, setRelatedProducts } = singleProduct.actions;

// Export the selector
export const selectRelatedProducts = (state) =>
  state.singleProduct.relatedProducts;
export const selectSingleProduct = (state) => state.singleProduct.singleProduct;

// Export the reducer
export default singleProduct.reducer;
