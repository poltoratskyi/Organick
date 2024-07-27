import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import {
  setTagCategories,
  setActiveIndex,
  setOpenSortMenu,
  selectOpenSortMenu,
  selectFilters,
  selectIsSkeletonLoading,
  selectShopProducts,
  fetchShopProducts,
} from "../../redux/slices/shopSlice";

import "./Style.scss";

import Newsletter from "../../components/footers/Newsletter";
import ProductItems from "../../components/ProductItems";
import Skeleton from "../../components/Skeleton/Shop";
import Pagination from "../../components/Pagination";
import { Product } from "../../components/headers/SearchModal";
import { AppDispatch } from "../../redux/store";

// Menu categories
const menuCategories = [
  "all",
  "vegetable",
  "fresh",
  "millets",
  "nuts",
  "health",
];

// Menu sort
const menuSort = [
  { value: "relevance", label: "Relevance" },
  { value: "price", label: "Price, Low To High" },
  { value: "-price", label: "Price, High To Low" },
  { value: "name", label: "Name, A To Z" },
  { value: "-name", label: "Name, Z To A" },
];

const Shop: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const sortRef = useRef<HTMLSpanElement>(null);

  // Initial state selected -> shopSlice.js
  const { activeIndex, categories, currentPage } = useSelector(selectFilters);
  const openSortMenu = useSelector(selectOpenSortMenu);
  const shopProducts = useSelector(selectShopProducts);
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  // Fetch products
  useEffect(() => {
    const fetchShopData = async () => {
      let queryParams = "";

      if (categories !== "all") {
        queryParams += `tag=${categories}`;
      }

      if (activeIndex === "price") {
        queryParams += "&sortBy=price&order=asc";
      }

      if (activeIndex === "-price") {
        queryParams += "&sortBy=price&order=desc";
      }

      if (activeIndex === "name") {
        queryParams += "&sortBy=name&order=asc";
      }

      if (activeIndex === "-name") {
        queryParams += "&sortBy=name&order=desc";
      }

      dispatch(
        fetchShopProducts({
          queryParams,
          currentPage,
        })
      );
    };

    fetchShopData();
  }, [categories, currentPage, activeIndex]);

  useEffect(() => {
    // Create the obj of str JSone links -> categories, currentPage, activeIndex
    const queryStr = qs.stringify({
      categories,
      page: currentPage,
      sort: activeIndex,
    });

    if (queryStr !== "categories=all&page=1&sort=relevance") {
      // Update URL -> queryStr
      navigate(`?${queryStr}`);

      // Save filters -> localStorage
      localStorage.setItem("shopFilters", queryStr);
    } else {
      // Update URL -> queryStr
      navigate(`?${""}`);

      // Save filters -> localStorage
      // Default data
      const defaultCategories = "all";
      const defaultPage = 1;
      const defaultSort = "relevance";

      const defaultFilters = `categories=${defaultCategories}&page=${defaultPage}&sort=${defaultSort}`;

      localStorage.setItem("shopFilters", defaultFilters);
    }
  }, [categories, currentPage, activeIndex, navigate]);

  // Outside clicked popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        dispatch(setOpenSortMenu(false));
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSortMenu]);

  const handleClosePopup = (value: string): void => {
    dispatch(setOpenSortMenu(false));
    dispatch(setActiveIndex(value));
  };

  // Getting the quantity products
  const productQuantity = (catalogue: Product[]): number => {
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

            <div style={{ width: "100%" }}>
              <div className="product-top">
                <div className="product-top__value">
                  There are {productQuantity(shopProducts)} products.
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
                  : shopProducts.map((product: Product) => (
                      <li
                        className="product-items__item product-items__item_shop"
                        key={product.parent_id}
                      >
                        <ProductItems {...product} />
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
