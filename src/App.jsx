import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./GlobalStyles.scss";

import Context from "./context/Context";

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
  ////////// Connect hook -> useContext //////////
  const AppContext = useContext(Context);

  ////////// Connect hook -> useState //////////
  // Catalogue Products
  const [catalogue, setCatalogue] = useState([]);
  // Shopping cart
  const [shoppingBasket, setShoppingBasket] = useState([]);
  // Single product
  const [singleProduct, setSingleProduct] = useState([]);
  // Single news
  const [singleNews, setSingleNews] = useState([]);
  // Open <-> Close shopping cart
  const [shoppingBasketOpen, setShoppingBasketOpen] = useState(false);
  // Clear <-> Full shopping cart
  const [orderSent, setOrderSent] = useState(false);
  // Save product search <- Input
  const [searchProduct, setSearchProduct] = useState("");
  // Name active menu
  const [activeName, setActiveName] = useState("Home");
  // Skeleton content loader
  const [isSkeletonLoading, setSkeletonIsLoading] = useState(true);

  ////////// Connect hook -> useEffect //////////
  // Get products <- Backend (mockAPI)
  useEffect(() => {
    // Requests -> Backend (mockAPI) / localStorage
    const fetchData = async () => {
      // Geting the products <- localStorage
      const shoppingCart =
        JSON.parse(localStorage.getItem("shoppingBasket")) || [];

      // Single product <- Geting the product <- localStorage
      const reviewedProduct =
        JSON.parse(localStorage.getItem("singleProduct")) || [];

      // Single news <- Geting the news <- localStorage
      const reviewedNews = JSON.parse(localStorage.getItem("singleNews")) || [];

      // Active menu <- localStorage
      const activeMenu =
        JSON.parse(localStorage.getItem("activeMenu")) || activeName;

      /* In the future modify -> Wait for the request -> Success
      const shoppingCart = await axios.get(
        // Request -> Shopping cart
        "https://6548e310dd8ebcd4ab23cdec.mockapi.io/shoppingCart"
      ); */

      // await -> if getting shoppingCart (Success) -> get products

      // Wait for the request -> Success
      const products = await axios.get(
        // Request -> Products
        "https://6548e310dd8ebcd4ab23cdec.mockapi.io/Products"
      );

      // Save products -> Shopping basket
      setShoppingBasket(shoppingCart);

      // Save reviewed products -> Single product
      setSingleProduct(reviewedProduct);

      // Save reviewed news -> Single news
      setSingleNews(reviewedNews);

      // Save reviewed pages -> Active name
      setActiveName(activeMenu);

      // Save products -> Catalogue
      setCatalogue(products.data);

      // Skeleton off
      setSkeletonIsLoading(false);
    };

    fetchData();

    // Do one request
  }, []);

  /* In the future modify -> // Get shopping cart products <- Backend (mockAPI)
  useEffect(() => {
    // Requests -> Backend (mockAPI)
    const updateShoppingCart = async () => {
      if (shoppingBasketOpen) {
        // Block window scroll
        document.body.style.overflow = "hidden";

        // Wait for the request -> Success
        const cartResponse = await axios.get(
          // Request -> Shopping cart
          "https://6548e310dd8ebcd4ab23cdec.mockapi.io/shoppingCart"
        );

        // Sort products -> Save products -> Shopping basket
        setShoppingBasket(
          cartResponse.data.sort((a, b) => b.parent_id - a.parent_id)
        );
      } else {
        // Unblock window scroll
        document.body.style.overflow = "auto";
      }
    };

    updateShoppingCart();

    // Do requests <- Shopping cart open
  }, [shoppingBasketOpen]); */

  // Add the product -> Shopping cart -> Backend (mockAPI) / localStorage
  const addProductShoppingBasket = async (product) => {
    // Search the product ID
    if (shoppingBasket.find((item) => item.parent_id === product.parent_id)) {
      // if the product ID has been found
      return;
    } else {
      // Wait for the request -> Success
      /* await axios.post(
        // Request -> Shopping cart
        "https://6548e310dd8ebcd4ab23cdec.mockapi.io/shoppingCart",
        product
      ); */

      // Add the new product -> Previous products
      const newShoppingBasket = [product, ...shoppingBasket];

      // Save shopping basket
      setShoppingBasket(newShoppingBasket);

      // Request -> localStorage
      localStorage.setItem("shoppingBasket", JSON.stringify(newShoppingBasket));
    }
  };

  // Remove the product -> Shopping cart -> Backend (mockAPI) / localStorage
  const removeProductShoppingBasket = async (parent_id) => {
    // Search the product ID
    if (shoppingBasket.find((item) => item.parent_id === parent_id)) {
      // In the future modify -> Wait for the request -> Success
      /* await axios
        // Remove the product ID -> Backend (mockAPI)
        .delete(
          // Request -> Shopping cart
          `https://6548e310dd8ebcd4ab23cdec.mockapi.io/shoppingCart/${parent_id}`
        )

        // Remove the product -> React
        .then(() => { */

      // Search product ID -> Shopping basket
      const updatedItems = shoppingBasket.filter(
        (item) => item.parent_id !== parent_id
      );

      // Update -> Shopping basket
      setShoppingBasket(updatedItems);

      // Request -> localStorage
      localStorage.setItem("shoppingBasket", JSON.stringify(updatedItems));

      /* })
        // The message error
        .catch((error) => {
          alert(error);
        }); */
    }
  };

  // Enable scroll
  const enableScroll = () => {
    document.documentElement.style.overflow = "auto";
  };

  // Disable scroll
  const disableScroll = () => {
    document.documentElement.style.overflow = "hidden";
  };

  // Show single product
  const showSingleProduct = (product) => {
    // Show the new product -> Previous products
    const newSingleProduct = { ...product };

    // Request -> localStorage
    localStorage.setItem("singleProduct", JSON.stringify([newSingleProduct]));

    // Update -> Single product component
    setSingleProduct([newSingleProduct]);
  };

  // Find the clicked name item
  const handleMenuClickAndSave = (name) => {
    setActiveName(name);

    // Request -> localStorage
    localStorage.setItem("activeMenu", JSON.stringify(name));
  };

  // Show single news
  const showSingleNews = (news) => {
    // Show the new news -> Previous news
    const newSingleNews = { ...news };

    // Request -> localStorage
    localStorage.setItem("singleNews", JSON.stringify([newSingleNews]));

    // Update -> Single news component
    setSingleNews([newSingleNews]);
  };

  // Getting data <- Input
  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
  };

  // In the future modify -> Found the products
  const isAdded = (parent_id) => {
    return shoppingBasket.some((item) => item.parent_id === parent_id);
  };

  // In the future modify -> Send the products
  const pushItems = () => {
    if (shoppingBasket.length === 0 || orderSent) {
      return;
    } else {
      // Sent -> Update shopping basket
      setOrderSent(true);
      setShoppingBasket([]);
    }
  };

  // Update page -> Scroll to top
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      {/* Context transfer */}
      <Context.Provider
        value={{
          catalogue,
          searchProduct,
          shoppingBasket,
          singleProduct,
          shoppingBasketOpen,
          orderSent,
          activeName,
          singleNews,
          isSkeletonLoading,

          handleSearch,
          handleMenuClickAndSave,
          enableScroll,
          showSingleNews,
          disableScroll,
          setShoppingBasketOpen,
          showSingleProduct,
          setSearchProduct,
          addProductShoppingBasket,
          removeProductShoppingBasket,
          pushItems,
          isAdded,
        }}
      >
        {/* Page navigation */}
        <BrowserRouter>
          {/* Scroll to top */}
          <ScrollToTop />
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
            <Route path="/Shop/:productId" element={<ProductSingle />} />

            {/* News route for NewsSingle */}
            <Route path="/News" element={<News />} />
            <Route path="/News/:newsId" element={<NewsSingle />} />

            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/PasswordProtected" element={<PasswordProtected />} />

            {/* 404 errors */}
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
