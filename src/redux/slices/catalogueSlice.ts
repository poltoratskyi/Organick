import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Product } from "../../components/headers/SearchModal";

// Get products -> Home
export const fetchProducts = createAsyncThunk<Product[]>(
  "users/fetchProductsStatus",
  async () => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products`
    );

    return response.data as Product[];
  }
);

// Only obj
interface CatalogueState {
  // Catalogue products
  catalogue: Product[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: "loading" | "success" | "error";
}

const initialState: CatalogueState = {
  // Catalogue products
  catalogue: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: "loading",
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

    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.status = "success";

        state.catalogue = action.payload;

        // Skeleton off
        state.isSkeletonLoading = false;
      }
    );

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.catalogue = [];
    });
  },
});

// Export the selectors
export const selectCatalogue = (state: RootState) => state.catalogue.catalogue;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.catalogue.isSkeletonLoading;

// Export the reducer
export default catalogueSlice.reducer;
