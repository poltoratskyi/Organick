import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPosts } from "../../../redux/slices/postsSlice";
import { PostItem } from "../../PostItems";

import "./Style.scss";

import PostItems from "../../PostItems";

const News: React.FC = () => {
  // Initial state selected -> singlePostSlice.js
  const posts = useSelector(selectPosts);

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
              <Link id="link" to="/news">
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
              .slice(0, 2)

              .map((post: PostItem) => (
                <PostItems key={post.parent_id} {...post} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default News;
