import React, { useContext } from "react";

import Context from "../../context/Context";

import NewsSingleList from "../../components/NewsSingleList/NewsSingleList";
import Newsletter from "../../components/footers/Newsletter/Newsletter";

const NewsSingle = () => {
  // Getting data <- Context
  const { singleNews } = useContext(Context);

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
