import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get filtered products -> Shop
export const fetchShopProducts = createAsyncThunk(
  "users/fetchProductsStatus",
  async ({ queryParams, currentPage }) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products?page=${currentPage}&limit=6&${queryParams}`
    );

    return response.data;
  }
);

const initialState = {
  // Shop products
  shopProducts: [],

  // The active index menu of sort
  activeIndex: "Relevance",

  // Tag categories
  categories: "All",

  // Open / Close popup
  openSortMenu: false,

  // Current page
  currentPage: 1,

  // Skeleton content loader
  isSkeletonLoading: true,
};

const shopSlice = createSlice({
  // Name is required
  name: "shop",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },

    setTagCategories(state, action) {
      state.categories = action.payload;
    },

    setOpenSortMenu(state, action) {
      state.openSortMenu = action.payload;
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },

  // The extra function
  extraReducers: (builder) => {
    // Get all / filtered products -> Shop
    builder.addCase(fetchShopProducts.pending, (state) => {
      state.status = "loading";

      // Skeleton on
      state.isSkeletonLoading = true;
    });

    builder.addCase(fetchShopProducts.fulfilled, (state, action) => {
      state.status = "success";

      state.shopProducts = action.payload;

      // Skeleton off
      state.isSkeletonLoading = false;
    });

    builder.addCase(fetchShopProducts.rejected, (state) => {
      state.status = "error";

      // Empty shop products
      state.shopProducts = [];
    });
  },
});

// Export the function
export const {
  setTagCategories,
  setActiveIndex,
  setOpenSortMenu,
  setCurrentPage,
} = shopSlice.actions;

// Export the selectors
export const selectOpenSortMenu = (state) => state.shop.openSortMenu;
export const selectCurrentPage = (state) => state.shop.currentPage;
export const selectFilters = (state) => state.shop;
export const selectShopProducts = (state) => state.shop.shopProducts;
export const selectIsSkeletonLoading = (state) => state.shop.isSkeletonLoading;

// Export the reducer
export default shopSlice.reducer;
