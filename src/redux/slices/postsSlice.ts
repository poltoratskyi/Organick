import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { PostItem } from "../../components/PostItems";

export const fetchPosts = createAsyncThunk<PostItem[]>(
  "users/fetchSinglePostStatus",
  async () => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts?sortBy=sortDate&order=desc`
    );

    return response.data as PostItem[];
  }
);

// Only obj
interface PostsState {
  // Posts
  posts: PostItem[];

  // Fetch status
  status: "loading" | "success" | "error";
}

const initialState: PostsState = {
  // Posts
  posts: [],

  // Fetch status
  status: "loading",
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

    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<PostItem[]>) => {
        state.status = "success";

        state.posts = action.payload;
      }
    );

    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.posts = [];
    });
  },
});

// Export the selector
export const selectPosts = (state: RootState) => state.posts.posts;

// Export the reducer
export default postsSlice.reducer;
