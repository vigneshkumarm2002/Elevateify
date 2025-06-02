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
    "image": "/assets/service/organic.jpg"
  },
  {
    "id": 2,
    "title": "Branding",
    "tagline": "Make them remember you.",
    "description": [
      "Give your company or product a unique and recognizable personality",
      "Build a solid, trustworthy reputation",
      "Create a lasting impression that sets you apart from the competition"
    ],
    "image": "/assets/service/branding.jpg"
  },
  {
    "id": 3,
    "title": "Social Media Marketing",
    "tagline": "Be seen. Be heard. Be shared.",
    "description": [
      "Strengthen your brand's online presence across platforms",
      "Increase visibility through consistent and engaging content",
      "Build a loyal community and foster meaningful interaction"
    ],
    "image": "/assets/service/socialmedia.jpg"
  },
  {
    "id": 4,
    "title": "Performance Marketing",
    "tagline": "Smart campaigns. Real results.",
    "description": [
      "Identify the best channels to reach your target audience",
      "Set up and manage high-impact marketing campaigns",
      "Boost ROI through data-driven strategies and optimized performance"
    ],
    "image": "/assets/service/performance.jpg"
  }
]


export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root options={{ wheelMultiplier: 1.1, smoothWheel: true, lerp: 0.06 }}>
      <main className="bg-white py-30 relative isolate will-change-transform" ref={container}>
  
      <div className="sticky top-0 h-0 overflow-visible -z-10">
      
      </div>

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
      className="h-screen flex flex-col  items-center justify-center sticky top-34"
    >  
  {i==0 &&     <div
          className="absolute inset-x-0 -top-0 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#F564A9] to-[#F564A9]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>}
        {i==0 &&    <div
          className="absolute inset-x-0 -top-20 flex transform-gpu overflow-hidden  opacity-25 blur-3xl xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#F564A9] to-[#F564A9] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>}
       {i==0 && <div className="absolute -top-8  items-center justify-center max-w-3xl flex flex-col gap-0"><h1 className="text-[4vw] text-left font-bold text-[#F564A9] z-[99999] font-bricolage-bold  ">Our services</h1> 
       <p className="text-xl  text-center text-gray-600">We help businesses grow with standout branding, smart marketing tactics, user-focused websites, and conversion-optimized campaigns</p></div>}
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          willChange: "transform",
        }}
        className={`flex flex-col relative -top-[25%] h-[460px] w-[80%] rounded-xl p-8 origin-top bg-black border border-gray-800 shadow-2xl backdrop-blur-sm transform-gpu`}
      >
        <div className={`flex h-full gap-16`}>
          <div className={`w-[50%] relative p-4 flex flex-col justify-between`}>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span style={{ backgroundColor: brandColor }} className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white">{i + 1}</span>
                <span className="text-gray-400 uppercase tracking-wider text-xs font-medium">Service</span>
              </div>
              <h2 className="text-4xl font-bricolage-bold text-white capitalize mb-3" >{title}</h2>
              <p style={{ color: brandColor }} className="text-xl font-light mb-8 italic">{tagline}</p>
              <div className="h-px w-16 bg-gray-700 mb-8"></div>
              <ul className="space-y-5">
                {description.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-300 group">
                    <span style={{ color: brandColor }} className="flex-shrink-0 text-lg">•</span>
                    <span className="text-[15px] leading-normal group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`relative w-[50%] h-full rounded-xl overflow-hidden`}
            style={{ backgroundColor: brandColor + "11" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
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
