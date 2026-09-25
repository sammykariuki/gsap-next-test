type SectionHeadingProps = {
  h2: string;
  h1: string;
  p: string;
};

export default function SectionHeading({ h2, h1, p }: SectionHeadingProps) {
  return (
    <div className="flex flex-col py-20 mb-20 md:items-center">
      <h2 className="font-semibold text-tertiary-purple">{h2}</h2>
      <h1 className="font-bold text-2xl mt-3 mb-3">{h1}</h1>
      <p className="text-tertiary-light-grey md:text-center">{p}</p>
    </div>
  );
}
