import React, { useState, useEffect } from "react";

import ProductList from "../../ProductList/ProductList";

// Getting data <- props
const Additional = ({ tag, isNew, img, name, price, salePrice }) => {
  // Default value -> discount
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  return (
    <ProductList
      tag={tag}
      isNew={isNew}
      img={img}
      name={name}
      price={price}
      salePrice={salePrice}
      discount={percentage}
    />
  );
};

export default Additional;
