import { coreData } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import CoreCard from "./CoreCard";

export default function CoreSection() {
  return (
    <section
      id="features"
      className="px-8 mt-36 sm:mt-20 border-2 border-red-500"
    >
      <div className="h-screen flex flex-col justify-around">
        <SectionHeading
          h2="CORE FEATURES"
          h1="Engineered for performance"
          p="Everything you need to maintain fluid local development environments. Zero manual steps, full execution accuracy"
        />
        <div className="flex gap-6 w-max">
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
