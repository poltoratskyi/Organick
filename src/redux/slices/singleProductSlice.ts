import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../components/headers/SearchModal";
import { RootState } from "../store";

export const fetchSingleProduct = createAsyncThunk<Product[], fetchSingleProps>(
  "users/fetchSingleProductStatus",
  async (productId) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products/` + productId
    );

    const resultData = [response.data];

    return resultData as Product[];
  }
);

type fetchSingleProps = {
  productId: string;
};

// Only obj
interface SingleProductState {
  // Related products
  viewedProducts: Product[];

  // Single product
  singleProduct: Product[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: "loading" | "success" | "error";
}

const initialState: SingleProductState = {
  // Related products
  viewedProducts: [],

  // Single product
  singleProduct: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: "loading",
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
  },

  // The extra function
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.status = "loading";

      // Skeleton on
      state.isSkeletonLoading = true;
    });

    builder.addCase(
      fetchSingleProduct.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.status = "success";

        state.singleProduct = action.payload;

        // Skeleton off
        state.isSkeletonLoading = false;
      }
    );

    builder.addCase(fetchSingleProduct.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.singleProduct = [];
    });
  },
});

// Export the function
export const { setViewedProducts } = singleProduct.actions;

// Export the selector
export const selectRelatedProducts = (state: RootState) =>
  state.singleProduct.viewedProducts;
export const selectSingleProduct = (state: RootState) =>
  state.singleProduct.singleProduct;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.singleProduct.isSkeletonLoading;

// Export the reducer
export default singleProduct.reducer;
