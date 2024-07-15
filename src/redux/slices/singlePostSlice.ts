import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PostItem } from "../../components/PostItems";
import { RootState } from "../store";
import { Status } from "./authorsPostsSlice";

type fetchSingleProps = {
  postId: string;
};

export const fetchSinglePost = createAsyncThunk<PostItem[], fetchSingleProps>(
  "users/fetchSinglePostStatus",
  async ({ postId }) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts/` + postId
    );

    return [response.data] as PostItem[];
  }
);

interface SinglePostState {
  // Single post
  singlePost: PostItem[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: Status;
}

const initialState: SinglePostState = {
  // Single post
  singlePost: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: Status.LOADING,
};

const singlePost = createSlice({
  // Name is required
  name: "singlePost",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setClearSinglePost(state) {
      state.singlePost = [];
    },
  },

  // The extra function
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePost.pending, (state) => {
        state.status = Status.LOADING;

        state.isSkeletonLoading = true;
      })

      .addCase(
        fetchSinglePost.fulfilled,
        (state, action: PayloadAction<PostItem[]>) => {
          state.status = Status.SUCCESS;

          state.isSkeletonLoading = false;

          state.singlePost = action.payload;
        }
      )

      .addCase(fetchSinglePost.rejected, (state) => {
        state.status = Status.ERROR;

        state.isSkeletonLoading = true;

        // Empty catalogue
        state.singlePost = [];
      });
  },
});

// Export the fnc
export const { setClearSinglePost } = singlePost.actions;

// Export the selector
export const selectSinglePost = (state: RootState) =>
  state.singlePost.singlePost;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.singlePost.isSkeletonLoading;

// Export the reducer
export default singlePost.reducer;
