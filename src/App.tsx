import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectActiveNameMenu } from "./redux/slices/menuSlice";
import { setAddProduct } from "./redux/slices/cartSlice";
import { setViewedProducts } from "./redux/slices/singleProductSlice";

import Home from "./pages/Home";
import Navigation from "./components/headers/Navigation";
import Footer from "./components/footers/Footer";
import MainLoader from "./components/MainLoader";

import "./GlobalStyles.scss";
import { AppDispatch } from "./redux/store";

const AboutUs = lazy(
  () => import(/* webpackChunkName: "AboutUs"*/ "./pages/AboutUs")
);
const Team = lazy(() => import(/* webpackChunkName: "Team"*/ "./pages/Team"));
const Services = lazy(
  () => import(/* webpackChunkName: "Services"*/ "./pages/Services")
);
const Shop = lazy(() => import(/* webpackChunkName: "Shop"*/ "./pages/Shop"));
const ProductSingle = lazy(
  () => import(/* webpackChunkName: "ProductSingle"*/ "./pages/ProductSingle")
);
const News = lazy(() => import(/* webpackChunkName: "News"*/ "./pages/News"));
const NewsSingle = lazy(
  () => import(/* webpackChunkName: "NewsSingle"*/ "./pages/PostSingle")
);
const AuthorPosts = lazy(
  () => import(/* webpackChunkName: "AuthorPosts"*/ "./pages/AuthorsPosts")
);
const ContactUs = lazy(
  () => import(/* webpackChunkName: "ContactUs"*/ "./pages/ContactUs")
);
const PasswordProtected = lazy(
  () =>
    import(
      /* webpackChunkName: "PasswordProtected"*/ "./pages/PasswordProtected"
    )
);
const ErrorPage = lazy(
  () => import(/* webpackChunkName: "ErrorPage"*/ "./pages/Error")
);

function App() {
  const dispatch = useDispatch<AppDispatch>();

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector(selectActiveNameMenu);

  // Get products -> localStorage
  useEffect(() => {
    const shoppingCartJson = localStorage.getItem("shoppingCart");
    const shoppingCart = shoppingCartJson ? JSON.parse(shoppingCartJson) : [];

    const viewedProductsJson = localStorage.getItem("viewedProducts");
    const viewedProducts = viewedProductsJson
      ? JSON.parse(viewedProductsJson)
      : [];

    // Save products -> Shopping basket
    dispatch(setAddProduct(shoppingCart));

    // Save related products
    dispatch(setViewedProducts(viewedProducts));
  }, [dispatch, activeNameMenu]);

  return (
    <>
      {/* Navigation menu */}
      <Navigation />

      <Routes>
        {/* Default home page */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route
          path="/AboutUs"
          element={
            <Suspense fallback={<MainLoader />}>
              <AboutUs />
            </Suspense>
          }
        />

        <Route
          path="/Team"
          element={
            <Suspense fallback={<MainLoader />}>
              <Team />
            </Suspense>
          }
        />
        <Route
          path="/Services"
          element={
            <Suspense fallback={<MainLoader />}>
              <Services />
            </Suspense>
          }
        />
        {/* Shop route for ProductSingle */}
        <Route
          path="/Shop"
          element={
            <Suspense fallback={<MainLoader />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/product/:productName/:productId"
          element={
            <Suspense fallback={<MainLoader />}>
              <ProductSingle />
            </Suspense>
          }
        />
        {/* News route for NewsSingle */}
        <Route
          path="/News"
          element={
            <Suspense fallback={<MainLoader />}>
              <News />
            </Suspense>
          }
        />
        <Route
          path="/blog/:blogName/:postId"
          element={
            <Suspense fallback={<MainLoader />}>
              <NewsSingle />
            </Suspense>
          }
        />
        <Route
          path="/posts/:year/:author"
          element={
            <Suspense fallback={<MainLoader />}>
              <AuthorPosts />
            </Suspense>
          }
        />
        <Route
          path="/ContactUs"
          element={
            <Suspense fallback={<MainLoader />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/PasswordProtected"
          element={
            <Suspense fallback={<MainLoader />}>
              <PasswordProtected />
            </Suspense>
          }
        />
        {/* 404 errors */}
        <Route
          path="*"
          element={
            <Suspense fallback={<MainLoader />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
