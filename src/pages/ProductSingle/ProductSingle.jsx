import React, { useContext } from "react";

import Context from "../../context/Context";

import ProductSingleList from "../../components/ProductSingleList/ProductSingleList";
import Newsletter from "../../components/footers/Newsletter/Newsletter";

const ProductSingle = () => {
  const { singleProduct } = useContext(Context);

  return (
    <>
      <section className="product-single">
        <div className="container">
          <ul className="product-single__content">
            {/*  Using the catalog of product <- Context */}
            {singleProduct.map((product) => (
              <li
                className="product-single__content-info"
                key={product.parent_id}
              >
                <ProductSingleList {...product} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default ProductSingle;
