import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRelatedProducts,
  setViewedProducts,
} from "../redux/slices/singleProductSlice";
import {
  setRemoveProduct,
  selectCart,
  setAddProduct,
} from "../redux/slices/cartSlice";

export const useViewedProducts = () => {
  const dispatch = useDispatch();

  // Initial state selected -> singleProductSlice.js
  const viewedProducts = useSelector(selectRelatedProducts);

  const handleViewItem = (product) => {
    const updatedProducts = viewedProducts.filter(
      (item) => item.parent_id !== product.parent_id
    );

    const newRelatedProducts = [product, ...updatedProducts];

    dispatch(setViewedProducts(newRelatedProducts));

    localStorage.setItem("viewedProducts", JSON.stringify(newRelatedProducts));
  };

  // Export the function
  return { handleViewItem };
};

export const useDiscount = (price, salePrice) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((price - salePrice) / price) * 100;
    setPercentage(calculatedPercentage.toFixed(0));
  }, [price, salePrice]);

  return percentage;
};

export const useRemoveProduct = () => {
  const dispatch = useDispatch();

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);

  const removeProduct = (parent_id) => {
    dispatch(setRemoveProduct(parent_id));

    // Update localStorage
    const updatedItems = shoppingCart.filter(
      (item) => item.parent_id !== parent_id
    );

    localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
  };

  return { removeProduct };
};

export const useAddProduct = () => {
  const dispatch = useDispatch();

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);

  const addProduct = (product) => {
    const newShoppingBasket = [product, ...shoppingCart];

    dispatch(setAddProduct(newShoppingBasket));

    localStorage.setItem("shoppingCart", JSON.stringify(newShoppingBasket));
  };

  return { addProduct };
};

export const useIsAdded = () => {
  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);

  const isAdded = (parent_id) => {
    return shoppingCart.some((item) => item.parent_id === parent_id);
  };

  return { isAdded };
};
