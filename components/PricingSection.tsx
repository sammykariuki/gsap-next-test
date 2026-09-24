"use client";

import { coreData } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import CoreCard from "./CoreCard";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PricingSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = container.current?.querySelector(".track");
      if (!track) return;

      const scrollDistance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
        },
      });
    },
    {
      scope: container,
    },
  );
  return (
    <section
      id="features"
      ref={container}
      className="px-8 mt-36 sm:mt-20 overflow-hidden"
    >
      <div className="h-screen flex flex-col justify-around">
        <SectionHeading
          h2="FLEXIBLE PLANS"
          h1="Simple, predictable pricing"
          p="Choose the tier that matches your scope. Free plan for hobbyists, secure environments for high-growth engineering teams."
        />
        <div className="track flex gap-6 w-max">
          {coreData.map((data) => (
            <CoreCard
              key={data.image}
              image={data.image}
              heading={data.heading}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
