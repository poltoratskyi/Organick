import { useDispatch } from "react-redux";
import { setSingleNews } from "../redux/slices/singleNewsSlice";

const useShowSingleNews = () => {
  const dispatch = useDispatch();

  const showSingleNews = (news) => {
    const newSingleNews = [news];
    localStorage.setItem("singleNews", JSON.stringify(newSingleNews));
    dispatch(setSingleNews(newSingleNews));
  };

  return showSingleNews;
};

export default useShowSingleNews;
