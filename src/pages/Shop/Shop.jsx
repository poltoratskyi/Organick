import React, { useContext } from "react";

import Context from "../../context/Context";

import Newsletter from "../../components/footers/Newsletter/Newsletter";
import Catalog from "../../components/home-pages/Catalog/Catalog";
import Skeleton from "../../components/Skeleton/Skeleton";

const Shop = () => {
  // Getting data <- Context
  const { catalogue, showSingleProduct, isSkeletonLoading } =
    useContext(Context);

  return (
    <>
      <div className="page-banner page-banner_shop">
        <h1 className="page-banner__text">Shop</h1>
      </div>

      <section className="product product_shop">
        <div className="container">
          <ul className="product-items">
            {/*  Using the catalog of product <- Context */}

            {isSkeletonLoading
              ? [...new Array(16)].map((_, index) => <Skeleton key={index} />)
              : catalogue.map((product) => (
                  <li
                    className="product-items__item product-items__item_shop"
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
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Shop;
