import React from "react";
import AboutHome from "../components/about/AboutHome";
import Categories from "../components/categories/Categories";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Categories />
      <Featured />
      <AboutHome/>
    </div>
  );
};

export default Home;
