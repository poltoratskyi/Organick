import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setActiveName } from "../redux/slices/menuSlice";

type ActivePageProps = {
  name: string;
  link: string;
}[];

type LocationProprs = {
  pathname: string;
};

const useActivePage = (
  menuItems: ActivePageProps,
  location: LocationProprs
) => {
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
