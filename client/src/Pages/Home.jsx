import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";
import { makeRequest } from "../makeRequest";

const Home = () => {
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  useEffect(() => {
    const authentication = async () => {
      try {
        const response = await makeRequest.post("auth/local/register", {
          username: "Strapi2 user",
          email: "us2er@strapi.io",
          password: "st2rapiPassword",
        });
        console.log(response);
      } catch (error) {
        console.error("error");
      }
    };
    // authentication();
  }, []);
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
