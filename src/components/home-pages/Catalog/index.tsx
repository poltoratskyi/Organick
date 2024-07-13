import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectIsSkeletonLoading,
  selectCatalogue,
  fetchProducts,
} from "../../../redux/slices/catalogueSlice";
import { selectActiveNameMenu } from "../../../redux/slices/menuSlice";
import { Product } from "../../headers/SearchModal";

import "./Style.scss";

import Skeleton from "../../Skeleton/Shop";
import ProductItems from "../../ProductItems";

const Catalog: React.FC = () => {
  const dispatch = useDispatch();

  // Initial state selected -> catalogueSlice.js
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);
  const catalogue = useSelector(selectCatalogue);

  // Initial state selected -> menuSlice.js
  const activeNameMenu = useSelector(selectActiveNameMenu);

  // Fetch products
  useEffect(() => {
    const fetchHomeData = async () => {
      // Check activeNameMenu
      if (activeNameMenu === "Home") {
        //@ts-ignore
        dispatch(fetchProducts());
      }
    };

    fetchHomeData();
  }, [activeNameMenu]);

  return (
    <section className="product">
      <div className="container">
        <div className="product__content">
          <div className="product__content-title">
            <span className="product__content-title-subheading">Organic</span>

            <h2 className="product__content-title-heading">Our Products</h2>
          </div>

          <ul className="product-items product-items_list">
            {isSkeletonLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : catalogue
                  .slice(0, 8)

                  .map((product: Product) => (
                    <li
                      className="product-items__item product-items__item_list"
                      key={product.parent_id}
                    >
                      <ProductItems {...product} />
                    </li>
                  ))}
          </ul>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="button button_product"
          >
            <Link id="link" to="/Shop">
              Show More
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
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Catalog;
