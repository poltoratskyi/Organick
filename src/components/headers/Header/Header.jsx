import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Style.scss";

import Context from "../../../context/Context";

import ModalSearch from "../ModalSearch/ModalSearch";

const Header = () => {
  // Getting data <- Context
  const { toggleShoppingBasket, shoppingBasket } = useContext(Context);

  // Save product search <- Input
  const [searchProduct, setSearchProduct] = useState("");

  // Getting data <- Input
  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
  };

  // Getting the quantity of products <- Shopping cart
  const productQuantity = (shoppingBasket) => {
    return shoppingBasket.length;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-menu">
            <div className="header__content-menu-logo">
              <svg width="39" height="56" viewBox="0 0 39 56" fill="none">
                <path
                  d="M1.85071 42.0684H36.7313M5.79102 48.5L32.791 48.5M18.791 1.50002V15.5M18.8656 14.7842V41.2158L1 22.458M29.9253 4.55275L18.8656 15.637L8.65668 4.55275M34.179 8.81593L18.8656 24.1633L4.40295 8.81593M36.7313 15.6367L18.8656 32.6894L1.85071 14.7842M37.582 23.3106L18.8656 42.0685M37.5821 31.8369L27.3731 42.0685M1 31.8369L11.209 42.0685M19.291 54.8579C9.19018 54.8579 1 46.4056 1 35.9772V20.0228C1 9.5963 9.19018 1.14211 19.291 1.14211C29.3937 1.14211 37.5821 9.5963 37.5821 20.0228V35.9772C37.5839 46.4056 29.3937 54.8579 19.291 54.8579Z"
                  stroke="#7EB693"
                />
              </svg>

              <span className="header__content-menu-logo-label">Organic</span>
            </div>

            <nav className="header__content-menu-navigation">
              <ul className="header__content-menu-navigation-items">
                <li className="header__content-menu-navigation-items-item">
                  <Link
                    className="header__content-menu-navigation-items-item-link"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="header__content-menu-navigation-items-item">
                  <Link
                    className="header__content-menu-navigation-items-item-link"
                    to="/AboutUs"
                  >
                    About
                  </Link>
                </li>

                <li className="header__content-menu-navigation-items-item">
                  <Link
                    className="header__content-menu-navigation-items-item-link"
                    to="/Team"
                  >
                    Team
                  </Link>
                </li>

                <li className="header__content-menu-navigation-items-item">
                  <Link
                    className="header__content-menu-navigation-items-item-link"
                    to="/Services"
                  >
                    Services
                  </Link>
                </li>

                <li className="header__content-menu-navigation-items-item">
                  <Link
                    className="header__content-menu-navigation-items-item-link"
                    to="/Shop"
                  >
                    Shop
                  </Link>
                </li>

                <li className="header__content-menu-navigation-items-item">
                  <Link
                    className="header__content-menu-navigation-items-item-link"
                    to="/News"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__content-search">
            {/[a-zA-Z]/.test(searchProduct) && (
              // if input value === reg -> transfer input value -> Modal search component
              <ModalSearch searchProduct={searchProduct} />
            )}

            <input
              className="header__content-search-input"
              onChange={handleSearch}
              value={searchProduct}
              type="text"
              id="search"
              placeholder="Search..."
            ></input>

            <button
              style={{
                opacity: searchProduct.length ? 1 : 0,
                pointerEvents: searchProduct.length ? "auto" : "none",
                transition: "opacity 0.5s ease",
              }}
              className="header__content-search-clear-btn"
              onClick={() => setSearchProduct("")}
            >
              &#x2716;
            </button>

            <button
              className="header__content-search-btn"
              onClick={() => toggleShoppingBasket()}
            >
              <span
                className="header__content-search-btn-value"
                // if quantity of products > 0 -> visible else hidden
                style={{
                  opacity: shoppingBasket.length ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              >
                {productQuantity(shoppingBasket)}
              </span>

              <svg width="57" height="57" viewBox="0 0 57 56" fill="none">
                <circle cx="28.791" cy="28" r="28" fill="#274C5B" />
                <path
                  d="M25.5689 39.0001C26.2439 39.0001 26.7911 38.4529 26.7911 37.7779C26.7911 37.1029 26.2439 36.5557 25.5689 36.5557C24.8939 36.5557 24.3467 37.1029 24.3467 37.7779C24.3467 38.4529 24.8939 39.0001 25.5689 39.0001Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.1246 39.0001C34.7996 39.0001 35.3468 38.4529 35.3468 37.7779C35.3468 37.1029 34.7996 36.5557 34.1246 36.5557C33.4496 36.5557 32.9023 37.1029 32.9023 37.7779C32.9023 38.4529 33.4496 39.0001 34.1246 39.0001Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  v="round"
                />
                <path
                  d="M15.791 17H19.5729L22.4093 33.0731H37.5369"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.9022 29.1837L37.1494 29.2907C37.2587 29.2908 37.3647 29.2529 37.4493 29.1837C37.5339 29.1144 37.5918 29.0179 37.6133 28.9107L39.3151 20.4014C39.3289 20.3328 39.3272 20.262 39.3102 20.1941C39.2933 20.1262 39.2615 20.063 39.2171 20.0089C39.1727 19.9548 39.1169 19.9112 39.0536 19.8813C38.9903 19.8514 38.9212 19.8359 38.8513 19.8359L20.3584 19.8359"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
