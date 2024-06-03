import React, { useContext, useEffect } from "react";

import "./Style.scss";

import Context from "../../../context/Context";

import ProductList from "../ProductList/ProductList";
import AdditionalProducts from "../AdditionalProducts/AdditionalProducts";

import staticData from "../../../data/products";

const SideBlock = () => {
  // Getting data <- Context
  const {
    shoppingBasket,
    showSingleProduct,
    setShoppingBasketOpen,
    shoppingBasketOpen,
    enableScroll,
  } = useContext(Context);

  // The total amount
  const totalPrice = (shoppingBasket) => {
    return shoppingBasket.reduce((acc, item) => {
      const price = item.salePrice || item.price;
      return acc + price;
    }, 0);
  };

  // In shopping basket no products
  const isBasketEmpty = shoppingBasket && shoppingBasket.length === 0;

  // Close / enable scroll -> shopping basket
  useEffect(() => {
    if (isBasketEmpty) {
      setShoppingBasketOpen(false);
      enableScroll();
    }
  }, [enableScroll, isBasketEmpty, setShoppingBasketOpen, shoppingBasketOpen]);

  return (
    <section
      className={`shopping-basket ${
        shoppingBasketOpen ? "shopping-basket_visible" : ""
      }`}
    >
      <div className="shopping-basket__header">
        <h4 className="shopping-basket__header-title">Your Cart</h4>

        <span
          onClick={() => {
            setShoppingBasketOpen(!shoppingBasketOpen);
            enableScroll();
          }}
          className="shopping-basket__header-close"
        >
          &#x2716;
        </span>
      </div>
      <div className="layout">
        <ul className="product-list">
          {shoppingBasket.map((product) => (
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
              ${totalPrice(shoppingBasket).toFixed(2)} USD
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

export default SideBlock;
