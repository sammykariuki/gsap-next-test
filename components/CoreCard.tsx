import Image from "next/image";

type CoreCardsProps = {
  image: string;
  heading: string;
  text: string;
};

export default function CoreCard({ image, heading, text }: CoreCardsProps) {
  return (
    <div className="w-80 h-[28rem] sm:w-96 sm:h-[32rem] md:w-[30rem] md:h-96 lg:w-[34rem] lg:h-[26rem] shrink-0 flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl">
      <div className="relative w-full h-56 sm:h-64 md:h-full md:w-1/2">
        <Image
          src={image}
          alt={heading}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="mt-3 text-base text-gray-600">{text}</p>
      </div>
    </div>
  );
}
