import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Product } from "../../components/headers/SearchModal";
import { Status } from "./authorsPostsSlice";

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

interface CatalogueState {
  // Catalogue products
  catalogue: Product[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: Status;
}

const initialState: CatalogueState = {
  // Catalogue products
  catalogue: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: Status.LOADING,
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
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;

        state.isSkeletonLoading = true;
      })

      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = Status.SUCCESS;

          state.catalogue = action.payload;

          state.isSkeletonLoading = false;
        }
      )

      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;

        // Empty catalogue
        state.catalogue = [];

        // Skeleton true
        state.isSkeletonLoading = true;
      });
  },
});

// Export the selectors
export const selectCatalogue = (state: RootState) => state.catalogue.catalogue;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.catalogue.isSkeletonLoading;

// Export the reducer
export default catalogueSlice.reducer;
