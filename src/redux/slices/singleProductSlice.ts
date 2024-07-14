import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../components/headers/SearchModal";
import { RootState } from "../store";
import { Status } from "./authorsPostsSlice";

type fetchSingleProps = {
  productId: string;
};

export const fetchSingleProduct = createAsyncThunk<Product[], fetchSingleProps>(
  "users/fetchSingleProductStatus",
  async ({ productId }) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products/` + productId
    );

    return [response.data] as Product[];
  }
);

interface SingleProductState {
  // Related products
  viewedProducts: Product[];

  // Single product
  singleProduct: Product[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: Status;
}

const initialState: SingleProductState = {
  // Related products
  viewedProducts: [],

  // Single product
  singleProduct: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: Status.LOADING,
};

const singleProduct = createSlice({
  // Name is required
  name: "singleProduct",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setViewedProducts(state, action: PayloadAction<Product[]>) {
      state.viewedProducts = action.payload;
    },

    setClearSingleProduct(state) {
      state.singleProduct = [];
    },
  },

  // The extra function
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = Status.LOADING;

        state.isSkeletonLoading = true;
      })

      .addCase(
        fetchSingleProduct.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = Status.SUCCESS;

          state.singleProduct = action.payload;

          state.isSkeletonLoading = false;
        }
      )

      .addCase(fetchSingleProduct.rejected, (state) => {
        state.status = Status.ERROR;

        state.isSkeletonLoading = true;

        // Empty catalogue
        state.singleProduct = [];
      });
  },
});

// Export the function
export const { setViewedProducts, setClearSingleProduct } =
  singleProduct.actions;

// Export the selector
export const selectRelatedProducts = (state: RootState) =>
  state.singleProduct.viewedProducts;
export const selectSingleProduct = (state: RootState) =>
  state.singleProduct.singleProduct;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.singleProduct.isSkeletonLoading;

// Export the reducer
export default singleProduct.reducer;
