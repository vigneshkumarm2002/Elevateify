"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh] ", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex flex-col justify-center h-[50%] max-w-7xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
         <> {/* Asterisk illustration - bottom right */}
          <div className="absolute top-10 -left-20 w-56 h-56 opacity-40 rotate-45">
          <Image
            src="/assets/Asterisk.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-[4vw] text-left font-bold text-[#F564A9]">
          About us
        </h1>
        <span
          ref={targetRef}
          className={
            "flex flex-wrap p-5  text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl leading-16 lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
        <div className="absolute bottom-20 -right-20 w-36 h-36 opacity-40 ">
          <Image
            src="/assets/Asterisk.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        </>
      </div>
      
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};
