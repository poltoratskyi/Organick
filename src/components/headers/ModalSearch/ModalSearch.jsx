import React, { useContext } from "react";
import "./Style.scss";

import Context from "../../../context/Context";

import Search from "../Search/Search";

const SearchModal = ({ searchProduct }) => {
  // Getting data <- Context
  const { catalogue } = useContext(Context);

  return (
    <ul className="search-items">
      {catalogue
        .filter((product) =>
          // Filter the product(s) <- searchProduct (Input)
          product.name.toLowerCase().includes(searchProduct.toLowerCase())
        )

        // Filter the product(s) -> 0 - 5
        .slice(0, 5)

        // Show filtered products
        .map((product) => (
          <li className="search-items__item" key={product.parent_id}>
            <Search {...product} />
          </li>
        ))}
    </ul>
  );
};

export default SearchModal;
