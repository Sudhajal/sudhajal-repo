import React from "react";
import Image from "next/image";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  period,
  features,
  isPopular,
}) => {
  return (
    <div
      className={`flex flex-col flex-1 shrink px-5 py-8 rounded-xl shadow-lg basis-0 min-w-[240px] transition-all duration-300
      bg-white text-zinc-900 hover:bg-blue-700 hover:text-white`}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <p className="mt-2.5 text-sm md:text-base text-stone-500 hover:text-white">
            {description}
          </p>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <div className="flex gap-1 items-center w-full">
            <span className="self-stretch my-auto text-5xl font-semibold max-md:text-4xl">
              {price}
            </span>
            <span className="self-stretch my-auto text-sm md:text-base font-light text-stone-500 hover:text-gray-50">
              / {period}
            </span>
          </div>
          <button
            className={`gap-1 self-stretch px-2.5 py-2.5 mt-5 w-full text-sm font-semibold text-center 
            rounded transition-all duration-300 
            bg-white text-blue-700 border-blue-700 border-solid border-[1.25px]
            hover:bg-blue-500 hover:text-white`}
          >
            Get Started Now
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-8 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3.5 items-center mt-2.5 w-full">
            <div
              className={`flex gap-2 items-center self-stretch p-2 my-auto 
              h-[27px] w-[27px] rounded-full transition-all duration-300
              bg-gray-50 hover:bg-violet-100`}
            >
              <Image
                loading="lazy"
                src={`http://b.io/ext_${11 + index}-`}
                alt=""
                className="object-contain aspect-square w-[13px]"
              />
            </div>
            <div className="flex-1 shrink self-stretch my-auto text-sm md:text-base font-medium">
              {feature}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
