import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PostItem } from "../../components/PostItems";
import { RootState } from "../store";

export const fetchSinglePost = createAsyncThunk<PostItem[], fetchSingleProps>(
  "users/fetchSinglePostStatus",
  async (postId) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts/` + postId
    );

    const resultData = [response.data];

    return resultData as PostItem[];
  }
);

type fetchSingleProps = {
  postId: string;
};

// Only obj
interface SinglePostState {
  // Single post
  singlePost: PostItem[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: "loading" | "success" | "error";
}

const initialState: SinglePostState = {
  // Single post
  singlePost: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: "loading",
};

const singlePost = createSlice({
  // Name is required
  name: "singlePost",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {},

  // The extra function
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePost.pending, (state) => {
      state.status = "loading";

      // Skeleton on
      state.isSkeletonLoading = true;
    });

    builder.addCase(
      fetchSinglePost.fulfilled,
      (state, action: PayloadAction<PostItem[]>) => {
        state.status = "success";

        state.singlePost = action.payload;

        // Skeleton off
        state.isSkeletonLoading = false;
      }
    );

    builder.addCase(fetchSinglePost.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.singlePost = [];
    });
  },
});

// Export the selector
export const selectSinglePost = (state: RootState) =>
  state.singlePost.singlePost;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.singlePost.isSkeletonLoading;

// Export the reducer
export default singlePost.reducer;
