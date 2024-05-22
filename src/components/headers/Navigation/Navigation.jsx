import React, { useContext } from "react";

import Context from "../../../context/Context";

import Header from "../Header/Header";
import ShoppingBasket from "../ShoppingBasket/ShoppingBasket";
import ModalSearch from "../ModalSearch/ModalSearch";

const Navigation = () => {
  // Getting data <- Context
  const { searchProduct, shoppingBasketOpen } = useContext(Context);

  return (
    <>
      <Header />

      <div
        className={`overlay ${shoppingBasketOpen ? "overlay_visible" : ""}`}
      ></div>

      {shoppingBasketOpen && <ShoppingBasket />}

      <div style={{ position: "relative" }} className="container">
        {searchProduct && <ModalSearch />}
      </div>
    </>
  );
};

export default Navigation;
