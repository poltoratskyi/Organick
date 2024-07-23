import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Style.scss";

import {
  selectIsSkeletonLoading,
  selectCatalogue,
} from "../../../redux/slices/catalogueSlice";
import { Product } from "../../headers/SearchModal";

import Skeleton from "../../Skeleton/Shop";
import ProductItems from "../../ProductItems";
import { useResetFilters } from "../../../hooks/useProductActions";

const Offer: React.FC = () => {
  // Initial state selected -> catalogueSlice.js
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);
  const catalogue = useSelector(selectCatalogue);

  // Reset filters -> Shop
  const { resetFilters } = useResetFilters();

  return (
    <section className="offer">
      <div className="container">
        <div className="offer__content">
          <div className="offer__content-header">
            <div className="offer__content-header-title">
              <span className="offer__content-header-title-subheading">
                Special Offe
              </span>

              <h2 className="offer__content-header-title-heading">
                We Offer Organic Options for You
              </h2>
            </div>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
                resetFilters();
              }}
              className="button button_offer"
            >
              <Link id="link" to="/shop">
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

          <ul className="product-items">
            {isSkeletonLoading
              ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
              : catalogue.slice(8, 12).map((product: Product) => (
                  <li className="product-items__item" key={product.parent_id}>
                    <ProductItems {...product} />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Offer;
