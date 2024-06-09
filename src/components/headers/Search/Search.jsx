import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  setVisibleInput,
  setSearchProduct,
} from "../../../redux/slices/inputSlice";
import {
  setRelatedProducts,
  setSingleProduct,
} from "../../../redux/slices/singleProductSlice";
import { setActiveName } from "../../../redux/slices/menuSlice";
import { setShoppingCart } from "../../../redux/slices/cartSlice";

import "./Style.scss";

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
  const dispatch = useDispatch();

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);

  // Initial state selected -> singleProductSlice.js
  const relatedProducts = useSelector(
    (state) => state.singleProduct.relatedProducts
  );

  // Show single product
  const showSingleProduct = (product) => {
    // Show the new product -> Previous products
    const newSingleProduct = [product];

    // Request -> localStorage
    localStorage.setItem("singleProduct", JSON.stringify(newSingleProduct));

    // Update -> Single product component
    dispatch(setSingleProduct(newSingleProduct));

    // Search the product ID
    if (relatedProducts.find((item) => item.parent_id === product.parent_id)) {
      // if the product ID has been found
      return;
    } else {
      // Add related products -> Previous products
      const newRelatedSingleProduct = [product, ...relatedProducts];

      // Request -> localStorage
      localStorage.setItem(
        "relatedProducts",
        JSON.stringify(newRelatedSingleProduct)
      );

      // Update state
      dispatch(setRelatedProducts(newRelatedSingleProduct));
    }
  };

  // Add the product -> Shopping cart -> Backend (mockAPI) / localStorage
  const addProductShoppingBasket = async (product) => {
    // Search the product ID
    if (shoppingCart.find((item) => item.parent_id === product.parent_id)) {
      // if the product ID has been found
      return;
    } else {
      // Add the new product -> Previous products
      const newShoppingBasket = [product, ...shoppingCart];

      // Save shopping basket
      dispatch(setShoppingCart(newShoppingBasket));

      // Request -> localStorage
      localStorage.setItem("shoppingCart", JSON.stringify(newShoppingBasket));
    }
  };

  // Remove the product -> Shopping cart -> Backend (mockAPI) / localStorage
  const removeProductShoppingBasket = async (parent_id) => {
    // Search the product ID
    if (shoppingCart.find((item) => item.parent_id === parent_id)) {
      // Search product ID -> Shopping basket
      const updatedItems = shoppingCart.filter(
        (item) => item.parent_id !== parent_id
      );

      // Update -> Shopping basket
      dispatch(setShoppingCart(updatedItems));

      // Request -> localStorage
      localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
    }
  };

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

  // Found the products
  const isAdded = (parent_id) => {
    return shoppingCart.some((item) => item.parent_id === parent_id);
  };

  const handleClickPage = (name) => {
    getSingleProduct();
    dispatch(setSearchProduct(""));
    dispatch(setVisibleInput(false));
    dispatch(setActiveName(name));
    window.scrollTo(0, 0);
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
    <div className="search-items__item-product">
      <div className="search-items__item-product-cover">
        <img
          className="search-items__item-product-cover-img"
          src={img}
          alt={`Product ${name}`}
        />

        <div className="search-items__item-product-cover-exposition">
          <Link onClick={() => handleClickPage("Shop")} to={`/Shop/${name}`}>
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
