import { configureStore } from "@reduxjs/toolkit";

// Connect reducer
import shop from "./slices/shopSlice";
import cart from "./slices/cartSlice";
import menu from "./slices/menuSlice";
import input from "./slices/inputSlice";
import posts from "./slices/postsSlice";
import singleProduct from "./slices/singleProductSlice";
import catalogue from "./slices/catalogueSlice";
import singlePost from "./slices/singlePostSlice";
import authorsPosts from "./slices/authorsPostsSlice";

export const store = configureStore({
  // Reducer -> Connect the function
  reducer: {
    shop,
    cart,
    menu,
    input,
    posts,
    singleProduct,
    catalogue,
    singlePost,
    authorsPosts,
  },
});
