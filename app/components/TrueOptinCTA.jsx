import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import heroBands from "../../public/assets/hero-bands.jpg";
import { AdContext } from "../context/AdContext";

const TrueOptinCTA = ({ currentPage, setCurrentPage }) => {
  const adContext = useContext(AdContext);
  const [formData, setFormData] = useState({
    headline: adContext.headline,
    description: adContext.description,
    cta: adContext.cta,
  });

  let imageURL = "/assets/hero-bands.jpg";
  if (adContext.imageData !== null) {
    imageURL = adContext.imageData;
  }
  return (
    // h-[30vh] sm:h-auto max-h-[30vh
    <section class="text-gray-600 body-font overflow-hidden">
      <div className="mx-auto w-full min-w-80 flex flex-col justify-center">
        <div className="my-5 w-full h-1/2 flex-col justify-center border-black border-2">
          <div class="relative w-full h-[300px] flex-col sm:flex-row sm:items-center items-start justify-center">
            <img
              // src="/assets/hero-bands.jpg"
              // This Works below:
              // w-full h-full justify-center items-center ease-in-out duration-300 object-cover (can use object-contain) also
              src={imageURL}
              className="object-contain absolute top-0 left-0 w-full h-full" //h-auto
              alt=""
            />
          </div>
          <div class="mb-5 border-black border-t-2 h-1/2 ">
            <div class="flex-col sm:flex-row sm:items-center items-start justify-start mx-5">
              <h1 class="pr-5 md:pr-0 text-2xl font-medium title-font text-gray-900 mt-2">
                {/* Your next big idea is here. */}
                {adContext.headline}
              </h1>
              <p class="pr-5 md:pr-0 text-2xl font-light text-gray-900">
                {/* Friendly for the
                 environment. Great for man. The next big thing
                is here. */}
                {adContext.description}
              </p>
            </div>
            {/* sm:w-3/5 flex flex-col sm:flex-row sm:items-center items-start justify-end mt-5 */}
            <div className="flex flex-col pr-5 md:pr-0 items-center sm:items-end mx-5 my-5">
              <button
                class="flex-shrink-0 text-white bg-gray-800 border-0 py-1 px-6 focus:outline-none hover:bg-gray-900 text-lg justify-end"
                onClick={() => {
                  setCurrentPage(1); // go to JOIN page
                }}
              >
                {adContext.cta}
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

export default TrueOptinCTA;
