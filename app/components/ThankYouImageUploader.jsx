"use client";

import { useContext, useState } from "react";
import { AdContext } from "../context/AdContext";

function ThankYouImageUploader() {
  const adContext = useContext(AdContext);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // adContext.setImage(URL.createObjectURL(selectedFile));
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => {
        adContext.setThankYouImageData(event.target.result);
      };
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <label
        htmlFor="thankyouimage-upload"
        className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative h-full w-full flex justify-center items-center"
      >
        Upload Image
      </label>
      <input
        id="thankyouimage-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ThankYouImageUploader;
