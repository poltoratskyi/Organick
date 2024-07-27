import { configureStore } from "@reduxjs/toolkit";

// Connect reducer
import shop from "./slices/shopSlice";
import cart from "./slices/cartSlice";
import input from "./slices/inputSlice";
import posts from "./slices/postsSlice";
import singleProduct from "./slices/singleProductSlice";
import singlePortfolio from "./slices/singlePortfolioSlice";
import catalogue from "./slices/catalogueSlice";
import singlePost from "./slices/singlePostSlice";
import authorsPosts from "./slices/authorsPostsSlice";

export const store = configureStore({
  // Reducer -> Connect the function
  reducer: {
    shop,
    cart,
    input,
    posts,
    singleProduct,
    singlePortfolio,
    catalogue,
    singlePost,
    authorsPosts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
