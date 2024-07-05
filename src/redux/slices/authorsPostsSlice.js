import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuthorPost = createAsyncThunk(
  "users/fetchAuthorPostStatus",
  async (author) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts?sortBy=sortDate&order=desc&filter=${author}`
    );

    return response.data;
  }
);

const initialState = {
  // Author's posts
  authorsPosts: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: "",
};

const authorsPosts = createSlice({
  // Name is required
  name: "authorsPosts",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {},

  // The extra function
  extraReducers: (builder) => {
    builder.addCase(fetchAuthorPost.pending, (state) => {
      state.status = "loading";

      // Skeleton on
      state.isSkeletonLoading = true;
    });

    builder.addCase(fetchAuthorPost.fulfilled, (state, action) => {
      state.status = "success";

      state.authorsPosts = action.payload;

      // Skeleton off
      state.isSkeletonLoading = false;
    });

    builder.addCase(fetchAuthorPost.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.authorsPosts = [];
    });
  },
});

// Export the selector
export const selectAuthorsPosts = (state) => state.authorsPosts.authorsPosts;
export const selectIsSkeletonLoading = (state) =>
  state.authorsPosts.isSkeletonLoading;

// Export the reducer
export default authorsPosts.reducer;
