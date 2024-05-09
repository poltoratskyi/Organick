import React, { useContext } from "react";

import Context from "../../context/Context";

import Newsletter from "../../components/footers/Newsletter/Newsletter";
import Products from "../../components/home/Catalog/Products";

const Shop = () => {
  const { catalogue /* handleAddToCart */ } = useContext(Context);

  return (
    <>
      <div className="page-banner page-banner_shop">
        <h1 className="page-banner__text">Shop</h1>
      </div>

      <section className="product product_shop">
        <div className="container">
          <ul className="product-items">
            {/*  Using the catalog of product <- Context */}
            {catalogue.map((product) => (
              <li
                className="product-items__item product-items__item_shop"
                key={product.parent_id}
              >
                <Products
                  {...product}
                  // Data tranfer -> Shopping cart
                  /*  handleAddToCart={() => handleAddToCart(product)} */
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
