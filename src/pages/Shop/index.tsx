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
  setCurrentPage,
} from "../../redux/slices/shopSlice";
import { selectActiveNameMenu } from "../../redux/slices/menuSlice";

import "./Style.scss";

import Newsletter from "../../components/footers/Newsletter";
import ProductItems from "../../components/ProductItems";
import Skeleton from "../../components/Skeleton/Shop";
import Pagination from "../../components/Pagination";
import { Product } from "../../components/headers/SearchModal";
import { AppDispatch } from "../../redux/store";

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

const Shop: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const sortRef = useRef<HTMLSpanElement>(null);

  // Initial state selected -> shopSlice.js
  const { activeIndex, categories, currentPage } = useSelector(selectFilters);
  const openSortMenu = useSelector(selectOpenSortMenu);
  const shopProducts = useSelector(selectShopProducts);
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector(selectActiveNameMenu);

  // Fetch products
  useEffect(() => {
    const fetchShopData = async () => {
      // Check activeNameMenu
      if (activeNameMenu === "Shop") {
        let queryParams = "";

        if (categories !== "All") {
          queryParams += `tag=${categories}`;
        }

        if (activeIndex === "PriceLowToHigh") {
          queryParams += "&sortBy=price&order=asc";
        }

        if (activeIndex === "PriceHighToLow") {
          queryParams += "&sortBy=price&order=desc";
        }

        if (activeIndex === "NameAToZ") {
          queryParams += "&sortBy=name&order=asc";
        }

        if (activeIndex === "NameZToA") {
          queryParams += "&sortBy=name&order=desc";
        }

        dispatch(
          fetchShopProducts({
            queryParams,
            currentPage,
          })
        );
      }
    };

    fetchShopData();
  }, [categories, activeIndex, activeNameMenu, currentPage]);

  useEffect(() => {
    // Check if the active menu is "Shop"
    if (activeNameMenu !== "Shop") {
      // Update URL
      navigate({});
    } else {
      // Create the obj of str JSone links -> categories, currentPage, activeIndex
      const queryStr = qs.stringify({
        categories,
        page: currentPage,
        sort: activeIndex,
      });

      // Save filters -> localStorage
      localStorage.setItem("shopFilters", queryStr);

      // Update URL -> queryStr
      navigate(`?${queryStr}`);
    }
  }, [categories, activeIndex, activeNameMenu, currentPage]);

  useEffect(() => {
    // Get data URL -> localStorage
    const savedFilters = localStorage.getItem("shopFilters");

    if (savedFilters) {
      // Create the obj -> categories, currentPage, activeIndex
      const { categories, page, sort } = qs.parse(savedFilters);

      const savedCategories = categories as string;
      const savedSort = sort as string;
      const savedPage = Number(page);

      // Save data -> localStorage -> Redux state
      dispatch(setTagCategories(savedCategories));
      dispatch(setActiveIndex(savedSort));
      dispatch(setCurrentPage(savedPage));
    }
  }, [dispatch]);

  // Outside clicked popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        dispatch(setOpenSortMenu(false));
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);

  const handleClosePopup = (value: string) => {
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
