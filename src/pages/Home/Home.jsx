import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../context/Context";

import Banner from "../../components/home/Banner/Banner";
import Card from "../../components/home/Card/Card";
import About from "../../components/home/About/About";
import Catalog from "../../components/home/Catalog/Catalog";
import Testimonial from "../../components/home/Testimonial/Testimonial";
import Offer from "../../components/home/Offer/Offer";
import Story from "../../components/home/Story/Story";
import Gallery from "../../components/home/Gallery/Gallery";
import News from "../../components/home/News/News";
import Newsletter from "../../components/footers/Newsletter/Newsletter";

import card from "../../data/card.js";
import gallery from "../../data/gallery";
import posts from "../../data/posts";

const Home = () => {
  // Getting data <- Context
  const { catalogue, showSingleProduct } = useContext(Context);

  return (
    <>
      <Banner />

      <div className="card">
        <div className="container">
          <div className="card__content">
            {card.map((item) => (
              //  Getting all object properties <- Spread operator
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <About />

      <section className="product">
        <div className="container">
          <div className="product__content">
            <div className="product__content-title">
              <span className="product__content-title-subheading">Organic</span>

              <h2 className="product__content-title-heading">Our Products</h2>
            </div>

            <ul className="product-items product-items_list">
              {/*  Using the catalog of product <- Context */}
              {catalogue
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

            <button className="button button_product">
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

              <button className="button button_offer">
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
              {catalogue
                .filter(
                  // Product catalog ID 9 -> ID 12
                  (product) => product.parent_id >= 9 && product.parent_id <= 12
                )
                .map((product) => (
                  <li className="product-items__item" key={product.parent_id}>
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
                <Gallery key={item.id} {...item} />
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

              <button className="button button_news">
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
                  <News key={post.id} {...post} />
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
