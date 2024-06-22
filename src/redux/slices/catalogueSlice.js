import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  // Catalogue Products
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
    setCatalogue(state, action) {
      state.catalogue = action.payload;
    },

    setSkeletonIsLoading(state, action) {
      state.isSkeletonLoading = action.payload;
    },
  },

  // The extra function
  extraReducers: (builder) => {
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

// Export the function
export const { setCatalogue, setSkeletonIsLoading } = catalogue.actions;

// Export the reducer
export default catalogue.reducer;
