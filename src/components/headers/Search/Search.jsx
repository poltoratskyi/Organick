import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import "./Style.scss";

import Context from "../../../context/Context";

const Search = ({
  parent_id,
  tag,
  img,
  name,
  description,
  descriptionMore,
  price,
  salePrice,
  isNew,
}) => {
  // Getting data <- Context
  const {
    addProductShoppingBasket,
    removeProductShoppingBasket,
    isAdded,
    showSingleProduct,
    setSearchProduct,
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

  const getSingleProduct = () => {
    // Props transfer
    showSingleProduct({
      parent_id,
      description,
      tag,
      descriptionMore,
      img,
      name,
      price,
      salePrice,
    });
  };

  const handleClick = () => {
    getSingleProduct();
    setSearchProduct("");
  };

  // Default value -> discount
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  return (
    <div className="search-items__item-product">
      <div className="search-items__item-product-cover">
        <img
          className="search-items__item-product-cover-img"
          src={img}
          alt={`Product ${name}`}
        />

        <div className="search-items__item-product-cover-exposition">
          <Link onClick={handleClick} to="/ProductSingle">
            <span className="search-items__item-product-cover-exposition-name">
              {name}
            </span>
          </Link>

          <div className="search-items__item-product-cover-exposition-mark">
            {/* is isNew === true */}
            {isNew && (
              <span className="search-items__item-product-cover-exposition-mark-new">
                NEW
              </span>
            )}

            <span className="search-items__item-product-cover-exposition-mark-tag">
              {tag}
            </span>
          </div>
        </div>
      </div>

      <div className="search-items__item-product-action">
        <div className="search-items__item-product-action-value">
          {/* is salePrice === true */}
          {salePrice ? (
            <>
              <span className="search-items__item-product-action-value-original">
                ${price} USD
              </span>

              <span className="search-items__item-product-action-value-percentage">
                -{percentage}%
              </span>

              <span className="search-items__item-product-action-value-sail">
                ${salePrice} USD
              </span>

              {/* is salePrice === false */}
            </>
          ) : (
            <span className="search-items__item-product-action-value-single-price">
              ${price} USD
            </span>
          )}
        </div>

        <button
          onClick={() => {
            // isAdded === true
            isAdded(parent_id)
              ? removeProductShoppingBasket(parent_id)
              : // isAdded === false
                handleAddToCart();
          }}
          className="search-items__item-product-action-btn"
        >
          {isAdded(parent_id) ? "−" : "+"}
        </button>
      </div>
    </div>
  );
};

export default Search;
