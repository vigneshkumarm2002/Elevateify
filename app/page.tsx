import About from "@/mycomps/about";
import Hero from "@/mycomps/hero";
import Services from "@/mycomps/services";

import Footer from "@/mycomps/footer";
import BreakingBadSection from "@/mycomps/breakingBadSection";
import Image from "next/image";
import CTA from "@/mycomps/cta";

export default function Home() {
  return (
    <div className="font-public-sans">
    <Hero/>
<Services />
<About />
<CTA/>
<BreakingBadSection />
<Footer />
    </div>
  );
}
