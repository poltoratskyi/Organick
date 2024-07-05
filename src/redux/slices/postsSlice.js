import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "users/fetchSinglePostStatus",
  async () => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts?sortBy=sortDate&order=desc`
    );

    return response.data;
  }
);

const initialState = {
  // Posts
  posts: [],

  // Fetch status
  status: "",
};

const postsSlice = createSlice({
  // Name is required
  name: "posts",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {},

  // The extra function
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";

      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.posts = [];
    });
  },
});

// Export the selector
export const selectPosts = (state) => state.posts.posts;

// Export the reducer
export default postsSlice.reducer;
