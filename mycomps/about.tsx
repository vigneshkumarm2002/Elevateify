"use client";
import React from "react";
import { NavbarMenu } from "./nav";
import { TextReveal } from "./textReveal";
import Image from "next/image";

export default function About() {
  return (
    <div className=" w-full h-full  relative font-bricolage-bold ">
      
    

      

    
    
      <div className="h-full w-full flex  flex-col justify-center items-center relative z-20">
        <TextReveal className="">
          At Elevateify, we help brands grow through Organic strategies,
          Creative content creation & Performance marketing. We deliver tailored
          solutions that drive real results.
        </TextReveal>
      </div>
    </div>
  );
}
