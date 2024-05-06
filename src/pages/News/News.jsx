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

      <section className="news">
        <div className="container">
          <ul className="news__posts">
            {posts.map((post) => (
              <News key={post.id} {...post} />
            ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default NewsPage;
