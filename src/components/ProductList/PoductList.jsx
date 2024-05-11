import React from "react";
import "./Style.scss";

const ProductList = ({ tag, isNew, img, name, price, salePrice, discount }) => {
  return (
    <>
      <div className="product-items__item-info">
        <div className="product-items__item-info-header">
          {/* is isNew === true */}
          {isNew && (
            <span className="product-items__item-info-header-new">NEW</span>
          )}

          <span className="product-items__item-info-header-tag">{tag}</span>
        </div>

        {/* is salePrice === true */}
        {salePrice && (
          <span className="product-items__item-info-header-percentage">
            -{discount}%
          </span>
        )}
      </div>

      <img
        className="product-items__item-img"
        src={img}
        alt={`Product ${name}`}
      />

      <span className="product-items__item-name">{name}</span>

      <span className="product-items__item-line"></span>

      {/* is salePrice === true */}
      {salePrice ? (
        <>
          <span className="product-items__item-original">${price} USD</span>
          <span className="product-items__item-sail">${salePrice} USD</span>
          {/* is salePrice === false */}
        </>
      ) : (
        <span className="product-items__item-single-price">${price} USD</span>
      )}
    </>
  );
};

export default ProductList;
