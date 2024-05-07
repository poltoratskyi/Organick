import React from "react";
import Newsletter from "../../components/footers/Newsletter/Newsletter";
import News from "../../components/home/News/News";
import posts from "../../data/posts";

const NewsPage = () => {
  return (
    <>
      <div className="page-banner page-banner_news">
        <h1 className="page-banner__text">Recent News</h1>
      </div>

      <div className="container">
        <div className="news__content">
          <ul className="news__content-posts">
            {posts.map((post) => (
              <News key={post.id} {...post} />
            ))}
          </ul>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default NewsPage;
