import React from "react";
import Categories from "../components/categories/Categories";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div className=" px-5 md:px-[120px] mx-auto">
      <Header />
      <Categories />
      <Featured />
    </div>
  );
};

export default Home;
