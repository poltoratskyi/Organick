import React, { useContext } from "react";

import "./Style.scss";

import Context from "../../context/Context";

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
  percentage,
}) => {
  const handleAddToCart = () => {
    // Props transfer
    addProductShoppingBasket({
      parent_id,
      tag,
      img,
      name,
      description,
      price,
      salePrice,
      isNew,
      percentage,
    });
  };

  const { addProductShoppingBasket, removeProductShoppingBasket, isAdded } =
    useContext(Context);

  return (
    <>
      <img className="product-single__content-info-img" src={img} alt={name} />

      <div className="product-single__content-info-title">
        <h2 className="product-single__content-info-title-heading">{name}</h2>

        {/* is salePrice === true */}
        {salePrice ? (
          <>
            <span className="product-single__content-info-title-original">
              ${price} USD
            </span>
            <span className="product-single__content-info-title-sail">
              ${salePrice} USD
            </span>
            {/* is salePrice === false */}
          </>
        ) : (
          <span className="product-single__content-info-title-single-price">
            ${price} USD
          </span>
        )}

        <p className="product-single__content-info-title-description">
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
            <span id="link">
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
    </>
  );
};

export default ProductSingleList;
