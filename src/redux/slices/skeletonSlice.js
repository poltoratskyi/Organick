import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Skeleton content loader
  isSkeletonLoading: true,
};

const skeletonSlice = createSlice({
  // Name is required
  name: "skeleton",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setSkeletonIsLoading(state, action) {
      state.isSkeletonLoading = action.payload;
    },
  },
});

// Export the function
export const { setSkeletonIsLoading } = skeletonSlice.actions;

// Export the reducer
export default skeletonSlice.reducer;
