import { Check } from "lucide-react";

type PricingCardProps = {
  heading: string;
  amount: string;
  description: string;
  products: string[];
};

export default function PricingCard({
  heading,
  amount,
  description,
  products,
}: PricingCardProps) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>
        <span>{amount}</span>/user/month
      </p>
      <p>{description}</p>
      <hr />
      {products.map((product, i) => (
        <p key={i}>
          <span>
            <Check />
          </span>
          {product}
        </p>
      ))}
    </div>
  );
}
