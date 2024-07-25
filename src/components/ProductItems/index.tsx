import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setToggleShoppingCart } from "../../redux/slices/cartSlice";
import { Product } from "../headers/SearchModal";
import { useViewedProducts, useDiscount } from "../../hooks/useProductActions";

import "./Style.scss";

const ProductItems: React.FC<Product> = ({
  id,
  parent_id,
  description,
  descriptionMore,
  additionalInfo,
  tag,
  isNew,
  isSalePrice,
  img,
  name,
  price,
  salePrice,
  counter,
  modifiedPrice,
}) => {
  const dispatch = useDispatch();

  // Viewed product
  const { handleViewItem } = useViewedProducts();

  // Product discount
  const percentage = useDiscount(price, salePrice);

  const toSingleProduct = () => {
    const productToAdd = {
      id,
      parent_id,
      description,
      descriptionMore,
      additionalInfo,
      tag,
      isNew,
      isSalePrice,
      img,
      name,
      price,
      salePrice,
      percentage,
      counter,
      modifiedPrice,
    };

    handleViewItem(productToAdd);
  };

  return (
    <>
      <div id="badge" className="product-items__item-badge">
        <div className="product-items__item-badge-info">
          <div className="product-items__item-badge-info-header">
            {/* is isNew === true */}
            {isNew && (
              <span className="product-items__item-badge-info-header-new">
                NEW
              </span>
            )}

            <span className="product-items__item-badge-info-header-tag">
              {tag}
            </span>
          </div>

          {/* is salePrice === true */}
          {isSalePrice && (
            <span className="product-items__item-badge-info-header-percentage">
              -{percentage}%
            </span>
          )}
        </div>

        <img
          className="product-items__item-badge-img"
          src={img}
          alt={`Product ${name}`}
        />

        <Link
          to={`/product/${name.replace(/\s+/g, "-").toLocaleLowerCase()}/${id}`}
        >
          <span
            onClick={() => {
              toSingleProduct();
              window.scrollTo(0, 0);
              dispatch(setToggleShoppingCart(false));
              document.documentElement.style.overflow = "auto";
            }}
            className="product-items__item-badge-name"
          >
            {name}
          </span>
        </Link>

        <span className="product-items__item-badge-line"></span>

        {/* is salePrice === true */}
        {isSalePrice ? (
          <>
            <span className="product-items__item-badge-original">
              ${price} USD
            </span>
            <span className="product-items__item-badge-sail">
              ${salePrice} USD
            </span>
            {/* is salePrice === false */}
          </>
        ) : (
          <span className="product-items__item-badge-single-price">
            ${price} USD
          </span>
        )}
      </div>

      <button
        onClick={() => {
          toSingleProduct();
          window.scrollTo(0, 0);
          dispatch(setToggleShoppingCart(false));
          document.documentElement.style.overflow = "auto";
        }}
        id="shop-now"
        className="button button_shop-now"
      >
        <Link
          to={`/product/${name.replace(/\s+/g, "-").toLocaleLowerCase()}/${id}`}
          id="link"
        >
          Shop Now
          <svg
            id="arrow"
            width="22"
            height="22"
            viewBox="0 0 19 19"
            fill="none"
          >
            <circle cx="9.2" cy="9.2" r="9.2" fill="#fff" />
            <path
              d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
              stroke="#274c5b"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </button>
    </>
  );
};

export default ProductItems;
