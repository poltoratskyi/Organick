import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleProduct } from "../../redux/slices/singleProductSlice";
import { useParams } from "react-router-dom";
import {
  selectIsSkeletonLoading,
  fetchSingleProduct,
} from "../../redux/slices/singleProductSlice";

import ProductSingleList from "../../components/ProductSingleList";
import Newsletter from "../../components/footers/Newsletter";
import Skeleton from "../../components/Skeleton/SingleProduct";

const ProductSingle = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  // Initial state selected -> singleProductSlice.js
  const singleProduct = useSelector(selectSingleProduct);
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(productId));
    }
  }, [productId]);

  return (
    <>
      <section className="product-single">
        <div className="container">
          <ul className="product-single__content">
            {isSkeletonLoading
              ? [...new Array(1)].map((_, index) => <Skeleton key={index} />)
              : singleProduct.map((product) => (
                  <li
                    className="product-single__content-item"
                    key={product.parent_id}
                  >
                    <ProductSingleList {...product} />
                  </li>
                ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default ProductSingle;
