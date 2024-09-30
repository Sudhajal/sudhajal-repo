
import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  rating,
  reviews,
}) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink py-5 pl-5 bg-white border-gray-200 border-solid basis-0 border-[0.855px] min-w-[240px]">
      <div className="flex shrink-0 h-[221px] w-[235px]" />
      <div className="flex gap-2 mt-4 max-w-full w-[216px]">
        <div className="flex flex-col items-start text-gray-800 whitespace-nowrap">
          <div className="text-sm tracking-normal leading-loose">{name}</div>
          <div className="text-lg font-semibold tracking-tight leading-none">
            ₹{price}
          </div>
          <img
            loading="lazy"
            src={`http://b.io/ext_${9 + rating}-`}
            alt={`${rating} star rating`}
            className="object-contain self-stretch w-full aspect-[5.24]"
          />
        </div>
        <div className="flex flex-col text-xs">
          <div className="self-end font-semibold leading-5 text-gray-800 underline">
            View Details
          </div>
          <div className="self-start mt-6 leading-none text-gray-500">
            {reviews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
