import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import heroBands from "../../public/assets/hero-bands.jpg";
import { AdContext } from "../context/AdContext";

const TrueOptinThankYou = ({ currentPage, setCurrentPage }) => {
  const adContext = useContext(AdContext);
  const [formData, setFormData] = useState({
    headline: adContext.thankYouHeadline,
    description: adContext.thankYouDescription,
    cta: adContext.thankYouCTA,
  });

  let imageURL = "/assets/hero-bands.jpg";
  if (adContext.thankYouImageData !== null) {
    imageURL = adContext.thankYouImageData;
  }
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div className="mx-auto w-full min-w-80 flex flex-col justify-center">
        <div className="my-5 w-full h-1/2 flex-col justify-center border-black border-2">
          <div class="relative w-full h-[300px] flex-col sm:flex-row sm:items-center items-start justify-center">
            <img
              // src="/assets/hero-bands.jpg"
              src={imageURL}
              className="absolute top-0 left-0 w-full h-full" //h-auto
              alt=""
            />
          </div>
          <div class="mb-5 border-black border-t-2 h-1/2 ">
            <div class="flex-col sm:flex-row sm:items-center items-center justify-center text-center mx-5">
              <h1 class="pr-5 md:pr-0 text-2xl font-medium title-font text-gray-900 mt-2">
                {adContext.thankYouHeadline}
              </h1>
              <p class="pr-5 md:pr-0 text-2xl font-light text-gray-900">
                {adContext.thankYouDescription}
              </p>
            </div>
            {/* sm:w-3/5 flex flex-col sm:flex-row sm:items-center items-start justify-end mt-5 */}
            <div className="flex flex-col pr-5 md:pr-0 items-center sm:items-center mx-5 text-center my-5">
              <button
                class="flex-shrink-0 text-white bg-gray-800 border-0 py-1 px-6 focus:outline-none hover:bg-gray-900 text-lg justify-center"
                onClick={() => {
                  setCurrentPage(0); // go to JOIN page
                }}
              >
                {adContext.thankYouCTA}
              </button>
            </div>
          </div>
        </div>
        <div className="my-5 w-full h-1/2 flex-col justify-center text-center">
          Powered by trueoptin
        </div>
      </div>
    </section>
  );
};

export default TrueOptinThankYou;
