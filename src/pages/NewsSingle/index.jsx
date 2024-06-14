import React from "react";
import { useSelector } from "react-redux";

import NewsSingleList from "../../components/NewsSingleList";
import Newsletter from "../../components/footers/Newsletter";

const NewsSingle = () => {
  // Initial state selected -> singleNewsSlice.js
  const singleNews = useSelector((state) => state.singleNews.singleNews);

  return (
    <>
      <section className="news-single">
        {singleNews.map((product) => (
          <div key={product.id}>
            <NewsSingleList {...product} />
          </div>
        ))}
      </section>

      <Newsletter />
    </>
  );
};

export default NewsSingle;
