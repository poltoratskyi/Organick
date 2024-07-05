import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get filtered products -> Input
export const fetchInputProducts = createAsyncThunk(
  "catalogue/fetchInputProductsStatus",
  async (filterLetter) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products?filter=${filterLetter}`
    );
    return response.data;
  }
);

const initialState = {
  // Input products
  inputProducts: [],

  // Visible <-> Hidden input
  visibleInput: false,

  // Visible <-> Hidden search
  visibleSearch: false,

  // Input search value
  searchProduct: "",

  // Visible <-> Hidden search products
  showNoResults: false,

  // Fetch status
  status: "",
};

const inputSlice = createSlice({
  // Name is required
  name: "input",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setVisibleInput(state, action) {
      state.visibleInput = action.payload;
    },

    setVisibleSearch(state, action) {
      state.visibleSearch = action.payload;
    },

    setSearchProduct(state, action) {
      state.searchProduct = action.payload;
    },

    setShowNoResults(state, action) {
      state.showNoResults = action.payload;
    },
  },

  // The extra function
  extraReducers: (builder) => {
    // Get filtered products -> Input
    builder.addCase(fetchInputProducts.pending, (state) => {
      state.status = "loading";

      // Skeleton on
      state.isSkeletonLoading = true;
    });

    builder.addCase(fetchInputProducts.fulfilled, (state, action) => {
      state.status = "success";

      state.inputProducts = action.payload;

      // Skeleton off
      state.isSkeletonLoading = false;
    });

    builder.addCase(fetchInputProducts.rejected, (state) => {
      state.status = "error";
      // Empty allProducts
      state.inputProducts = [];
    });
  },
});

// Export the function
export const {
  setVisibleInput,
  setVisibleSearch,
  setSearchProduct,
  setShowNoResults,
} = inputSlice.actions;

// Export the selectors
export const selectInputResults = (state) => state.input;
export const selectVisibleInput = (state) => state.input.visibleInput;
export const selectSearchProduct = (state) => state.input.searchProduct;
export const selectInputProducts = (state) => state.input.inputProducts;
export const selectIsSkeletonLoading = (state) => state.input.isSkeletonLoading;

// Export the reducer
export default inputSlice.reducer;
