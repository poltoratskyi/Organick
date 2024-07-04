import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setActiveName } from "../redux/slices/menuSlice";

const useActivePage = (menuItems, location) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPage = menuItems.find(
      (item) => item.link === location.pathname
    );

    if (currentPage) {
      dispatch(setActiveName(currentPage.name));
    }
  }, [menuItems, location]);
};

export default useActivePage;
