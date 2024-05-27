import React, { useContext } from "react";

import Context from "../../../context/Context";

import Search from "../Search/Search";

const SearchModal = () => {
  // Getting data <- Context
  const { catalogue, searchProduct, showSingleProduct } = useContext(Context);

  return (
    <ul className="search-items">
      {catalogue
        .filter(
          (product) =>
            // Filter the product(s) <- searchProduct (Input)
            product.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
            product.tag.toLowerCase().includes(searchProduct.toLowerCase())
        )

        // Filter the product(s) -> 0 - 4
        .slice(0, 4)

        // Show filtered products
        .map((product) => (
          <li className="search-items__item" key={product.parent_id}>
            <Search
              {...product}
              // Data tranfer -> Single product component
              showSingleProduct={() => showSingleProduct(product)}
            />
          </li>
        ))}
    </ul>
  );
};

export default SearchModal;
