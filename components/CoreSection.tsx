"use client";

import { coreData } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import CoreCard from "./CoreCard";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CoreSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = container.current?.querySelector(".track");
      if (!track) return;

      gsap.to(track, {
        x: -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true, //fonce x & end to be re-evaluated on resize, not cached
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
          h2="CORE FEATURES"
          h1="Engineered for performance"
          p="Everything you need to maintain fluid local development environments. Zero manual steps, full execution accuracy"
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
