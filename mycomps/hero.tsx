"use client";
import React from "react";
import { NavbarMenu } from "./nav";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
  return (
    <div className="w-screen h-screen p-4">
      <div className="hero w-full h-full overflow-hidden relative rounded-xl">
        {/* Background gradient overlay with stronger colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 z-0"></div>

        {/* Apply noise filter only to hero */}
        <div className="absolute inset-0 z-10 hero-noise"></div>

        <NavbarMenu />
        <div className="h-full w-full flex flex-col justify-center items-center relative z-20">
          <h1 className="font-bricolage-bold select-none text-[5.5vw] capitalize font-semibold mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Where Brands don't just Grow <br /> they{" "}
            <Cover className="text-[#F564A9]">elevate</Cover>
          </h1>
          <p className="text-xl">
            We help brands grow and reach the right audience through Authentic
            branding and content marketing.
          </p>
          <div className="flex flex-col justify-center items-center h-[500px] w-[500px] absolute right-[0px] top-0 z-10">
            <div className="yellow rounded-[100px] blur-[60px]"></div>
            <div className="red rounded-[100px] blur-[60px]"></div>
            <div className="green rounded-[100px] blur-[60px]"></div>
          </div>

          <div className="flex flex-col justify-center items-center h-[200px] w-[200px] absolute left-[0px] bottom-0 z-10">
            <div className="yellow rounded-[100px] blur-[60px]"></div>
            <div className="red rounded-[100px] blur-[60px]"></div>
            <div className="green rounded-[100px] blur-[60px]"></div>
          </div>
        </div>

        <svg className="fixed top-0 left-0 w-0 h-0">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
            <feColorMatrix
              in="colorNoise"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
            />
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
            <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
          </filter>
        </svg>
      </div>
    </div>
  );
}
