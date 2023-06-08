"use client";

import React, { useContext, useState } from "react";
import { AdContext } from "../context/AdContext";
import TrueOptinCTA from "./TrueOptinCTA";
import TrueOptinForm from "./TrueOptinForm";
import TrueOptinThankYou from "./TrueOptinThankYou";

const TrueOptinDemo = () => {
  const { currentPage, setCurrentPage } = useContext(AdContext);
  return (
    <div className="relative">
      <div className="flex justify-center items-center w-full h-full">
        <div
          className={`transition-all duration-500 p-2 w-full ${
            currentPage === 0 ? "opacity-100 z-[50]" : "opacity-0 z-0"
          }`}
        >
          <TrueOptinCTA
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div
          className={`absolute transition-all duration-500 p-2 w-full ${
            currentPage === 1 ? "opacity-100 z-[50]" : "opacity-0 z-0"
          }`}
        >
          <TrueOptinForm
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div
          className={`absolute transition-all duration-500 p-2 w-full ${
            currentPage === 2 ? "opacity-100 z-[50]" : "opacity-0 z-0"
          }`}
        >
          <TrueOptinThankYou
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default TrueOptinDemo;
