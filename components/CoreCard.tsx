import Image from "next/image";

type CoreCardsProps = {
  image: string;
  heading: string;
  text: string;
};

export default function CoreCard({ image, heading, text }: CoreCardsProps) {
  return (
    <div className="w-80 h-96 shrink-0 flex flex-col md:flex-row overflow-hidden rounded-xl border">
      <div className="relative w-full aspect-video md:aspect-auto md:w-1/2 md:min-h-64">
        <Image
          src={image}
          alt={heading}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 md:w-1/2">
        <h3 className="text-lg font-semibold">{heading}</h3>
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
