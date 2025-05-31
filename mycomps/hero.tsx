"use client";
import React from "react";
import { NavbarMenu } from "./nav";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import MagicButton from "./MagicButton";

export default function Hero() {
  return (
    <div className="w-screen h-screen p-4 relatve overflow-hidden">
      <ShaderGradientCanvas
        style={{
          width: "calc(100vw - 32px)",
          height: "calc(100vh - 32px)",
          position: "absolute",

          zIndex: "0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
        lazyLoad={false}
        fov={undefined}
        pixelDensity={2}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={1.8}
          uSpeed={0.33}
          uStrength={0.3}
          uDensity={0}
          uFrequency={5}
          uAmplitude={3.4}
          positionX={-0.2}
          positionY={-0.4}
          positionZ={0}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          color1="#5886E0"
          color2="#F564A9"
          color3="##5886E0"
          reflection={0.52}
          // View (camera) props
          cAzimuthAngle={267}
          cPolarAngle={179}
          cDistance={5.1}
          cameraZoom={15.1}
          // Effect props
          lightType="env"
          brightness={1.1}
          envPreset="city"
          grain="on"
          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
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

      {/* <div className="hero w-full h-full overflow-hidden relative rounded-xl">
     
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 z-0"></div>

   
        <div className="absolute inset-0 z-10 hero-noise"></div>

        <NavbarMenu />
        <div className="h-full w-full flex flex-col justify-center items-center relative z-20">
          <h1 className="font-bricolage-bold select-none text-[5.5vw] capitalize font-semibold mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-gray-200">
            Where Brands don't just Grow <br /> they{" "}
            <Cover className="text-[#F564A9]">elevate</Cover>
          </h1>
          <p className="text-xl text-gray-300">
            We help brands grow and reach the right audience through Authentic
            branding and content marketing.
          </p>
          <div className="flex flex-col justify-center items-center h-[500px] w-[500px] absolute right-[0px] top-0 z-1 opacity-30">
            <div className="yellow rounded-[100px] blur-[60px]"></div>
            <div className="red rounded-[100px] blur-[60px]"></div>
            <div className="green rounded-[100px] blur-[60px]"></div>
          </div>

          <div className="flex flex-col justify-center items-center h-[200px] w-[200px] absolute left-[0px] bottom-0 z-10 opacity-30">
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
      </div> */}
    </div>
  );
}
