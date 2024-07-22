import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setClearSingleProduct,
  selectSingleProduct,
} from "../../redux/slices/singleProductSlice";
import { useParams } from "react-router-dom";
import {
  selectIsSkeletonLoading,
  fetchSingleProduct,
} from "../../redux/slices/singleProductSlice";

import ProductSingleList from "../../components/ProductSingleList";
import Newsletter from "../../components/footers/Newsletter";
import Skeleton from "../../components/Skeleton/SingleProduct";
import { Product } from "../../components/headers/SearchModal";
import { AppDispatch } from "../../redux/store";

const ProductSingle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams();

  // Initial state selected -> singleProductSlice.js
  const singleProduct = useSelector(selectSingleProduct);
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct({ productId }));
    }

    return () => {
      dispatch(setClearSingleProduct());
    };
  }, [productId]);

  return (
    <>
      <div className="page-banner page-banner_product-single">
        <h1 className="page-banner__text">Shop Single</h1>
      </div>

      <section className="product-single">
        <div className="container">
          <ul className="product-single__content">
            {isSkeletonLoading
              ? [...new Array(1)].map((_, index) => <Skeleton key={index} />)
              : singleProduct.map((product: Product) => (
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
