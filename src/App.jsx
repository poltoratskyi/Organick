import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import "./GlobalStyles.scss";

import { setAddProduct } from "./redux/slices/cartSlice";
import { setActiveName } from "./redux/slices/menuSlice";
import { setSingleNews } from "./redux/slices/singleNewsSlice";
import {
  setRelatedProducts,
  setSingleProduct,
} from "./redux/slices/singleProductSlice";
import { setCatalogue } from "./redux/slices/catalogueSlice";
import { setSkeletonIsLoading } from "./redux/slices/skeletonSlice";
import {
  setTagCategories,
  setActiveIndex,
  setCurrentPage,
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
  const { activeIndex, categories, currentPage } = useSelector(
    (state) => state.shop
  );

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector((state) => state.menu.activeNameMenu);

  // Initial state selected -> catalogueSlice.js
  const catalogue = useSelector((state) => state.catalogue.catalogue);

  // Initial state selected -> skeletonSlice.js
  const isSkeletonLoading = useSelector(
    (state) => state.skeleton.isSkeletonLoading
  );

  useEffect(() => {
    const fetchData = async () => {
      // Skeleton on
      dispatch(setSkeletonIsLoading(true));

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

      let queryParams = "";

      // Check activeNameMenu
      if (activeNameMenu === "Shop") {
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

        try {
          // Fetch products only if activeNameMenu is "Shop"
          const response = await axios.get(
            `https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products?page=${currentPage}&limit=6&${queryParams}`
          );
          // Save products -> Catalogue
          dispatch(setCatalogue(response.data));
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }

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
              // Skeleton content loader
              isSkeletonLoading={isSkeletonLoading}
              // Catalogue of products
              catalogue={catalogue}
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
