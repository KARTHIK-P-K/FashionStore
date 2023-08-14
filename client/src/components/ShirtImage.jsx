import React, { useState, useEffect } from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const ShirtImage = () => {
  const snap = useSnapshot(state);
  const [shirtData, setShirtData] = useState(snap);
  // console.log(snap);
  useEffect(() => {
    // Convert the shirt data to a data URL
    // console.log(snap.color);
    const canvas = document.createElement("canvas");
    canvas.width = 100; // Set the desired width
    canvas.height = 100; // Set the desired height
    const context = canvas.getContext("2d");

    context.fillStyle = shirtData.color;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Convert canvas to data URL
    const dataURL = canvas.toDataURL("image/png");

    // Update the shirt data with the data URL
    setShirtData((prevData) => ({
      ...prevData,
      image: dataURL,
    }));
  }, [snap]);

  return (
    <div>
      <img src={shirtData.image} alt="Shirt" />
    </div>
  );
};

export default ShirtImage;
