import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setToggleShoppingCart,
  selectToggleShoppingCart,
} from "../../../redux/slices/cartSlice";
import { setActiveName } from "../../../redux/slices/menuSlice";
import {
  useViewedProducts,
  useDiscount,
  useRemoveProduct,
} from "../../../hooks/useProductActions";
import { Product } from "../SearchModal";

import "./Style.scss";

const ProductList: React.FC<Product> = ({
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
}) => {
  const dispatch = useDispatch();

  // Viewed product
  const { handleViewItem } = useViewedProducts();

  // Product discount
  const percentage = useDiscount(price, salePrice);

  // Remove the product -> Shopping cart (redux) / localStorage
  const { removeProduct } = useRemoveProduct();

  // Initial state selected -> cartSlice.js
  const toggleShoppingCart = useSelector(selectToggleShoppingCart);

  const toSingleProduct = () => {
    const productToAdd = {
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
      percentage,
    };

    handleViewItem(productToAdd);
  };

  return (
    <>
      <img className="product-list__item-img" src={img} alt={name} />

      <div className="product-list__item-exposition">
        <Link to={`/product/${name.replace(/\s+/g, "")}/${id}`}>
          <span
            onClick={() => {
              toSingleProduct();
              dispatch(setActiveName("SingleProduct"));
              dispatch(setToggleShoppingCart(!toggleShoppingCart));
              document.documentElement.style.overflow = "auto";
            }}
            className="product-list__item-exposition-name"
          >
            {name}
          </span>
        </Link>

        <p className="product-list__item-exposition-description">
          {description}
        </p>

        <div className="product-list__item-exposition-mark">
          {isNew && (
            <span className="product-list__item-exposition-mark-new">NEW</span>
          )}

          <span className="product-list__item-exposition-mark-tag">{tag}</span>

          {salePrice && (
            <span className="product-list__item-exposition-mark-percentage">
              -{percentage}%
            </span>
          )}
        </div>
      </div>

      <div className="product-list__item-action">
        <div className="product-list__item-action-value">
          {salePrice ? (
            <>
              <span className="product-list__item-action-value-original">
                ${price} USD
              </span>

              <span className="product-list__item-action-value-sail">
                ${salePrice} USD
              </span>
            </>
          ) : (
            <span className="product-list__item-action-value-single-price">
              ${price} USD
            </span>
          )}
        </div>
      </div>

      <span
        onClick={() => removeProduct(parent_id)}
        style={{ cursor: "pointer" }}
      >
        <svg fill="#274C5B" width="24" height="24" viewBox="-21 0 384 384">
          <path d="m117.332031 21.332031h106.667969c5.890625 0 10.667969-4.773437 10.667969-10.664062s-4.777344-10.667969-10.667969-10.667969h-106.667969c-5.890625 0-10.664062 4.777344-10.664062 10.667969s4.773437 10.664062 10.664062 10.664062zm0 0"></path>
          <path d="m138.667969 298.667969c5.890625 0 10.664062-4.777344 10.664062-10.667969v-128c0-5.890625-4.773437-10.667969-10.664062-10.667969s-10.667969 4.777344-10.667969 10.667969v128c0 5.890625 4.777344 10.667969 10.667969 10.667969zm0 0"></path>
          <path d="m330.667969 64h-320c-5.890625 0-10.667969 4.777344-10.667969 10.667969s4.777344 10.664062 10.667969 10.664062h32v288c0 5.890625 4.773437 10.667969 10.664062 10.667969h234.667969c5.890625 0 10.667969-4.777344 10.667969-10.667969v-288h32c5.890625 0 10.664062-4.773437 10.664062-10.664062s-4.773437-10.667969-10.664062-10.667969zm-53.335938 298.667969h-213.332031v-277.335938h213.332031zm0 0"></path>
          <path d="m202.667969 298.667969c5.890625 0 10.664062-4.777344 10.664062-10.667969v-128c0-5.890625-4.773437-10.667969-10.664062-10.667969s-10.667969 4.777344-10.667969 10.667969v128c0 5.890625 4.777344 10.667969 10.667969 10.667969zm0 0"></path>
        </svg>
      </span>
    </>
  );
};

export default ProductList;
