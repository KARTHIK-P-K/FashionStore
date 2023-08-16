import React from "react";
import ProductSlider from "./productSlider";
import useFetch from "../hooks/useFetch";

const FiveStar = () => {
  const { data } = useFetch("/products?populate=*");
  console.log(data.length);

  const newData = data.filter((product) => {
    const ratings = product.attributes.ratings.data;

    if (ratings && ratings.length > 0) {
      const totalRating = ratings.reduce(
        (sum, rating) => sum + rating.attributes.ratingnumber,
        0
      );

      const averageRating = Math.ceil(totalRating / ratings.length);

      return averageRating === 5;
    }

    return false;
  });
  console.log(newData);
  return (
    <div className="m-16 w-full mx-auto">
      <h2 className="text-2xl mb-5 text-center xl:text-left">fIVE sTAR</h2>

      <ProductSlider data={newData} />
    </div>
  );
};

export default FiveStar;
