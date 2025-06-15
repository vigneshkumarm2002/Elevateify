"use client";
import React, { useEffect, useState } from "react";
import { NavbarMenu } from "./nav";
import { Cover } from "@/components/ui/cover";
import MagicButton from "./MagicButton";

export default function Hero() {


  return (
    <div className="w-screen h-screen relatve overflow-hidden bg-black">
   
      <NavbarMenu />
      <div className="h-full w-full flex flex-col justify-center items-center relative z-[9999]">
        <h1 className="font-bricolage-bold select-none text-[5.5vw] capitalize font-semibold mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-gray-200">
          Where Brands don't just Grow <br /> they{" "}
          <Cover className="text-[#F564A9]">elevate</Cover>
        </h1>
        <p className="text-xl text-gray-300">
          We help brands grow and reach the right audience through Authentic
          branding and content marketing.
        </p>
        <MagicButton />

      </div>
    </div>
  );
}
