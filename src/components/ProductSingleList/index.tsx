import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectRelatedProducts } from "../../redux/slices/singleProductSlice";
import { Product } from "../headers/SearchModal";

import {
  useDiscount,
  useAddProduct,
  useRemoveProduct,
  useIsAdded,
} from "../../hooks/useProductActions";

import "./Style.scss";

import ProductItems from "../ProductItems";

const ProductSingleList: React.FC<Product> = ({
  id,
  parent_id,
  img,
  name,
  tag,
  price,
  salePrice,
  description,
  descriptionMore,
  additionalInfo,
  isNew,
  isSalePrice,
  counter,
  modifiedPrice,
}) => {
  // Initial state selected -> singleProductSlice.js
  const viewedProducts = useSelector(selectRelatedProducts);

  // Product descr buttons
  const [additional, setAdditional] = useState("description");

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      parent_id,
      tag,
      img,
      name,
      description,
      descriptionMore,
      price,
      salePrice,
      isNew,
      isSalePrice,
      percentage,
      additionalInfo,
      counter,
      modifiedPrice,
    };

    addProduct(productToAdd);
  };

  // Product discount
  const percentage = useDiscount(price, salePrice);

  // Add the product -> Shopping cart (redux) / localStorage
  const { addProduct } = useAddProduct();

  // Remove the product -> Shopping cart (redux) / localStorage
  const { removeProduct } = useRemoveProduct();

  // Found the product -> -> Shopping cart (redux) / localStorage
  const { isAdded } = useIsAdded();

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
          {isSalePrice ? (
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
              isAdded(parent_id) ? removeProduct(parent_id) : handleAddToCart();
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

      <div className="additional">
        <div className="additional__content">
          <button
            onClick={() => setAdditional("description")}
            className={`button button_description ${
              additional === "description" ? "button_description-active" : ""
            }`}
          >
            Product Description
          </button>

          <button
            onClick={() => setAdditional("additional")}
            className={`button button_description ${
              additional === "additional" ? "button_description-active" : ""
            }`}
          >
            Additional Info
          </button>

          {additional === "description" ? (
            <p
              className={`additional__content-description ${
                additional === "description"
                  ? "additional__content-description_active"
                  : ""
              }`}
            >
              {description}
            </p>
          ) : (
            <p
              className={`additional__content-description ${
                additional === "additional"
                  ? "additional__content-description_active"
                  : ""
              }`}
            >
              {additionalInfo}
            </p>
          )}
        </div>
      </div>

      <>
        <h2 className="customers customers_single">Related Products</h2>
        <ul className="product-items product-items_basket">
          {viewedProducts
            // Filter the product(s) -> 0 - 4
            .slice(0, 4)
            .map((product: Product) => (
              <li className="product-items__item" key={product.parent_id}>
                <ProductItems {...product} />
              </li>
            ))}
        </ul>
      </>
    </>
  );
};

export default ProductSingleList;
