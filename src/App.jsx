import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import "./GlobalStyles.scss";

import { setAddProduct } from "./redux/slices/cartSlice";
import { setActiveName, selectActiveNameMenu } from "./redux/slices/menuSlice";
import { setSingleNews } from "./redux/slices/singleNewsSlice";
import {
  setRelatedProducts,
  setSingleProduct,
} from "./redux/slices/singleProductSlice";
import { fetchProducts } from "./redux/slices/catalogueSlice";
import { setSkeletonIsLoading } from "./redux/slices/catalogueSlice";
import {
  setTagCategories,
  setActiveIndex,
  setCurrentPage,
  selectFilters,
} from "./redux/slices/shopSlice";

import Home from "./pages/Home";
import Navigation from "./components/headers/Navigation";
import Error from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import ProductSingle from "./pages/ProductSingle";
import NewsSingle from "./pages/NewsSingle";
import Services from "./pages/Services";
import News from "./pages/News";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import PasswordProtected from "./pages/PasswordProtected";
import Footer from "./components/footers/Footer";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initial state selected -> shopSlice.js
  const { activeIndex, categories, currentPage } = useSelector(selectFilters);

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector(selectActiveNameMenu);

  useEffect(() => {
    const fetchData = async () => {
      // Check activeNameMenu
      if (activeNameMenu === "Shop") {
        let queryParams = "";

        if (categories !== "All") {
          queryParams += `tag=${categories}`;
        }

        if (activeIndex === "PriceLowToHigh") {
          queryParams += "&sortBy=price&order=asc";
        }

        if (activeIndex === "PriceHighToLow") {
          queryParams += "&sortBy=price&order=desc";
        }

        if (activeIndex === "NameAToZ") {
          queryParams += "&sortBy=name&order=asc";
        }

        if (activeIndex === "NameZToA") {
          queryParams += "&sortBy=name&order=desc";
        }

        dispatch(
          fetchProducts({ queryParams, categories, activeIndex, currentPage })
        );
      }

      // Get products -> localStorage
      const shoppingCart =
        JSON.parse(localStorage.getItem("shoppingCart")) || [];
      const reviewedProduct =
        JSON.parse(localStorage.getItem("singleProduct")) || [];
      const relatedProducts =
        JSON.parse(localStorage.getItem("relatedProducts")) || [];
      const reviewedNews = JSON.parse(localStorage.getItem("singleNews")) || [];
      const activeMenu =
        JSON.parse(localStorage.getItem("selectedPage")) || activeNameMenu;

      // Save products -> Shopping basket
      dispatch(setAddProduct(shoppingCart));

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
  }, [categories, activeIndex, activeNameMenu, dispatch, currentPage]);

  useEffect(() => {
    // Check if the active menu is "Shop"
    if (activeNameMenu === "Shop") {
      // Create the obj of str JSone links -> categories, currentPage, activeIndex
      const queryStr = qs.stringify({
        categories,
        page: currentPage,
        sort: activeIndex,
      });

      // Save filters -> localStorage
      localStorage.setItem("shopFilters", queryStr);

      // Update URL -> queryStr
      navigate(`?${queryStr}`);
    }
  }, [activeNameMenu, categories, activeIndex, currentPage, navigate]);

  useEffect(() => {
    // Get data URL -> localStorage
    const savedFilters = localStorage.getItem("shopFilters");

    if (savedFilters) {
      // Create the obj -> categories, currentPage, activeIndex
      const {
        categories: savedCategories,
        page: savedPage,
        sort: savedSort,
      } = qs.parse(savedFilters);

      // Save data -> localStorage -> Redux state
      dispatch(setTagCategories(savedCategories));
      dispatch(setCurrentPage(savedPage));
      dispatch(setActiveIndex(savedSort));
    }
  }, [dispatch]);

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
              // Tag categories
              categories={categories}
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
    </>
  );
}

export default App;
