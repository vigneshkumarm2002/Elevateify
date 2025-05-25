"use client";
import React from "react";
import { NavbarMenu } from "./nav";
import { TextReveal } from "./textReveal";

export default function About() {
  return (

      <div className=" w-full h-full  relative ">
  


        <div className="h-full w-full flex  flex-col justify-center items-center relative z-20">
          <TextReveal className="">
          
At Elevateify, we help brands grow through Organic strategies, Creative content creation & Performance marketing.
We deliver tailored solutions that drive real results.
         
          </TextReveal>
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

  );
}
