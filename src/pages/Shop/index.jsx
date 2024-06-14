import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTagCategories,
  setActiveIndex,
  setPopupIndex,
  setOpenSortMenu,
} from "../../redux/slices/filtersSlice";
import {
  setRelatedProducts,
  setSingleProduct,
} from "../../redux/slices/singleProductSlice";

import Newsletter from "../../components/footers/Newsletter";
import Catalog from "../../components/home-pages/Catalog";
import Skeleton from "../../components/Skeleton/Shop";

const Shop = ({
  catalogue,

  activeIndex,

  popupIndex,

  isSkeletonLoading,
}) => {
  const dispatch = useDispatch();
  const sortRef = useRef();

  // Initial state selected -> singleProductSlice.js
  const relatedProducts = useSelector(
    (state) => state.singleProduct.relatedProducts
  );

  // Initial state selected -> filtersSlice.js
  const openSortMenu = useSelector((state) => state.filters.openSortMenu);

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

  // Menu categories
  const categories = ["All", "Vegetable", "Fresh", "Millets", "Nuts", "Health"];

  // Menu sort
  const menuSort = [
    "Relevance",
    "Price, Low To High",
    "Price, High To Low",
    "Name, A To Z",
    "Name, Z To A",
  ];

  const selectedCategories = (category, index) => {
    dispatch(setPopupIndex(index));
    dispatch(setTagCategories(category));
  };

  // Outside clicked popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        dispatch(setOpenSortMenu(false));
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);

  const handleClosePopup = (index) => {
    dispatch(setOpenSortMenu(false));
    dispatch(setActiveIndex(index));
  };

  // Getting the quantity products
  const productQuantity = (catalogue) => {
    return catalogue.length;
  };

  return (
    <>
      <div className="page-banner page-banner_shop">
        <h1 className="page-banner__text">Shop</h1>
      </div>

      <section className="product product_shop">
        <div className="container">
          <div className="wrapper">
            <div className="product-categories">
              <h2 className="product-categories-heading">CATEGORIES</h2>

              <ul className="product-categories__list">
                {categories.map((category, index) => (
                  <li
                    onClick={() => selectedCategories(category, index)}
                    key={index}
                    className={`product-categories__list-item ${
                      popupIndex === index
                        ? "product-categories__list-item_active"
                        : ""
                    }`}
                  >
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="product-top">
                <div className="product-top__value">
                  There are {productQuantity(catalogue)} products.
                </div>

                <div style={{ position: "relative" }}>
                  <div className="product-top__text">
                    Sort by:
                    <span
                      ref={sortRef}
                      onClick={() => dispatch(setOpenSortMenu(!openSortMenu))}
                      className={`product-top__text-arrow ${
                        openSortMenu ? "product-top__text-arrow_active" : ""
                      }`}
                    ></span>
                  </div>

                  <ul
                    className={`product-top__sort ${
                      openSortMenu ? "product-top__sort_visible" : ""
                    }`}
                  >
                    {menuSort.map((menu, index) => (
                      <li
                        onClick={() => handleClosePopup(index)}
                        key={index}
                        className={`product-top__sort-list ${
                          activeIndex === index
                            ? "product-top__sort-list_active"
                            : ""
                        }`}
                      >
                        <span>{menu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="product-items product-items_shop">
                {isSkeletonLoading
                  ? [...new Array(16)].map((_, index) => (
                      <Skeleton key={index} />
                    ))
                  : catalogue.map((product) => (
                      <li
                        className="product-items__item product-items__item_shop"
                        key={product.parent_id}
                      >
                        <Catalog
                          {...product}
                          // Data tranfer -> Single product component
                          showSingleProduct={() => showSingleProduct(product)}
                        />
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Shop;
