import React from "react";
import { useSelector } from "react-redux";

import ProductSingleList from "../../components/ProductSingleList";
import Newsletter from "../../components/footers/Newsletter";

const ProductSingle = () => {
  // Initial state selected -> singleProductSlice.js
  const singleProduct = useSelector(
    (state) => state.singleProduct.singleProduct
  );

  return (
    <>
      <section className="product-single">
        <div className="container">
          <ul className="product-single__content">
            {/*  Using the catalog of product <- Context */}
            {singleProduct.map((product) => (
              <li
                className="product-single__content-item"
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
