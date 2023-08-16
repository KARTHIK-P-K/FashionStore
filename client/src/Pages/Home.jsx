import React from "react";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";

const Home = () => {
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");

  return (
    <div>
      <div className="md:px-[60px] px-[20px]">
        <Hero />

        <LatestProducts data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
