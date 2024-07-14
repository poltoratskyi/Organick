import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { PostItem } from "../../components/PostItems";
import { Status } from "./authorsPostsSlice";

export const fetchPosts = createAsyncThunk<PostItem[]>(
  "users/fetchPostsStatus",
  async () => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts?sortBy=sortDate&order=desc`
    );

    return response.data as PostItem[];
  }
);

interface PostsState {
  // Posts
  posts: PostItem[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: Status;
}

const initialState: PostsState = {
  // Posts
  posts: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: Status.LOADING,
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
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = Status.LOADING;

        state.isSkeletonLoading = true;
      })

      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<PostItem[]>) => {
          state.status = Status.SUCCESS;

          state.isSkeletonLoading = false;

          state.posts = action.payload;
        }
      )

      .addCase(fetchPosts.rejected, (state) => {
        state.status = Status.ERROR;

        state.isSkeletonLoading = true;

        // Empty catalogue
        state.posts = [];
      });
  },
});

// Export the selector
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.posts.isSkeletonLoading;

// Export the reducer
export default postsSlice.reducer;
