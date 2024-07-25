import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setVisibleInput } from "../../../redux/slices/inputSlice";
import { Product } from "../SearchModal";

import {
  useViewedProducts,
  useDiscount,
  useRemoveProduct,
  useAddProduct,
  useIsAdded,
} from "../../../hooks/useProductActions";

import "./Style.scss";

const Search: React.FC<Product> = ({
  id,
  parent_id,
  img,
  name,
  tag,
  price,
  salePrice,
  description,
  descriptionMore,
  additionalInfo,
  isNew,
  isSalePrice,
  counter,
  modifiedPrice,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      parent_id,
      tag,
      img,
      name,
      description,
      descriptionMore,
      additionalInfo,
      price,
      salePrice,
      isNew,
      isSalePrice,
      percentage,
      counter,
      modifiedPrice,
    };

    addProduct(productToAdd);
    handleViewItem(productToAdd);
  };

  const handleClickPage = () => {
    dispatch(setVisibleInput(false));
    handleViewItem({
      id,
      parent_id,
      tag,
      img,
      name,
      description,
      descriptionMore,
      additionalInfo,
      price,
      salePrice,
      isNew,
      isSalePrice,
      percentage,
      counter,
      modifiedPrice,
    });
  };

  // Product discount
  const percentage = useDiscount(price, salePrice);

  // Add the product -> Shopping cart (redux) / localStorage
  const { addProduct } = useAddProduct();

  // Viewed product
  const { handleViewItem } = useViewedProducts();

  // Remove the product -> Shopping cart (redux) / localStorage
  const { removeProduct } = useRemoveProduct();

  // Found the product -> -> Shopping cart (redux) / localStorage
  const { isAdded } = useIsAdded();

  return (
    <div className="search-items__item-product">
      <div className="search-items__item-product-cover">
        <img
          className="search-items__item-product-cover-img"
          src={img}
          alt={`Product ${name}`}
        />

        <div className="search-items__item-product-cover-exposition">
          <Link
            to={`/product/${name.replace(/\s+/g, "-").toLowerCase()}/${id}`}
          >
            <span
              onClick={() => handleClickPage()}
              className="search-items__item-product-cover-exposition-name"
            >
              {name}
            </span>
          </Link>

          <div className="search-items__item-product-cover-exposition-mark">
            {/* is isNew === true */}
            {isNew && (
              <span className="search-items__item-product-cover-exposition-mark-new">
                NEW
              </span>
            )}

            <span className="search-items__item-product-cover-exposition-mark-tag">
              {tag}
            </span>
          </div>
        </div>
      </div>

      <div className="search-items__item-product-action">
        <div className="search-items__item-product-action-value">
          {/* is salePrice === true */}
          {isSalePrice ? (
            <>
              <span className="search-items__item-product-action-value-original">
                ${price} USD
              </span>

              <span className="search-items__item-product-action-value-percentage">
                -{percentage}%
              </span>

              <span className="search-items__item-product-action-value-sail">
                ${salePrice} USD
              </span>

              {/* is salePrice === false */}
            </>
          ) : (
            <span className="search-items__item-product-action-value-single-price">
              ${price} USD
            </span>
          )}
        </div>

        <button
          onClick={() => {
            // isAdded === true
            isAdded(parent_id)
              ? removeProduct(parent_id)
              : // isAdded === false
                handleAddToCart();
          }}
          className="search-items__item-product-action-btn"
        >
          {isAdded(parent_id) ? "−" : "+"}
        </button>
      </div>
    </div>
  );
};

export default Search;
