import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../components/headers/SearchModal";
import { RootState } from "../store";
import { Status } from "./authorsPostsSlice";

type FetchShopProps = {
  queryParams: string;
  currentPage: number;
};

// Get filtered products -> Shop
export const fetchShopProducts = createAsyncThunk<Product[], FetchShopProps>(
  "users/fetchProductsStatus",
  async ({ queryParams, currentPage }) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products?page=${currentPage}&limit=6&${queryParams}`
    );

    return response.data as Product[];
  }
);

interface ShopState {
  // Shop products
  shopProducts: Product[];

  // The active index menu of sort
  activeIndex: string;

  // Tag categories
  categories: string;

  // Open / Close popup
  openSortMenu: boolean;

  // Current page
  currentPage: number;

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: Status;
}

const initialState: ShopState = {
  // Shop products
  shopProducts: [],

  // The active index menu of sort
  activeIndex: "relevance",

  // Tag categories
  categories: "all",

  // Open / Close popup
  openSortMenu: false,

  // Current page
  currentPage: 1,

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: Status.LOADING,
};

const shopSlice = createSlice({
  // Name is required
  name: "shop",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setActiveIndex(state, action: PayloadAction<string>) {
      state.activeIndex = action.payload;
    },

    setTagCategories(state, action: PayloadAction<string>) {
      state.categories = action.payload;
    },

    setOpenSortMenu(state, action: PayloadAction<boolean>) {
      state.openSortMenu = action.payload;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },

  // The extra function
  extraReducers: (builder) => {
    // Get all / filtered products -> Shop
    builder
      .addCase(fetchShopProducts.pending, (state) => {
        state.status = Status.LOADING;

        state.isSkeletonLoading = true;
      })

      .addCase(
        fetchShopProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = Status.SUCCESS;

          state.shopProducts = action.payload;

          state.isSkeletonLoading = false;
        }
      )

      .addCase(fetchShopProducts.rejected, (state) => {
        state.status = Status.ERROR;

        state.isSkeletonLoading = true;

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
export const selectOpenSortMenu = (state: RootState) => state.shop.openSortMenu;
export const selectCurrentPage = (state: RootState) => state.shop.currentPage;
export const selectFilters = (state: RootState) => state.shop;
export const selectShopProducts = (state: RootState) => state.shop.shopProducts;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.shop.isSkeletonLoading;

// Export the reducer
export default shopSlice.reducer;
