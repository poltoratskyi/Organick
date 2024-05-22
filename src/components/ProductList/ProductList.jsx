import React, { useContext } from "react";

import { Link } from "react-router-dom";

import "./Style.scss";

import Context from "../../context/Context";

const ProductList = ({
  descriptionMore,
  showSingleProduct,
  tag,
  isNew,
  img,
  name,
  price,
  salePrice,
  discount,
}) => {
  const { setShoppingBasketOpen, enableScroll } = useContext(Context);

  const getSingleProduct = () => {
    // Props transfer
    showSingleProduct({
      descriptionMore,
      img,
      name,
      price,
      salePrice,
    });
  };

  const handleClick = () => {
    getSingleProduct();
    setShoppingBasketOpen(false);
    enableScroll();
  };

  return (
    <>
      <div id="badge" className="product-items__item-badge">
        <div className="product-items__item-badge-info">
          <div className="product-items__item-badge-info-header">
            {/* is isNew === true */}
            {isNew && (
              <span className="product-items__item-badge-info-header-new">
                NEW
              </span>
            )}

            <span className="product-items__item-badge-info-header-tag">
              {tag}
            </span>
          </div>

          {/* is salePrice === true */}
          {salePrice && (
            <span className="product-items__item-badge-info-header-percentage">
              -{discount}%
            </span>
          )}
        </div>

        <img
          className="product-items__item-badge-img"
          src={img}
          alt={`Product ${name}`}
        />

        <span className="product-items__item-badge-name">{name}</span>

        <span className="product-items__item-badge-line"></span>

        {/* is salePrice === true */}
        {salePrice ? (
          <>
            <span className="product-items__item-badge-original">
              ${price} USD
            </span>
            <span className="product-items__item-badge-sail">
              ${salePrice} USD
            </span>
            {/* is salePrice === false */}
          </>
        ) : (
          <span className="product-items__item-badge-single-price">
            ${price} USD
          </span>
        )}
      </div>

      <button
        onClick={handleClick}
        id="shop-now"
        className="button button_shop-now"
      >
        <Link to="/ProductSingle" id="link">
          Shop Now
          <svg
            id="arrow"
            width="22"
            height="22"
            viewBox="0 0 19 19"
            fill="none"
          >
            <circle cx="9.2" cy="9.2" r="9.2" fill="#fff" />
            <path
              d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
              stroke="#274c5b"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </button>
    </>
  );
};

export default ProductList;
