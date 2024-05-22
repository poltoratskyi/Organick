import React, { useState, useEffect } from "react";
import "./Style.scss";

/* import Context from "../../../context/Context"; */

import ProductList from "../../ProductList/ProductList";

// Getting data <- Props
const Products = ({
  tag,
  img,
  name,
  descriptionMore,
  price,
  salePrice,
  showSingleProduct,
  isNew,
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  return (
    <>
      <ProductList
        descriptionMore={descriptionMore}
        showSingleProduct={showSingleProduct}
        isNew={isNew}
        tag={tag}
        img={img}
        name={name}
        price={price}
        salePrice={salePrice}
        discount={percentage}
      />
    </>
  );
};
export default Products;
