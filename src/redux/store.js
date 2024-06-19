import { configureStore } from "@reduxjs/toolkit";

// Connect reducer
import shop from "./slices/shopSlice";
import cart from "./slices/cartSlice";
import menu from "./slices/menuSlice";
import input from "./slices/inputSlice";
import singleNews from "./slices/singleNewsSlice";
import singleProduct from "./slices/singleProductSlice";
import catalogue from "./slices/catalogueSlice";
import skeleton from "./slices/skeletonSlice";

export const store = configureStore({
  // Reducer -> Connect the function
  reducer: {
    shop,
    cart,
    menu,
    input,
    singleNews,
    singleProduct,
    catalogue,
    skeleton,
  },
});
