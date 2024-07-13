import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Product } from "../../components/headers/SearchModal";

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

// Only obj
interface InputState {
  // Input products
  inputProducts: Product[];

  // Visible <-> Hidden input
  visibleInput: boolean;

  // Visible <-> Hidden search
  visibleSearch: boolean;

  // Input search value
  searchProduct: string;

  // Visible <-> Hidden search products
  showNoResults: boolean;

  // Fetch status
  status: "loading" | "success" | "error";

  // Skeleton content loader
  isSkeletonLoading: boolean;
}

const initialState: InputState = {
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
  status: "loading",

  // Skeleton content loader
  isSkeletonLoading: false,
};

const inputSlice = createSlice({
  // Name is required
  name: "input",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setVisibleInput(state, action: PayloadAction<boolean>) {
      state.visibleInput = action.payload;
    },

    setVisibleSearch(state, action: PayloadAction<boolean>) {
      state.visibleSearch = action.payload;
    },

    setSearchProduct(state, action: PayloadAction<string>) {
      state.searchProduct = action.payload;
    },

    setShowNoResults(state, action: PayloadAction<boolean>) {
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

    builder.addCase(
      fetchInputProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.status = "success";

        state.showNoResults = true;

        state.inputProducts = action.payload;

        // Skeleton off
        state.isSkeletonLoading = false;
      }
    );

    builder.addCase(fetchInputProducts.rejected, (state) => {
      state.status = "error";

      // Skeleton off
      state.isSkeletonLoading = false;

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
export const selectInputResults = (state: RootState) => state.input;
export const selectVisibleInput = (state: RootState) =>
  state.input.visibleInput;
export const selectSearchProduct = (state: RootState) =>
  state.input.searchProduct;
export const selectInputProducts = (state: RootState) =>
  state.input.inputProducts;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.input.isSkeletonLoading;

// Export the reducer
export default inputSlice.reducer;
