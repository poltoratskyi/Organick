import React, { useState, useContext, useEffect } from "react";

import "./Style.scss";

import Context from "../../context/Context";

import AdditionalProducts from "../../components/headers/AdditionalProducts/AdditionalProducts";

const ProductSingleList = ({
  parent_id,
  img,
  name,
  tag,
  price,
  salePrice,
  description,
  descriptionMore,
  isNew,
}) => {
  const {
    addProductShoppingBasket,
    removeProductShoppingBasket,
    isAdded,
    catalogue,
    card,
    showSingleProduct,
  } = useContext(Context);

  const handleAddToCart = () => {
    // Props transfer
    addProductShoppingBasket({
      parent_id,
      tag,
      img,
      name,
      description,
      descriptionMore,
      price,
      salePrice,
      isNew,
      percentage,
    });
  };

  // Default value -> discount
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  return (
    <>
      <div className="product-single__content-item-info">
        <img
          className="product-single__content-item-info-img"
          src={img}
          alt={name}
        />

        <div className="product-single__content-item-info-title">
          <h2 className="product-single__content-item-info-title-heading">
            {name}
          </h2>

          {/* is salePrice === true */}
          {salePrice ? (
            <>
              <span className="product-single__content-item-info-title-original">
                ${price} USD
              </span>
              <span className="product-single__content-item-info-title-sail">
                ${salePrice} USD
              </span>
              {/* is salePrice === false */}
            </>
          ) : (
            <span className="product-single__content-item-info-title-single-price">
              ${price} USD
            </span>
          )}

          <p className="product-single__content-item-info-title-description">
            {descriptionMore}
          </p>

          <button
            onClick={() => {
              isAdded(parent_id)
                ? removeProductShoppingBasket(parent_id)
                : handleAddToCart();
            }}
            className="button button_order"
          >
            {isAdded(parent_id) ? (
              <span id="del">
                Delete From Cart
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
              </span>
            ) : (
              <span id="link">
                Add To Cart
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
              </span>
            )}
          </button>
        </div>
      </div>

      <h2 className="customers customers_single">
        Customers also bought these products
      </h2>

      <ul className="product-items product-items_single">
        {/*  Using the catalog of product <- Context */}
        {catalogue
          .filter(
            // Product catalog ID 7 -> ID 10
            (product) => product.parent_id >= 6 && product.parent_id <= 9
          )
          .map((product) => (
            <li className="product-items__item" key={product.parent_id}>
              {/* Getting all object properties <- Spread operator <- Context */}

              <AdditionalProducts
                {...product}
                // Data tranfer -> Single product component
                showSingleProduct={() => showSingleProduct(product)}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductSingleList;
