import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get all products -> Input
export const fetchInputProducts = createAsyncThunk(
  "catalogue/fetchInputProductsStatus",
  async () => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products`
    );
    return response.data;
  }
);

// Get all / filtered products -> Shop
export const fetchProducts = createAsyncThunk(
  "users/fetchProductsStatus",
  async ({ queryParams, currentPage }) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products?page=${currentPage}&limit=6&${queryParams}`
    );

    return response.data;
  }
);

const initialState = {
  // Input products
  inputProducts: [],

  // Catalogue products
  catalogue: [],

  // Skeleton content loader
  isSkeletonLoading: true,
  // Fetch status
  status: "",
};

const catalogue = createSlice({
  // Name is required
  name: "catalogue",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setSkeletonIsLoading(state, action) {
      state.isSkeletonLoading = action.payload;
    },
  },

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

    // Get all products -> Input
    builder.addCase(fetchInputProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchInputProducts.fulfilled, (state, action) => {
      state.status = "success";

      state.inputProducts = action.payload;
    });

    builder.addCase(fetchInputProducts.rejected, (state) => {
      state.status = "error";
      // Empty allProducts
      state.inputProducts = [];
    });
  },
});

// Export the function
export const { setSkeletonIsLoading } = catalogue.actions;

// Export the selectors
export const selectInputProducts = (state) => state.catalogue.inputProducts;
export const selectCatalogue = (state) => state.catalogue.catalogue;
export const selectIsSkeletonLoading = (state) =>
  state.catalogue.isSkeletonLoading;

// Export the reducer
export default catalogue.reducer;
