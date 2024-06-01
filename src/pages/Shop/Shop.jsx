import React, { useContext, useState } from "react";

import Context from "../../context/Context";

import Newsletter from "../../components/footers/Newsletter/Newsletter";
import Catalog from "../../components/home-pages/Catalog/Catalog";
import Skeleton from "../../components/Skeleton/Skeleton";

const Shop = () => {
  // Getting data <- Context
  const {
    catalogue,
    showSingleProduct,
    isSkeletonLoading,
    setSortType,
    activeIndex,
    activeIndexCategories,
    setActiveIndex,
    setActiveIndexCategories,
  } = useContext(Context);

  // Open / Close popup
  const [openSortMenu, setOpenSortMenu] = useState(false);

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
    setActiveIndexCategories(index);
    setSortType(category);
  };

  const handleClosePopup = (index) => {
    setActiveIndex(index);
    setOpenSortMenu(false);
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
                      activeIndexCategories === index
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
                      onClick={() => setOpenSortMenu(!openSortMenu)}
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
