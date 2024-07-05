import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "users/fetchSingleProductStatus",
  async (productId) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products/` + productId
    );

    const resultData = [response.data];

    return resultData;
  }
);

const initialState = {
  // Related products
  viewedProducts: [],

  // Single product
  singleProduct: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: "",
};

const singleProduct = createSlice({
  // Name is required
  name: "singleProduct",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setViewedProducts(state, action) {
      state.viewedProducts = action.payload;
    },
  },

  // The extra function
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.status = "loading";

      // Skeleton on
      state.isSkeletonLoading = true;
    });

    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.status = "success";

      state.singleProduct = action.payload;

      // Skeleton off
      state.isSkeletonLoading = false;
    });

    builder.addCase(fetchSingleProduct.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.singleProduct = [];
    });
  },
});

// Export the function
export const { setViewedProducts } = singleProduct.actions;

// Export the selector
export const selectRelatedProducts = (state) =>
  state.singleProduct.viewedProducts;
export const selectSingleProduct = (state) => state.singleProduct.singleProduct;
export const selectIsSkeletonLoading = (state) =>
  state.singleProduct.isSkeletonLoading;

// Export the reducer
export default singleProduct.reducer;
