import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setToggleShoppingCart,
  selectCart,
  selectToggleShoppingCart,
} from "../../../redux/slices/cartSlice";
import { useTotalPrice } from "../../../hooks/useProductActions";
import { Product } from "../SearchModal";

import "./Style.scss";

import ProductList from "../ProductList";
import ProductItems from "../../ProductItems";

import staticData from "../../../data/products";

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartRef = useRef<HTMLElement>(null);

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);
  const toggleShoppingCart = useSelector(selectToggleShoppingCart);

  // The total amount
  useTotalPrice(shoppingCart);

  // In shopping basket no products
  const isBasketEmpty = shoppingCart && shoppingCart.length === 0;

  // Close -> shopping cart
  useEffect(() => {
    if (isBasketEmpty) {
      dispatch(setToggleShoppingCart(false));
      document.documentElement.style.overflow = "auto";
    }
  }, [dispatch, isBasketEmpty, toggleShoppingCart]);

  useEffect(() => {
    if (toggleShoppingCart) {
      if (cartRef.current) {
        cartRef.current.scrollTo(0, 0);
      }
    }
  }, [dispatch, toggleShoppingCart]);

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
          {shoppingCart.map((product: Product) => (
            <li key={product.parent_id} className="product-list__item">
              <ProductList {...product} />
            </li>
          ))}
        </ul>

        <div className="checkout">
          <div className="checkout__total-price">
            <span className="checkout__total-price-label">
              Estimated total:
            </span>

            <span className="checkout__total-price-value">
              ${useTotalPrice(shoppingCart).toFixed(2)} USD
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
          {staticData.slice(13, 16).map((product) => (
            <li className="product-items__item" key={product.parent_id}>
              <ProductItems {...product} />
            </li>
          ))}
        </ul>
      </>
    </section>
  );
};

export default ShoppingCart;
