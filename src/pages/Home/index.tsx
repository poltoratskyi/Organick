import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../../redux/slices/catalogueSlice";
import { fetchPosts } from "../../redux/slices/postsSlice";
import { AppDispatch } from "../../redux/store";

import Banner from "../../components/home-pages/Banner";
import SailsCart from "../../components/home-pages/SailsCart";
import About from "../../components/home-pages/About";
import Catalog from "../../components/home-pages/Catalog";
import Testimonial from "../../components/home-pages/Testimonial";
import Offer from "../../components/home-pages/Offer";
import Story from "../../components/home-pages/Story";
import Gallery from "../../components/home-pages/Gallery";
import News from "../../components/home-pages/News";
import Newsletter from "../../components/footers/Newsletter";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Fetch products
  useEffect(() => {
    const fetchHomeData = async () => {
      dispatch(fetchProducts());
    };

    fetchHomeData();
  }, [dispatch]);

  // Fetch posts
  useEffect(() => {
    const fetchPostsData = async () => {
      dispatch(fetchPosts());
    };

    fetchPostsData();
  }, [dispatch]);

  return (
    <>
      <Banner />

      <SailsCart />

      <About />

      <Catalog />

      <Testimonial />

      <Offer />

      <Story />

      <Gallery />

      <News />

      <Newsletter />
    </>
  );
};
export default Home;
