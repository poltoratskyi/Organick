import React, { useState, useEffect, useContext } from "react";
import "./Style.scss";

/* import Context from "../../../context/Context"; */

import ProductList from "../../ProductList/ProductList";

// Getting data <- Props
const Products = ({
  id,
  parent_id,
  tag,
  img,
  name,
  description,
  price,
  salePrice,
  handleAddToCart,
  isNew,
}) => {
  // Getting data <- Context
  /* const { toggleCart, isAdded } = useContext(Context); */

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  /*   const addToCart = () => {
    // Props transfer
    handleAddToCart({ tag, img, name, description, price, id, parent_id });
  }; */

  return (
    <>
      <ProductList
        isNew={isNew}
        tag={tag}
        img={img}
        name={name}
        price={price}
        salePrice={salePrice}
        discount={percentage}
      />

      {/* <button
          onClick={() => {
            isAdded(parent_id) ? toggleCart() : addToCart();
          }}
          className="product-button-cheked"
        >
          {isAdded(parent_id) ? "View Cart" : "Add To Cart"}
        </button> */}
    </>
  );
};
export default Products;
