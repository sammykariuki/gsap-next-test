import SectionHeading from "./SectionHeading";

export default function PricingSection() {
  return (
    <section id="features" className="px-8 mt-20">
      <div className="h-[calc(100vh-5rem)]">
        <SectionHeading
          h2="FLEXIBLE PLANS"
          h1="Simple, predictable pricing"
          p="Choose the tier that matches your scope. Free plan for hobbyists, secure environments for high-growth engineering teams."
        />
        <div></div>
      </div>
    </section>
  );
}
