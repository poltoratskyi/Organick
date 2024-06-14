import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToggleShoppingCart } from "../../../redux/slices/cartSlice";
import {
  setRelatedProducts,
  setSingleProduct,
} from "../../../redux/slices/singleProductSlice";

import "./Style.scss";

import ProductList from "../ProductList";
import AdditionalProducts from "../AdditionalProducts";

import staticData from "../../../data/products";

const ShoppingCart = ({ cartRef }) => {
  const dispatch = useDispatch();

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const toggleShoppingCart = useSelector(
    (state) => state.cart.toggleShoppingCart
  );

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

  // The total amount
  const totalPrice = (shoppingCart) => {
    return shoppingCart.reduce((acc, item) => {
      const price = item.salePrice || item.price;
      return acc + price;
    }, 0);
  };

  // In shopping basket no products
  const isBasketEmpty = shoppingCart && shoppingCart.length === 0;

  // Close / enable scroll -> shopping basket
  useEffect(() => {
    if (isBasketEmpty) {
      dispatch(setToggleShoppingCart(false));
      document.documentElement.style.overflow = "auto";
    }
  }, [dispatch, isBasketEmpty, toggleShoppingCart]);

  return (
    <section
      ref={cartRef}
      className={`shopping-basket ${
        toggleShoppingCart ? "shopping-basket_visible" : ""
      }`}
    >
      <div className="shopping-basket__header">
        <h4 className="shopping-basket__header-title">Your Cart</h4>

        <span
          onClick={() => {
            dispatch(setToggleShoppingCart(!toggleShoppingCart));
            document.documentElement.style.overflow = "auto";
          }}
          className="shopping-basket__header-close"
        >
          &#x2716;
        </span>
      </div>
      <div className="layout">
        <ul className="product-list">
          {shoppingCart.map((product) => (
            <li key={product.parent_id} className="product-list__item">
              <ProductList
                {...product}
                // Data tranfer -> Single product component
                showSingleProduct={() => showSingleProduct(product)}
              />
            </li>
          ))}
        </ul>

        <div className="checkout">
          <div className="checkout__total-price">
            <span className="checkout__total-price-label">
              Estimated total:
            </span>

            <span className="checkout__total-price-value">
              ${totalPrice(shoppingCart).toFixed(2)} USD
            </span>
          </div>

          <button className="button button_checkout">
            <span id="link">
              Checkout
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
          </button>
        </div>
      </div>

      <>
        <h2 className=" customers customers_basket">
          Recommended With Your Order
        </h2>
        <ul className="product-items product-items_basket">
          {staticData
            // Product ID 1 -> ID 3
            .filter((product) => product.parent_id <= 3)
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
    </section>
  );
};

export default ShoppingCart;
