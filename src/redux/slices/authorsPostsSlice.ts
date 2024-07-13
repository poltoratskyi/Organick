import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PostItem } from "../../components/PostItems";
import axios from "axios";
import { RootState } from "../store";

export const fetchAuthorPost = createAsyncThunk<PostItem[], fetchAuthorProps>(
  "users/fetchAuthorPostStatus",
  async (author) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts?sortBy=sortDate&order=desc&filter=${author}`
    );

    return response.data as PostItem[];
  }
);

type fetchAuthorProps = {
  author: string;
};

// Only obj
interface AuthorsPostsState {
  // Author's posts
  authorsPosts: PostItem[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: "loading" | "success" | "error";
}

const initialState: AuthorsPostsState = {
  // Author's posts
  authorsPosts: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: "loading",
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

    builder.addCase(
      fetchAuthorPost.fulfilled,
      (state, action: PayloadAction<PostItem[]>) => {
        state.status = "success";

        state.authorsPosts = action.payload;

        // Skeleton off
        state.isSkeletonLoading = false;
      }
    );

    builder.addCase(fetchAuthorPost.rejected, (state) => {
      state.status = "error";

      // Empty catalogue
      state.authorsPosts = [];
    });
  },
});

// Export the selector
export const selectAuthorsPosts = (state: RootState) =>
  state.authorsPosts.authorsPosts;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.authorsPosts.isSkeletonLoading;

// Export the reducer
export default authorsPosts.reducer;
