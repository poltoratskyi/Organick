import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setToggleShoppingCart,
  selectCart,
  selectToggleShoppingCart,
} from "../../../redux/slices/cartSlice";
import {
  setVisibleInput,
  setVisibleSearch,
} from "../../../redux/slices/inputSlice";

import { useResetFilters } from "../../../hooks/useProductActions";

import "./Style.scss";
import { Product } from "../SearchModal";

type MenuItem = {
  name: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Shop", link: "/shop" },
  { name: "Contact Us", link: "/contact-us" },
];

const subItems: MenuItem[] = [
  { name: "Our Team", link: "/team" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/news" },
];

const Header: React.FC = () => {
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const subMenuRef = useRef<HTMLParagraphElement>(null);

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);
  const toggleShoppingCart = useSelector(selectToggleShoppingCart);

  // Getting the quantity of products <- Shopping cart
  const productQuantity = (cartValue: Product[]): number => {
    return cartValue.length;
  };

  // Reset filters -> Shop
  const { resetFilters } = useResetFilters();

  // Close shopping cart -> Escape
  const handleEscape = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      dispatch(setToggleShoppingCart(!toggleShoppingCart));
    }
  };

  useEffect(() => {
    toggleShoppingCart
      ? document.addEventListener("keydown", handleEscape)
      : document.removeEventListener("keydown", handleEscape);

    // Clear event
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [toggleShoppingCart]);

  const actionInputSearch = (): void => {
    dispatch(setVisibleInput(true));
    dispatch(setVisibleSearch(true));
  };

  const actionShopCart = (): void => {
    document.documentElement.style.overflow = "hidden";
    dispatch(setVisibleInput(false));
    dispatch(setToggleShoppingCart(!toggleShoppingCart));
  };

  // Outside clicked subMenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setIsPagesMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPagesMenuOpen]);

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
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={`header__content-menu-navigation-items-item ${
                      location.pathname === item.link
                        ? "header__content-menu-navigation-items-item_active"
                        : ""
                    }`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      resetFilters();
                    }}
                  >
                    <Link
                      className="header__content-menu-navigation-items-item-link"
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <nav className="header__content-menu-navigation-items-submenu">
                  <p
                    onClick={() => {
                      setIsPagesMenuOpen(!isPagesMenuOpen);
                    }}
                    ref={subMenuRef}
                    className="header__content-menu-navigation-items-submenu-text"
                  >
                    Pages
                    <span
                      className={`header__content-menu-navigation-items-submenu-text-arrow ${
                        isPagesMenuOpen
                          ? "header__content-menu-navigation-items-submenu-text-arrow_active"
                          : ""
                      }`}
                    ></span>
                  </p>

                  <ul
                    className={
                      isPagesMenuOpen
                        ? "header__content-menu-navigation-items-submenu-lists header__content-menu-navigation-items-submenu-lists_visible"
                        : "header__content-menu-navigation-items-submenu-lists"
                    }
                  >
                    {subItems.map((subItem) => (
                      <li
                        className={`header__content-menu-navigation-items-submenu-lists-list ${
                          location.pathname === subItem.link
                            ? "header__content-menu-navigation-items-submenu-lists-list_active"
                            : ""
                        }`}
                        key={subItem.name}
                      >
                        <Link
                          className="header__content-menu-navigation-items-submenu-lists-list-link"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            resetFilters();
                          }}
                          to={subItem.link}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ul>
            </nav>
          </div>

          <div className="header__content-search">
            <button className="header__content-search-btn">
              <svg
                onClick={() => {
                  actionInputSearch();
                }}
                width="60"
                height="60"
                viewBox="0 0 57 56"
                fill="none"
              >
                <circle cx="28.791" cy="28" r="28" fill="#7EB693" />
                <path
                  d="M40.4692 35.8921L35.7086 31.1315C36.8547 29.6057 37.4734 27.7485 37.4713 25.8402C37.4713 20.9657 33.5056 17 28.6312 17C23.7567 17 19.791 20.9657 19.791 25.8402C19.791 30.7146 23.7567 34.6803 28.6312 34.6803C30.5395 34.6824 32.3967 34.0637 33.9225 32.9175L38.6831 37.6781C38.9241 37.8936 39.2384 38.0085 39.5615 37.9995C39.8846 37.9905 40.192 37.8581 40.4205 37.6295C40.6491 37.401 40.7815 37.0936 40.7905 36.7705C40.7996 36.4474 40.6846 36.1331 40.4692 35.8921ZM22.3168 25.8402C22.3168 24.5913 22.6871 23.3705 23.3809 22.3321C24.0748 21.2937 25.061 20.4843 26.2148 20.0064C27.3686 19.5285 28.6382 19.4034 29.8631 19.6471C31.0879 19.8907 32.213 20.4921 33.0961 21.3752C33.9792 22.2583 34.5806 23.3834 34.8242 24.6083C35.0679 25.8332 34.9428 27.1028 34.4649 28.2566C33.987 29.4104 33.1777 30.3966 32.1393 31.0904C31.1009 31.7842 29.88 32.1546 28.6312 32.1546C26.9571 32.1526 25.3522 31.4866 24.1684 30.3029C22.9847 29.1192 22.3188 27.5142 22.3168 25.8402Z"
                  fill="#FAFAFA"
                />
              </svg>
            </button>

            <button
              className={`header__content-search-cart-btn ${
                shoppingCart.length > 0
                  ? ""
                  : "header__content-search-cart-btn_hidden"
              }`}
              onClick={() => actionShopCart()}
            >
              <span
                className="header__content-search-cart-btn-value"
                // if quantity of products > 0 -> visible else hidden
                style={{
                  opacity: shoppingCart.length ? 1 : 0,
                }}
              >
                {productQuantity(shoppingCart)}
              </span>

              <svg width="60" height="60" viewBox="0 0 57 56" fill="none">
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
