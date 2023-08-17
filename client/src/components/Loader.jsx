import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center  h-screen">
      <PulseLoader size={20} loading={true} color="orange" />
    </div>
  );
};

export default Loader;
