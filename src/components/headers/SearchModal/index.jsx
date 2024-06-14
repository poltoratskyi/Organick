import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowNoResults } from "../../../redux/slices/inputSlice";

import Search from "../Search";
import NoResults from "../NoResults";

import products from "../../../data/products";

const SearchModal = () => {
  const dispatch = useDispatch();

  // Initial state selected -> skeletonSlice.js
  const { searchProduct, showNoResults } = useSelector((state) => state.input);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchProduct.toLowerCase())
  );

  useEffect(() => {
    if (filteredProducts.length <= 0) {
      dispatch(setShowNoResults(true));
    } else {
      dispatch(setShowNoResults(false));
    }
  }, [searchProduct, filteredProducts, dispatch]);

  return (
    <>
      {showNoResults ? (
        <NoResults searchProduct={searchProduct} />
      ) : (
        <ul
          className={
            searchProduct !== ""
              ? "search-items search-items_active"
              : "search-items"
          }
        >
          {filteredProducts.slice(0, 4).map((product) => (
            <li className="search-items__item" key={product.parent_id}>
              <Search {...product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchModal;
