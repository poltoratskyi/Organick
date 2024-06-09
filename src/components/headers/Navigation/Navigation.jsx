import React from "react";
import { useSelector } from "react-redux";

import Header from "../Header/Header";
import ShoppingBasket from "../ShoppingCart/ShoppingCart";
import ModalSearch from "../ModalSearch/ModalSearch";

const Navigation = () => {
  // Initial state selected -> cartSlice.js
  const toggleShoppingCart = useSelector(
    (state) => state.cart.toggleShoppingCart
  );

  // Initial state selected -> inputSlice.js
  const searchProduct = useSelector((state) => state.input.searchProduct);

  return (
    <>
      <Header />

      <div
        className={`overlay ${toggleShoppingCart ? "overlay_visible" : ""}`}
      ></div>

      <ShoppingBasket />

      <div style={{ position: "relative" }} className="container">
        {searchProduct && <ModalSearch />}
      </div>
    </>
  );
};

export default Navigation;
