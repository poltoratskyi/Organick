import { Suspense, lazy, useEffect } from "react";
import qs from "qs";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAddProduct } from "./redux/slices/cartSlice";
import { setViewedProducts } from "./redux/slices/singleProductSlice";
import { setSinglePortfolio } from "./redux/slices/singlePortfolioSlice";

import Home from "./pages/Home";
import Navigation from "./components/headers/Navigation";
import Footer from "./components/footers/Footer";
import MainLoader from "./components/MainLoader";

import "./GlobalStyles.scss";
import {
  setActiveIndex,
  setCurrentPage,
  setTagCategories,
} from "./redux/slices/shopSlice";

const AboutUs = lazy(
  () => import(/* webpackChunkName: "AboutUs"*/ "./pages/AboutUs")
);
const Team = lazy(() => import(/* webpackChunkName: "Team"*/ "./pages/Team"));
const Services = lazy(
  () => import(/* webpackChunkName: "Services"*/ "./pages/Services")
);
const QualityStandard = lazy(
  () =>
    import(/* webpackChunkName: "QualityStandard"*/ "./pages/QualityStandard")
);
const Portfolio = lazy(
  () => import(/* webpackChunkName: "Portfolio"*/ "./pages/Portfolio")
);
const PortfolioSingle = lazy(
  () =>
    import(/* webpackChunkName: "PortfolioSingle"*/ "./pages/PortfolioSingle")
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

const App = () => {
  const dispatch = useDispatch();

  // Get products -> localStorage
  useEffect(() => {
    const shoppingCartJson = localStorage.getItem("shoppingCart");
    const shoppingCart = shoppingCartJson ? JSON.parse(shoppingCartJson) : [];

    const viewedPortfolioJson = localStorage.getItem("viewedPortfolio");
    const viewedPortfolio = viewedPortfolioJson
      ? JSON.parse(viewedPortfolioJson)
      : [];

    const savedFilters = localStorage.getItem("shopFilters");

    const viewedProductsJson = localStorage.getItem("viewedProducts");
    const viewedProducts = viewedProductsJson
      ? JSON.parse(viewedProductsJson)
      : [];

    if (savedFilters) {
      // Create the obj -> categories, currentPage, activeIndex
      const { categories, page, sort } = qs.parse(savedFilters);

      const savedCategories = categories as string;
      const savedSort = sort as string;
      const savedPage = Number(page);

      // Save data -> localStorage -> Redux state
      dispatch(setTagCategories(savedCategories));
      dispatch(setActiveIndex(savedSort));
      dispatch(setCurrentPage(savedPage));
    }
    // Save products -> Shopping basket
    dispatch(setAddProduct(shoppingCart));

    // Save related products
    dispatch(setViewedProducts(viewedProducts));

    // Save related portfolio
    dispatch(setSinglePortfolio(viewedPortfolio));
  }, [dispatch]);

  return (
    <>
      {/* Navigation menu */}
      <Navigation />
      <Suspense fallback={<MainLoader />}>
        <Routes>
          {/* Default home page */}
          <Route path="/" element={<Home />} />

          {/* Other pages */}
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/team" element={<Team />} />

          {/* Services route -> QualityStandard */}
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/:qualityStandard"
            element={<QualityStandard />}
          />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/:portfolioTitle/:portfolioId"
            element={<PortfolioSingle />}
          />

          {/* Shop route -> ProductSingle */}
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:productName/:productId"
            element={<ProductSingle />}
          />

          {/* News route -> NewsSingle */}
          <Route path="/news" element={<News />} />
          <Route path="/blog/:blogTitle/:postId" element={<NewsSingle />} />
          <Route path="/posts/:year/:surname" element={<AuthorPosts />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/password-protected" element={<PasswordProtected />} />
          {/* 404 errors */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
