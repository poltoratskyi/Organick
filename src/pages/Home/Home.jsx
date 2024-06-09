import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveName } from "../../redux/slices/menuSlice";
import {
  setRelatedProducts,
  setSingleProduct,
} from "../../redux/slices/singleProductSlice";

import Skeleton from "../../components/Skeleton/Skeleton";

import Banner from "../../components/home-pages/Banner/Banner";
import Card from "../../components/home-pages/Card/Card";
import About from "../../components/home-pages/About/About";
import Catalog from "../../components/home-pages/Catalog/Catalog";
import Testimonial from "../../components/home-pages/Testimonial/Testimonial";
import Offer from "../../components/home-pages/Offer/Offer";
import Story from "../../components/home-pages/Story/Story";
import Gallery from "../../components/home-pages/Gallery/Gallery";
import News from "../../components/home-pages/News/News";
import Newsletter from "../../components/footers/Newsletter/Newsletter";

import gallery from "../../data/gallery";
import posts from "../../data/posts";

import staticData from "../../data/products";

const Home = ({ isSkeletonLoading, showSingleNews }) => {
  const dispatch = useDispatch();

  // Show single product
  const showSingleProduct = (product) => {
    // Show the new product -> Previous products
    const newSingleProduct = [product];

    // Request -> localStorage
    localStorage.setItem("singleProduct", JSON.stringify(newSingleProduct));

    // Update -> Single product component
    dispatch(setSingleProduct(newSingleProduct));

    // Search the product ID
    if (relatedProducts.find((item) => item.parent_id === product.parent_id)) {
      // if the product ID has been found
      return;
    } else {
      // Add related products -> Previous products
      const newRelatedSingleProduct = [product, ...relatedProducts];

      // Request -> localStorage
      localStorage.setItem(
        "relatedProducts",
        JSON.stringify(newRelatedSingleProduct)
      );

      // Update state
      dispatch(setRelatedProducts(newRelatedSingleProduct));
    }
  };

  const handleClickPage = (name) => {
    dispatch(setActiveName(name));
    window.scrollTo(0, 0);

    // Request -> localStorage
    localStorage.setItem("selectedPage", JSON.stringify(name));
  };

  // Initial state selected -> singleProductSlice.js
  const relatedProducts = useSelector(
    (state) => state.singleProduct.relatedProducts
  );

  return (
    <>
      <Banner handleClickPage={handleClickPage} />

      <Card />

      <About handleClickPage={handleClickPage} />

      <section className="product">
        <div className="container">
          <div className="product__content">
            <div className="product__content-title">
              <span className="product__content-title-subheading">Organic</span>

              <h2 className="product__content-title-heading">Our Products</h2>
            </div>

            <ul className="product-items product-items_list">
              {/*  Using the catalog of product <- Context */}

              {isSkeletonLoading
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : staticData
                    .filter((product) => product.parent_id <= 8)
                    .map((product) => (
                      <li
                        className="product-items__item product-items__item_list"
                        key={product.parent_id}
                      >
                        <Catalog
                          {...product}
                          // Data tranfer -> Single product component
                          showSingleProduct={() => showSingleProduct(product)}
                        />
                      </li>
                    ))}
            </ul>

            <button
              onClick={() => {
                handleClickPage("Shop");
                window.scrollTo(0, 0);
              }}
              className="button button_product"
            >
              <Link id="link" to="/Shop">
                Show More
                <svg
                  id="arrow"
                  width="22"
                  height="22"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <circle cx="9.2" cy="9.2" r="9.2" fill="#335B6B" />
                  <path
                    d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="offer">
        <div className="container">
          <div className="offer__content">
            <div className="offer__content-header">
              <div className="offer__content-header-title">
                <span className="offer__content-header-title-subheading">
                  Special Offe
                </span>

                <h2 className="offer__content-header-title-heading">
                  We Offer Organic Options for You
                </h2>
              </div>

              <button
                onClick={() => {
                  handleClickPage("Shop");
                  window.scrollTo(0, 0);
                }}
                className="button button_offer"
              >
                <Link id="link" to="/Shop">
                  Show More
                  <svg
                    id="arrow"
                    width="22"
                    height="22"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <circle cx="9.2" cy="9.2" r="9.2" fill="#335B6B" />
                    <path
                      d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </button>
            </div>

            <ul className="product-items">
              {/*  Using the catalog of product <- Context */}

              {isSkeletonLoading
                ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                : staticData
                    .filter(
                      // Product catalog ID 9 -> ID 12
                      (product) =>
                        product.parent_id >= 9 && product.parent_id <= 12
                    )
                    .map((product) => (
                      <li
                        className="product-items__item"
                        key={product.parent_id}
                      >
                        {/* Getting all object properties <- Spread operator <- Context */}
                        <Offer
                          {...product}
                          // Data tranfer -> Single product component
                          showSingleProduct={() => showSingleProduct(product)}
                        />
                      </li>
                    ))}
            </ul>
          </div>
        </div>
      </section>

      <Story />

      <section className="gallery">
        <div className="container">
          <div className="gallery__content">
            <ul className="gallery__content-items">
              {gallery.map((item) => (
                // Getting all object properties <- Spread operator
                <Gallery
                  handleClickPage={handleClickPage}
                  key={item.id}
                  {...item}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="container">
          <div className="news__content">
            <div className="news__content-header">
              <div className="news__content-header-title">
                <span className="news__content-header-title-subheading">
                  Latest News
                </span>
                <h2 className="news__content-header-title-heading">
                  Discover Weekly Content About Organic Food and More
                </h2>
              </div>

              <button
                onClick={() => {
                  handleClickPage("News");
                  window.scrollTo(0, 0);
                }}
                className="button button_news"
              >
                <Link id="link" to="/News">
                  More News
                  <svg
                    id="arrow"
                    width="22"
                    height="22"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <circle cx="9.2" cy="9.2" r="9.2" fill="#335B6B" />
                    <path
                      d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </button>
            </div>

            <ul className="news__content-posts">
              {posts
                // Posts ID 1 -> ID 2
                .filter((item) => item.id <= 2)
                //  Getting all object properties <- Spread operator
                .map((post) => (
                  <News
                    key={post.id}
                    {...post} // Data tranfer -> Single news component
                    showSingleNews={() => showSingleNews(post)}
                  />
                ))}
            </ul>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};
export default Home;
