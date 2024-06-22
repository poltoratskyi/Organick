import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTagCategories,
  setActiveIndex,
  setOpenSortMenu,
  selectOpenSortMenu,
} from "../../redux/slices/shopSlice";
import {
  setRelatedProducts,
  setSingleProduct,
  selectRelatedProducts,
} from "../../redux/slices/singleProductSlice";
import {
  selectIsSkeletonLoading,
  selectCatalogue,
} from "../../redux/slices/catalogueSlice";

import Newsletter from "../../components/footers/Newsletter";
import Catalog from "../../components/home-pages/Catalog";
import Skeleton from "../../components/Skeleton/Shop";
import Pagination from "../../components/Pagination";

// Menu categories
const menuCategories = [
  "All",
  "Vegetable",
  "Fresh",
  "Millets",
  "Nuts",
  "Health",
];

// Menu sort
const menuSort = [
  { value: "Relevance", label: "Relevance" },
  { value: "PriceLowToHigh", label: "Price, Low To High" },
  { value: "PriceHighToLow", label: "Price, High To Low" },
  { value: "NameAToZ", label: "Name, A To Z" },
  { value: "NameZToA", label: "Name, Z To A" },
];

const Shop = ({ categories, activeIndex }) => {
  const dispatch = useDispatch();
  const sortRef = useRef();

  // Initial state selected -> singleProductSlice.js
  const relatedProducts = useSelector(selectRelatedProducts);

  // Initial state selected -> shopSlice.js
  const openSortMenu = useSelector(selectOpenSortMenu);

  // Initial state selected -> catalogueSlice.js
  const catalogue = useSelector(selectCatalogue);
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  // Show single product
  const showSingleProduct = (product) => {
    // Show the new product -> Previous products
    const newSingleProduct = [product];

    // Request -> localStorage
    localStorage.setItem("singleProduct", JSON.stringify(newSingleProduct));

    // Update -> Single product component
    dispatch(setSingleProduct(newSingleProduct));

    const existingRelatedProduct = relatedProducts.find(
      (item) => item.parent_id === product.parent_id
    );

    console.log(existingRelatedProduct);
    // if product ID not found
    if (!existingRelatedProduct) {
      const newRelatedProducts = [product, ...relatedProducts];

      // Request -> localStorage
      localStorage.setItem(
        "relatedProducts",
        JSON.stringify(newRelatedProducts)
      );

      // Update state
      dispatch(setRelatedProducts(newRelatedProducts));
    }
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

  const handleClosePopup = (value) => {
    dispatch(setOpenSortMenu(false));
    dispatch(setActiveIndex(value));
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
                {menuCategories.map((category, index) => (
                  <li
                    onClick={() => dispatch(setTagCategories(category))}
                    key={index}
                    className={`product-categories__list-item ${
                      categories === category
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
                    {menuSort.map((item, index) => (
                      <li
                        onClick={() => handleClosePopup(item.value)}
                        key={index}
                        className={`product-top__sort-list ${
                          activeIndex === item.value
                            ? "product-top__sort-list_active"
                            : ""
                        }`}
                      >
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="product-items product-items_shop">
                {isSkeletonLoading
                  ? [...new Array(6)].map((_, index) => (
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

              <Pagination />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Shop;
