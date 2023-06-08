import React from "react";

const TrueOptinNewsletter = ({ seeForm, setSeeForm }) => {
  return (
    <div class="text-gray-600 body-font relative">
      <div className="mx-auto w-2/3 flex flex-col justify-center">
        <div class=" mx-auto">
          <div class="flex flex-col text-start w-full mb-5">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900">
              Join the waitlist
            </h1>
            <p class="leading-relaxed text-normal">
              Over 25000 other students are signed up to learn more about
              product xyz.
            </p>
          </div>
          <div class="w-full">
            <div class="flex flex-wrap items-center">
              <div class="w-5/6">
                <div class="relative">
                  {/* <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label> */}
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div class="w-1/6">
                <button
                  class="flex text-white bg-gray-800 border-0 py-1 px-8 focus:outline-none hover:bg-gray-900 text-lg"
                  onClick={() => {
                    setSeeForm(false);
                  }}
                >
                  JOIN
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

export default TrueOptinNewsletter;
