// thanks to oliver: https://www.youtube.com/@olivierlarose1
"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string[];
  image: string;
}

const projects: any = [
  {
    "id": 1,
    "title": "Organic Marketing",
    "tagline": "Grow naturally. Connect genuinely.",
    "description": [
      "Build Your Audience",
      "Grow your audience through strategic, unpaid methods",
      "Generate steady website traffic without ad spend",
      "Focus on long-term relationships and authentic reach"
    ],

    "image": "/images/organic-marketing.jpg"
  },
  {
    "id": 2,
    "title": "Branding",
    "tagline": "Make them remember you.",
    "description": [
      "Give your company or product a unique and recognizable personality",
      "Build a solid, trustworthy reputation",
      "Create a lasting impression that sets you apart from the competition"
    ]
  },
  {
    "id": 3,
    "title": "Social Media Management",
    "tagline": "Be seen. Be heard. Be shared.",
    "description": [
      "Strengthen your brand’s online presence across platforms",
      "Increase visibility through consistent and engaging content",
      "Build a loyal community and foster meaningful interaction"
    ]
  },
  {
    "id": 4,
    "title": "Performance Marketing",
    "tagline": "Smart campaigns. Real results.",
    "description": [
      "Identify the best channels to reach your target audience",
      "Set up and manage high-impact marketing campaigns",
      "Boost ROI through data-driven strategies and optimized performance"
    ]
  }
]


export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="" ref={container}>
        <section className="text-white w-full">
          {projects.map((project:any, i:number) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                title={project.title}
                description={project.description}
                image={project.image}
                tagline={project.tagline}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string[];
  image: string;
  tagline: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  image,
  tagline,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const brandColor = "#F564A9"; 

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top bg-white border border-neutral-200`}
      >
        <div className={`flex h-full gap-10`}>
          <div className={`w-[50%] relative `}>
            <h2 className="text-4xl font-bricolage-bold  text-black capitalize" >{title}</h2>
            <p style={{ color: brandColor }} className="text-xl  font-light text-gray-300 mt-3 italic">{tagline}</p>
            <ul className="space-y-4 mt-8">
              {description.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-900">
                  <span  className="mt-1">•</span>
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          
          </div>

          <div
            className={`relative w-[50%] h-full rounded-lg overflow-hidden`}
            style={{ backgroundColor: brandColor + "33" }}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image fill src={image} alt={title} className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
