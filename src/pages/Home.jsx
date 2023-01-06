import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div className=" px-5 md:px-[120px] mx-auto">
      <Header />
      <Categories />
    </div>
  );
};

export default Home;
