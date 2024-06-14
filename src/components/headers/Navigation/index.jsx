import React, { useRef } from "react";
import { useSelector } from "react-redux";

import Header from "../Header";
import ShoppingCart from "../ShoppingCart";
import Input from "../Input";

const Navigation = () => {
  const cartRef = useRef();

  // Initial state selected -> cartSlice.js
  const toggleShoppingCart = useSelector(
    (state) => state.cart.toggleShoppingCart
  );

  // Initial state selected -> inputSlice.js
  const visibleInput = useSelector((state) => state.input.visibleInput);

  return (
    <>
      <Header cartRef={cartRef} />

      <div
        className={toggleShoppingCart ? "overlay overlay_visible" : "overlay"}
      >
        <ShoppingCart cartRef={cartRef} />
      </div>

      <div className={visibleInput ? "overlay overlay_visible" : "overlay"}>
        <div
          style={{
            position: "relative",
            width: "875px",
            height: "100%",
            margin: "0 auto",
            padding: "40px 0px 0px",
          }}
        >
          <Input />
        </div>
      </div>
    </>
  );
};

export default Navigation;
