"use client";
import React from "react";
import BadImage from "./../public/bad.jpg"

export default function BreakingBadSection() {
    console.log("BadImage",BadImage);
  return (
    <div className="w-full  pt-20 px-4 ">
      <div className="  mx-auto text-center">
        {/* Main heading */}
        <div className="mb-4">
          <h2 className="text-5xl md:text-7xl font-bricolage-bold text-gray-900 mb-2 leading-tight">
            <span className="text-[#F564A9]">You</span> know the{" "}
            <span className="text-blue-500">
              Business
            </span>
          </h2>
          <h2 className="text-5xl md:text-7xl font-bricolage-bold text-gray-900 leading-tight">
            <span className="text-[#F564A9]">We</span> know the{" "}
            <span className="text-blue-500">
              Strategy
            </span>
          </h2>
        </div>

      

        {/* Simple formula */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 text-xl md:text-2xl font-public-sans-semibold flex-wrap justify-center gap-4">
            <span className="text-gray-800">Your Vision</span>
            <span className="text-[#F564A9] text-3xl">+</span>
            <span className="text-gray-800">Our Strategy</span>
            <span className="text-[#F564A9] text-3xl">=</span>
            <span className="text-[#F564A9] font-bold">ELEVATION</span>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-8">
        <img src={BadImage?.src} className=" w-full h-auto" />
      </div>
    </div>
  );
} 