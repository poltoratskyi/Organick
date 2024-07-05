import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get products -> Home
export const fetchProducts = createAsyncThunk(
  "users/fetchProductsStatus",
  async () => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products`
    );

    return response.data;
  }
);

const initialState = {
  // Catalogue products
  catalogue: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: "",
};

const catalogueSlice = createSlice({
  // Name is required
  name: "catalogue",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {},

  // The extra function
  extraReducers: (builder) => {
    // Get all / filtered products -> Shop
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";

      // Skeleton on
      state.isSkeletonLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";

      state.catalogue = action.payload;

      // Skeleton off
      state.isSkeletonLoading = false;
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.catalogue = [];
    });
  },
});

// Export the selectors
export const selectCatalogue = (state) => state.catalogue.catalogue;
export const selectIsSkeletonLoading = (state) =>
  state.catalogue.isSkeletonLoading;

// Export the reducer
export default catalogueSlice.reducer;
