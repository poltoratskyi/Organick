import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PortfolioItem } from "../../components/PortfolioItems";

interface PortfolioState {
  singlePortfolio: PortfolioItem[];

  // Skeleton content loader
  isSkeletonLoading: boolean;
}

const initialState: PortfolioState = {
  singlePortfolio: [],

  // Skeleton content loader
  isSkeletonLoading: true,
};

const singlePortfolio = createSlice({
  // Name is required
  name: "singlePortfolio",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setSinglePortfolio(state, action: PayloadAction<PortfolioItem[]>) {
      state.singlePortfolio = action.payload;

      state.isSkeletonLoading = false;
    },
  },
});

// Export the fnc
export const { setSinglePortfolio } = singlePortfolio.actions;

// Export the selector
export const selectSinglePortfolio = (state: RootState) =>
  state.singlePortfolio.singlePortfolio;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.singlePortfolio.isSkeletonLoading;

// Export the reducer
export default singlePortfolio.reducer;
