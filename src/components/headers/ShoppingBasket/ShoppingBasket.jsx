import React, { useContext, useEffect } from "react";

import "./Style.scss";

import Context from "../../../context/Context";

import AdditionalProducts from "../AdditionalProducts/AdditionalProducts";

const SideBlock = () => {
  // Getting data <- Context
  const {
    catalogue,
    toggleShoppingBasket,
    shoppingBasket,
    removeProductShoppingBasket,
    showSingleProduct,
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
      toggleShoppingBasket();
      enableScroll();
    }
  }, [enableScroll, isBasketEmpty, toggleShoppingBasket]);

  return (
    <section className="shopping-basket">
      <div className="shopping-basket__header">
        <h4 className="shopping-basket__header-title">Your Cart</h4>

        <span
          onClick={() => {
            toggleShoppingBasket();
            enableScroll();
          }}
          className="shopping-basket__header-close"
        >
          &#x2716;
        </span>
      </div>

      <div className="layout">
        <ul className="product-list">
          {shoppingBasket.map((item) => (
            <li key={item.parent_id} className="product-list__item">
              <img
                className="product-list__item-img"
                src={item.img}
                alt={item.name}
              />

              <div className="product-list__item-exposition">
                <span className="product-list__item-exposition-name">
                  {item.name}
                </span>

                <p className="product-list__item-exposition-description">
                  {item.description}
                </p>

                <div className="product-list__item-exposition-mark">
                  {item.isNew && (
                    <span className="product-list__item-exposition-mark-new">
                      NEW
                    </span>
                  )}

                  <span className="product-list__item-exposition-mark-tag">
                    {item.tag}
                  </span>

                  {item.salePrice && (
                    <span className="product-list__item-exposition-mark-percentage">
                      -{item.percentage}%
                    </span>
                  )}
                </div>
              </div>

              <div className="product-list__item-action">
                <div className="product-list__item-action-value">
                  {item.salePrice ? (
                    <>
                      <span className="product-list__item-action-value-original">
                        ${item.price} USD
                      </span>

                      <span className="product-list__item-action-value-sail">
                        ${item.salePrice} USD
                      </span>
                    </>
                  ) : (
                    <span className="product-list__item-action-value-single-price">
                      ${item.price} USD
                    </span>
                  )}
                </div>
              </div>

              <span
                onClick={() => removeProductShoppingBasket(item.parent_id)}
                style={{ cursor: "pointer" }}
              >
                <svg
                  fill="#274C5B"
                  width="24"
                  height="24"
                  viewBox="-21 0 384 384"
                >
                  <path d="m117.332031 21.332031h106.667969c5.890625 0 10.667969-4.773437 10.667969-10.664062s-4.777344-10.667969-10.667969-10.667969h-106.667969c-5.890625 0-10.664062 4.777344-10.664062 10.667969s4.773437 10.664062 10.664062 10.664062zm0 0"></path>
                  <path d="m138.667969 298.667969c5.890625 0 10.664062-4.777344 10.664062-10.667969v-128c0-5.890625-4.773437-10.667969-10.664062-10.667969s-10.667969 4.777344-10.667969 10.667969v128c0 5.890625 4.777344 10.667969 10.667969 10.667969zm0 0"></path>
                  <path d="m330.667969 64h-320c-5.890625 0-10.667969 4.777344-10.667969 10.667969s4.777344 10.664062 10.667969 10.664062h32v288c0 5.890625 4.773437 10.667969 10.664062 10.667969h234.667969c5.890625 0 10.667969-4.777344 10.667969-10.667969v-288h32c5.890625 0 10.664062-4.773437 10.664062-10.664062s-4.773437-10.667969-10.664062-10.667969zm-53.335938 298.667969h-213.332031v-277.335938h213.332031zm0 0"></path>
                  <path d="m202.667969 298.667969c5.890625 0 10.664062-4.777344 10.664062-10.667969v-128c0-5.890625-4.773437-10.667969-10.664062-10.667969s-10.667969 4.777344-10.667969 10.667969v128c0 5.890625 4.777344 10.667969 10.667969 10.667969zm0 0"></path>
                </svg>
              </span>
            </li>
          ))}
        </ul>

        <div className="checkout">
          <div className="checkout__total-price">
            <span className="checkout__total-price-label">
              Estimated total:
            </span>

            <span className="checkout__total-price-value">
              ${totalPrice(shoppingBasket).toFixed(2)}
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

      <h2 className="shopping-basket__title">
        Customers also bought these products
      </h2>

      <ul className="product-items product-items_basket">
        {/*  Using the catalog of product <- Context */}
        {catalogue
          .filter(
            // Product catalog ID 13 -> ID 16
            (product) => product.parent_id >= 13 && product.parent_id <= 16
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
    </section>
  );
};

export default SideBlock;
