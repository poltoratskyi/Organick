import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectActiveNameMenu } from "./redux/slices/menuSlice";
import { setAddProduct } from "./redux/slices/cartSlice";
import { setViewedProducts } from "./redux/slices/singleProductSlice";

import Home from "./pages/Home";
import Navigation from "./components/headers/Navigation";
import Error from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import ProductSingle from "./pages/ProductSingle";
import NewsSingle from "./pages/PostSingle";
import Services from "./pages/Services";
import News from "./pages/News";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import PasswordProtected from "./pages/PasswordProtected";
import Footer from "./components/footers/Footer";
import AuthorPosts from "./pages/AuthorsPosts";

import "./GlobalStyles.scss";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector(selectActiveNameMenu);

  // Get products -> localStorage
  useEffect(() => {
    const shoppingCart =
      //@ts-ignore
      JSON.parse(localStorage.getItem("shoppingCart")) || [];

    const viewedProducts =
      //@ts-ignore
      JSON.parse(localStorage.getItem("viewedProducts")) || [];

    // Save products -> Shopping basket
    dispatch(setAddProduct(shoppingCart));

    // Save related products
    dispatch(setViewedProducts(viewedProducts));
  }, [activeNameMenu]);

  return (
    <>
      {/* Navigation menu */}
      <Navigation />
      <Routes>
        {/* Default home page */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Services" element={<Services />} />

        {/* Shop route for ProductSingle */}
        <Route path="/Shop" element={<Shop />} />
        <Route
          path="/product/:productName/:productId"
          element={<ProductSingle />}
        />

        {/* News route for NewsSingle */}
        <Route path="/News" element={<News />} />
        <Route path="/blog/:blogName/:postId" element={<NewsSingle />} />
        <Route path="/posts/:year/:author" element={<AuthorPosts />} />

        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/PasswordProtected" element={<PasswordProtected />} />

        {/* 404 errors */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
