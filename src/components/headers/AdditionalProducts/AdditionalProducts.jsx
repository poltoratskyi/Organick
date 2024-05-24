import React, { useState, useEffect } from "react";

import ProductItems from "../../ProductItems/ProductItems";

// Getting data <- props
const Additional = ({
  tag,
  img,
  name,
  descriptionMore,
  price,
  salePrice,
  showSingleProduct,
  isNew,
}) => {
  // Default value -> discount
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  return (
    <ProductItems
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
  );
};

export default Additional;
