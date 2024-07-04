import React from "react";
import { Link } from "react-router-dom";

import useShowSingleNews from "../../hooks/useShowSingleNews";

import Banner from "../../components/home-pages/Banner";
import SailsCart from "../../components/home-pages/SailsCart";
import About from "../../components/home-pages/About";
import Catalog from "../../components/home-pages/Catalog";
import Testimonial from "../../components/home-pages/Testimonial";
import Offer from "../../components/home-pages/Offer";
import Story from "../../components/home-pages/Story";
import Gallery from "../../components/home-pages/Gallery";
import News from "../../components/home-pages/News";
import Newsletter from "../../components/footers/Newsletter";

import posts from "../../data/posts";

const Home = () => {
  const showSingleNews = useShowSingleNews();

  return (
    <>
      <Banner />

      <SailsCart />

      <About />

      <Catalog />

      <Testimonial />

      <Offer />

      <Story />

      <Gallery />

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

                .map((post) => (
                  <News
                    key={post.id}
                    {...post}
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
