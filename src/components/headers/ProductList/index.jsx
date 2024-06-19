import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToggleShoppingCart } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { setRemoveProduct } from "../../../redux/slices/cartSlice";
import { setActiveName } from "../../../redux/slices/menuSlice";

import "./Style.scss";

const ProductList = ({
  parent_id,
  img,
  name,
  tag,
  price,
  salePrice,
  description,
  descriptionMore,
  showSingleProduct,
  isNew,
}) => {
  const dispatch = useDispatch();

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);

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

  // Remove the product -> Shopping cart -> Backend (mockAPI) / localStorage
  const removeProduct = (parent_id) => {
    // To remove product
    dispatch(setRemoveProduct(parent_id));

    // Update localStorage
    const updatedItems = shoppingCart.filter(
      (item) => item.parent_id !== parent_id
    );

    localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
  };

  const handleClickPage = (name) => {
    getSingleProduct();
    dispatch(setActiveName(name));
    dispatch(setToggleShoppingCart(false));
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "auto";

    // Request -> localStorage
    localStorage.setItem("selectedPage", JSON.stringify(name));
  };

  // Default value -> discount
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  return (
    <>
      <img className="product-list__item-img" src={img} alt={name} />

      <div className="product-list__item-exposition">
        <Link onClick={() => handleClickPage("Shop")} to={`/Shop/${name}`}>
          <span className="product-list__item-exposition-name">{name}</span>
        </Link>

        <p className="product-list__item-exposition-description">
          {description}
        </p>

        <div className="product-list__item-exposition-mark">
          {isNew && (
            <span className="product-list__item-exposition-mark-new">NEW</span>
          )}

          <span className="product-list__item-exposition-mark-tag">{tag}</span>

          {salePrice && (
            <span className="product-list__item-exposition-mark-percentage">
              -{percentage}%
            </span>
          )}
        </div>
      </div>

      <div className="product-list__item-action">
        <div className="product-list__item-action-value">
          {salePrice ? (
            <>
              <span className="product-list__item-action-value-original">
                ${price} USD
              </span>

              <span className="product-list__item-action-value-sail">
                ${salePrice} USD
              </span>
            </>
          ) : (
            <span className="product-list__item-action-value-single-price">
              ${price} USD
            </span>
          )}
        </div>
      </div>

      <span
        onClick={() => removeProduct(parent_id)}
        style={{ cursor: "pointer" }}
      >
        <svg fill="#274C5B" width="24" height="24" viewBox="-21 0 384 384">
          <path d="m117.332031 21.332031h106.667969c5.890625 0 10.667969-4.773437 10.667969-10.664062s-4.777344-10.667969-10.667969-10.667969h-106.667969c-5.890625 0-10.664062 4.777344-10.664062 10.667969s4.773437 10.664062 10.664062 10.664062zm0 0"></path>
          <path d="m138.667969 298.667969c5.890625 0 10.664062-4.777344 10.664062-10.667969v-128c0-5.890625-4.773437-10.667969-10.664062-10.667969s-10.667969 4.777344-10.667969 10.667969v128c0 5.890625 4.777344 10.667969 10.667969 10.667969zm0 0"></path>
          <path d="m330.667969 64h-320c-5.890625 0-10.667969 4.777344-10.667969 10.667969s4.777344 10.664062 10.667969 10.664062h32v288c0 5.890625 4.773437 10.667969 10.664062 10.667969h234.667969c5.890625 0 10.667969-4.777344 10.667969-10.667969v-288h32c5.890625 0 10.664062-4.773437 10.664062-10.664062s-4.773437-10.667969-10.664062-10.667969zm-53.335938 298.667969h-213.332031v-277.335938h213.332031zm0 0"></path>
          <path d="m202.667969 298.667969c5.890625 0 10.664062-4.777344 10.664062-10.667969v-128c0-5.890625-4.773437-10.667969-10.664062-10.667969s-10.667969 4.777344-10.667969 10.667969v128c0 5.890625 4.777344 10.667969 10.667969 10.667969zm0 0"></path>
        </svg>
      </span>
    </>
  );
};

export default ProductList;
