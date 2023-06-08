"use client";
import { useContext } from "react";
import { AdContext } from "../context/AdContext";
import InputCTAForm from "./InputCTAForm";
import Toggles from "./Toggles";
import TrueOptinDemo from "./TrueOptinDemo";
import InputThankYouPage from "./InputThankYouPage";
import InputSignupForm from "./InputSignupForm";

const BuilderDemo = () => {
  const { currentPage, setCurrentPage } = useContext(AdContext);
  return (
    <div className="flex">
      <div className="w-1/2 pt-10">
        {/* <div className="relative"> */}
        <div className="flex justify-center items-center w-full h-full">
          <div
            className={`absolute transition-all duration-500 p-2 w-full ${
              currentPage === 0 ? "opacity-100 z-[50]" : "opacity-0 z-0"
            }`}
          >
            <InputCTAForm></InputCTAForm>
          </div>
          <div
            className={`absolute transition-all duration-500 p-2 w-full ${
              currentPage === 1 ? "opacity-100 z-[50]" : "opacity-0 z-0"
            }`}
          >
            <div className="space-y-3">
              <InputSignupForm></InputSignupForm>
              <Toggles></Toggles>
            </div>
          </div>
          <div
            className={`absolute transition-all duration-500 p-2 w-full ${
              currentPage === 2 ? "opacity-100 z-[50]" : "opacity-0 z-0"
            }`}
          >
            <InputThankYouPage></InputThankYouPage>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="w-1/2">
        <TrueOptinDemo></TrueOptinDemo>
      </div>
    </div>
  );
};

export default BuilderDemo;
