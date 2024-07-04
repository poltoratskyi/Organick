import React from "react";

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

const Home = () => {
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
