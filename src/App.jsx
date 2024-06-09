import React, { useEffect, useContext } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./GlobalStyles.scss";

import { setShoppingCart } from "./redux/slices/cartSlice";
import { setActiveName } from "./redux/slices/menuSlice";
import { setSingleNews } from "./redux/slices/singleNewsSlice";
import {
  setRelatedProducts,
  setSingleProduct,
} from "./redux/slices/singleProductSlice";
import { setCatalogue } from "./redux/slices/catalogueSlice";
import { setSkeletonIsLoading } from "./redux/slices/skeletonSlice";

import Home from "./pages/Home/Home";
import Navigation from "./components/headers/Navigation/Navigation";
import Error from "./pages/Error/Error";
import AboutUs from "./pages/AboutUs/AboutUs";
import Shop from "./pages/Shop/Shop";
import ProductSingle from "./pages/ProductSingle/ProductSingle";
import NewsSingle from "./pages/NewsSingle/NewsSingle";
import Services from "./pages/Services/Services";
import News from "./pages/News/News";
import Team from "./pages/Team/Team";
import ContactUs from "./pages/ContactUs/ContactUs";
import PasswordProtected from "./pages/PasswordProtected/PasswordProtected";
import Footer from "./components/footers/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  // Initial state selected -> filtersSlice.js
  const { activeIndex, popupIndex, categories } = useSelector(
    (state) => state.filters
  );

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector((state) => state.menu.activeNameMenu);

  // Initial state selected -> catalogueSlice.js
  const catalogue = useSelector((state) => state.catalogue.catalogue);

  // Initial state selected -> skeletonSlice.js
  const isSkeletonLoading = useSelector(
    (state) => state.skeleton.isSkeletonLoading
  );

  // Get products <- Backend (mockAPI) / localStorage
  useEffect(() => {
    // Requests -> Backend (mockAPI) / localStorage
    const fetchData = async () => {
      // Skeleton on
      dispatch(setSkeletonIsLoading(true));

      // Geting the products <- localStorage
      const shoppingCart =
        JSON.parse(localStorage.getItem("shoppingCart")) || [];

      // Single product <- Geting the product <- localStorage
      const reviewedProduct =
        JSON.parse(localStorage.getItem("singleProduct")) || [];

      // Related products state products <- Geting the related products <- localStorage
      const relatedProducts =
        JSON.parse(localStorage.getItem("relatedProducts")) || [];

      // Single news <- Geting the news <- localStorage
      const reviewedNews = JSON.parse(localStorage.getItem("singleNews")) || [];

      // Active menu <- localStorage
      const activeMenu =
        JSON.parse(localStorage.getItem("selectedPage")) || activeNameMenu;

      // Wait for the request -> Success
      let queryParams = "";

      if (activeNameMenu === "Shop") {
        if (categories !== "All") {
          queryParams += `tag=${categories}`;
        }

        if (activeIndex === 1) {
          queryParams += "&sortBy=price&order=asc";
        }

        if (activeIndex === 2) {
          queryParams += "&sortBy=price&order=desc";
        }

        if (activeIndex === 3) {
          queryParams += "&sortBy=name&order=asc";
        }

        if (activeIndex === 4) {
          queryParams += "&sortBy=name&order=desc";
        }

        // Fetch products only if activeNameMenu is "Shop"
        const response = await axios.get(
          `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products?${queryParams}`
        );

        // Save products -> Catalogue
        dispatch(setCatalogue(response.data));
      }

      // Save products -> Shopping basket
      dispatch(setShoppingCart(shoppingCart));

      // Save reviewed products -> Single product
      dispatch(setSingleProduct(reviewedProduct));

      // Save reviewed news -> Single news
      dispatch(setSingleNews(reviewedNews));

      // Save reviewed pages -> Active name
      dispatch(setActiveName(activeMenu));

      // Save related products
      dispatch(setRelatedProducts(relatedProducts));

      // Skeleton off
      dispatch(setSkeletonIsLoading(false));
    };

    fetchData();

    // Do one request
  }, [categories, activeIndex, activeNameMenu, dispatch]);

  // Show single news
  const showSingleNews = (news) => {
    // Show the new news -> Previous news
    const newSingleNews = [news];

    // Request -> localStorage
    localStorage.setItem("singleNews", JSON.stringify(newSingleNews));

    // Update -> Single news component
    dispatch(setSingleNews(newSingleNews));
  };

  return (
    <>
      {/* Page navigation */}
      <BrowserRouter>
        {/* Scroll to top */}
        {/* Navigation menu */}
        <Navigation />
        <Routes>
          {/* Default home page */}
          <Route
            path="/"
            element={
              <Home
                // Show single news
                showSingleNews={showSingleNews}
                // Skeleton content loader
                isSkeletonLoading={isSkeletonLoading}
              />
            }
          />

          {/* Other pages */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Services" element={<Services />} />

          {/* Shop route for ProductSingle */}
          <Route
            path="/Shop"
            element={
              <Shop
                // The active index
                activeIndex={activeIndex}
                // The popup index
                popupIndex={popupIndex}
                // Skeleton content loader
                isSkeletonLoading={isSkeletonLoading}
                // Catalogue of products
                catalogue={catalogue}
              />
            }
          />
          <Route path="/Shop/:productId" element={<ProductSingle />} />

          {/* News route for NewsSingle */}
          <Route
            path="/News"
            element={
              <News
                // Show single news
                showSingleNews={showSingleNews}
              />
            }
          />
          <Route path="/News/:newsId" element={<NewsSingle />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/PasswordProtected" element={<PasswordProtected />} />

          {/* 404 errors */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
