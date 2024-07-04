import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowNoResults,
  selectInputResults,
} from "../../../redux/slices/inputSlice";

import Search from "../Search";
import NoResults from "../NoResults";

const SearchModal = () => {
  const dispatch = useDispatch();

  // Initial state selected -> inputSlice.js
  const { searchProduct, showNoResults, inputProducts } =
    useSelector(selectInputResults);

  const filteredProducts = inputProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchProduct.toLowerCase())
  );

  let toLocaleString = filteredProducts.length > 1 ? "Results" : "Result";

  useEffect(() => {
    filteredProducts.length <= 0 || searchProduct === ""
      ? dispatch(setShowNoResults(true))
      : dispatch(setShowNoResults(false));
  }, [searchProduct, filteredProducts]);

  return (
    <>
      {showNoResults ? (
        <NoResults searchProduct={searchProduct} />
      ) : (
        <>
          <p className="search-iner">
            {toLocaleString} for:
            <span className="search-iner__text">"{searchProduct}"</span>
            <span className="search-iner__value">
              ({filteredProducts.length})
            </span>
          </p>

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
        </>
      )}
    </>
  );
};

export default SearchModal;
