import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PostItem } from "../../components/PostItems";
import axios from "axios";
import { RootState } from "../store";

type fetchAuthorProps = {
  surname: string;
};

export const fetchAuthorPost = createAsyncThunk<PostItem[], fetchAuthorProps>(
  "users/fetchAuthorPostStatus",
  async ({ surname }) => {
    const response = await axios.get(
      `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Posts?sortBy=sortDate&order=desc&filter=${surname}`
    );

    return response.data as PostItem[];
  }
);

export enum Status {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface AuthorsPostsState {
  // Author's posts
  authorsPosts: PostItem[];

  // Skeleton content loader
  isSkeletonLoading: boolean;

  // Fetch status
  status: Status;
}

const initialState: AuthorsPostsState = {
  // Author's posts
  authorsPosts: [],

  // Skeleton content loader
  isSkeletonLoading: true,

  // Fetch status
  status: Status.LOADING,
};

const authorsPosts = createSlice({
  // Name is required
  name: "authorsPosts",

  // Connect initial state
  initialState,

  // The basic function
  reducers: {
    setClearAuthorsPosts(state) {
      state.authorsPosts = [];
    },
  },

  // The extra function
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorPost.pending, (state) => {
        state.status = Status.LOADING;

        state.isSkeletonLoading = true;
      })

      .addCase(
        fetchAuthorPost.fulfilled,
        (state, action: PayloadAction<PostItem[]>) => {
          state.status = Status.SUCCESS;

          state.authorsPosts = action.payload;

          state.isSkeletonLoading = false;
        }
      )

      .addCase(fetchAuthorPost.rejected, (state) => {
        state.status = Status.ERROR;

        // Empty catalogue
        state.authorsPosts = [];

        // Skeleton true
        state.isSkeletonLoading = true;
      });
  },
});

// Export the fnc
export const { setClearAuthorsPosts } = authorsPosts.actions;

// Export the selector
export const selectAuthorsPosts = (state: RootState) =>
  state.authorsPosts.authorsPosts;
export const selectIsSkeletonLoading = (state: RootState) =>
  state.authorsPosts.isSkeletonLoading;

// Export the reducer
export default authorsPosts.reducer;
