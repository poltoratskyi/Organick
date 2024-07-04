import React from "react";
import { Link } from "react-router-dom";

import "./Style.scss";

import staticPosts from "../../../data/posts";

import PostItems from "../../PostItems";

const News = () => {
  return (
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
            {staticPosts
              // Posts ID 1 -> ID 2
              .filter((item) => item.parent_id <= 2)

              .map((post) => (
                <PostItems key={post.parent_id} {...post} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default News;
