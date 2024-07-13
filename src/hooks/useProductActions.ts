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
import { Product } from "../components/headers/SearchModal";

export const useViewedProducts = () => {
  const dispatch = useDispatch();

  // Initial state selected -> singleProductSlice.js
  const viewedProducts = useSelector(selectRelatedProducts);

  const handleViewItem = (product: Product) => {
    const updatedProducts = viewedProducts.filter(
      (item: Product) => item.parent_id !== product.parent_id
    );
    const newRelatedProducts = [product, ...updatedProducts];

    dispatch(setViewedProducts(newRelatedProducts));

    localStorage.setItem("viewedProducts", JSON.stringify(newRelatedProducts));
  };

  // Export the function
  return { handleViewItem };
};

export const useDiscount = (price: number, salePrice?: number) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (salePrice) {
      const calculatedPercentage = ((price - salePrice) / price) * 100;
      const result = calculatedPercentage.toFixed(0);
      setPercentage(Number(result));
    }
  }, [price, salePrice]);

  return percentage;
};

export const useRemoveProduct = () => {
  const dispatch = useDispatch();

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);

  const removeProduct = (parent_id: number) => {
    dispatch(setRemoveProduct(parent_id));

    // Update localStorage
    const updatedItems = shoppingCart.filter(
      (item: Product) => item.parent_id !== parent_id
    );

    localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
  };

  return { removeProduct };
};

export const useAddProduct = () => {
  const dispatch = useDispatch();

  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);

  const addProduct = (product: Product) => {
    const newShoppingBasket = [product, ...shoppingCart];

    dispatch(setAddProduct(newShoppingBasket));

    localStorage.setItem("shoppingCart", JSON.stringify(newShoppingBasket));
  };

  return { addProduct };
};

export const useIsAdded = () => {
  // Initial state selected -> cartSlice.js
  const shoppingCart = useSelector(selectCart);

  const isAdded = (parent_id: number) => {
    return shoppingCart.some((item: Product) => item.parent_id === parent_id);
  };

  return { isAdded };
};

export const totalPrice = (shoppingCart: Product[]): number => {
  return shoppingCart.reduce((acc, item) => {
    const price = item.salePrice || item.price;
    return acc + price;
  }, 0);
};
