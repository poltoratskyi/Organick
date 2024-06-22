import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectToggleShoppingCart } from "../../../redux/slices/cartSlice";
import { selectVisibleInput } from "../../../redux/slices/inputSlice";

import Header from "../Header";
import ShoppingCart from "../ShoppingCart";
import Input from "../Input";

const Navigation = () => {
  const cartRef = useRef();

  // Initial state selected -> cartSlice.js
  const toggleShoppingCart = useSelector(selectToggleShoppingCart);

  // Initial state selected -> inputSlice.js
  const visibleInput = useSelector(selectVisibleInput);

  return (
    <>
      <Header cartRef={cartRef} />

      <div
        className={
          toggleShoppingCart || visibleInput
            ? "overlay overlay_visible"
            : "overlay"
        }
      ></div>

      <ShoppingCart cartRef={cartRef} />

      <Input />
    </>
  );
};

export default Navigation;
