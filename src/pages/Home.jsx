import React from "react";
import AboutHome from "../components/about/AboutHome";
import Categories from "../components/categories/Categories";
import Featured from "../components/featured/Featured";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Insta from "../components/insta/Insta";
import Subscribe from "../components/subscribe/Subscribe";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Categories />
      <Featured />
      <AboutHome />
      <Insta />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
