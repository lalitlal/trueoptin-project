import React, { useContext, useState } from "react";
import { AdContext } from "../context/AdContext";

const TrueOptinForm = ({ currentPage, setCurrentPage }) => {
  const adContext = useContext(AdContext);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async () => {
    if (adContext.isDeployed) {
      try {
        // const response = await fetch("/submitBQData", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // });

        // if (response.status == 200) {
        //   const data = await response.json();
        //   console.log("Data submitted successfully:", data);
        // } else {
        //   throw new Error("Failed to submit data to BigQuery");
        // }
        setCurrentPage(2);
      } catch (error) {
        console.error("Error submitting data to BigQuery:", error);
      }
    } else {
      setCurrentPage(2);
    }
  };

  return (
    <div class="text-gray-600 body-font relative">
      <div className="mx-auto w-full flex flex-col justify-center">
        <div class="">
          <div class="flex flex-col text-start w-full mb-5">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900">
              {adContext.signupHeadline}
            </h1>
            <p class="leading-relaxed text-normal">
              {adContext.signupDescription}
            </p>
          </div>
          <div class="w-full">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <div class="relative">
                  {/* <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label> */}
                  {adContext.toggleName && (
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  )}
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  {/* <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label> */}
                  {adContext.toggleEmail && (
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  )}
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  {/* <label for="phone" class="leading-7 text-sm text-gray-600">
                  Phone
                </label> */}
                  {adContext.togglePhone && (
                    <input
                      id="phone"
                      placeholder="Phone"
                      name="phone"
                      onChange={handleChange}
                      type="tel"
                      pattern="[0-9]+"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  )}
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex text-white bg-gray-800 border-0 py-1 px-8 focus:outline-none hover:bg-gray-900 text-lg"
                  onClick={() => {
                    handleFormSubmit();
                  }}
                >
                  {adContext.signupCTA}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 w-full h-1/2 flex-col justify-center text-center">
          Powered by trueoptin
        </div>
      </div>
    </div>
  );
};

export default TrueOptinForm;
