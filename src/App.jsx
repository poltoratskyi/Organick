import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { setAddProduct } from "./redux/slices/cartSlice";
import { selectActiveNameMenu } from "./redux/slices/menuSlice";
import { fetchPosts } from "./redux/slices/postsSlice";
import { fetchProducts } from "./redux/slices/catalogueSlice";
import { setViewedProducts } from "./redux/slices/singleProductSlice";
import {
  setTagCategories,
  setActiveIndex,
  setCurrentPage,
  selectFilters,
  fetchShopProducts,
} from "./redux/slices/shopSlice";

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

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initial state selected -> shopSlice.js
  const { activeIndex, categories, currentPage } = useSelector(selectFilters);

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector(selectActiveNameMenu);

  // Fetch products -> Home page
  useEffect(() => {
    const fetchHomeData = async () => {
      // Check activeNameMenu
      if (activeNameMenu === "Home") {
        dispatch(fetchProducts());
      }
    };

    fetchHomeData();
  }, [activeNameMenu]);

  // Fetch products -> Shop page
  useEffect(() => {
    const fetchShopData = async () => {
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
          fetchShopProducts({
            queryParams,
            currentPage,
          })
        );
      }
    };

    // Get products -> localStorage
    const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const viewedProducts =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];

    // Save products -> Shopping basket
    dispatch(setAddProduct(shoppingCart));

    // Save related products
    dispatch(setViewedProducts(viewedProducts));

    fetchShopData();
  }, [categories, activeIndex, activeNameMenu, currentPage]);

  // Fetch posts -> News page
  useEffect(() => {
    const fetchPostsData = async () => {
      // Check activeNameMenu
      if (activeNameMenu === "News" || activeNameMenu === "Home") {
        dispatch(fetchPosts());
      }
    };

    fetchPostsData();
  }, [activeNameMenu]);

  useEffect(() => {
    // Check if the active menu is "Shop"
    if (activeNameMenu !== "Shop") {
      // Update URL
      navigate();
    } else {
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
  }, [activeNameMenu, categories, activeIndex, currentPage]);

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
