
import React from "react";

interface RelatedProductProps {
  imageSrc: string;
  title: string;
  price: string;
}

const RelatedProduct: React.FC<RelatedProductProps> = ({
  imageSrc,
  title,
  price,
}) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 items-center pb-9 bg-white rounded-lg">
      <div className="flex overflow-hidden flex-col self-stretch bg-white rounded-lg">
        <img
          loading="lazy"
          src={imageSrc}
          className="object-contain z-10 mt-0 mb-0 w-full aspect-[1.52] max-md:mb-2.5"
          alt={title}
        />
      </div>
      <div className="mt-6 text-lg font-bold text-center text-zinc-800 w-[279px]">
        {title}
      </div>
      <div className="mt-4 text-xl font-bold text-center text-sky-500 underline">
        {price}
      </div>
      <button className="flex justify-center items-center px-6 py-3 mt-4 text-sm font-bold tracking-wide text-center rounded-3xl border-sky-500 border-solid border-[0.833px] min-h-[42px] text-zinc-800 max-md:px-5">
        <img
          loading="lazy"
          src="/cart.svg"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt=""
        />
        <div className="flex shrink-0 self-stretch my-auto w-1 bg-white bg-opacity-0 h-[18px]" />
        <span className="self-stretch my-auto">Add To Cart</span>
      </button>
    </div>
  );
};

const RelatedProducts: React.FC = () => {
  const products = [
    {
      imageSrc:
        "/pg1.png",
      title: "Replacement 5 Filter Kit for PUREGEN PROQ5-50",
      price: "₹2450/-",
    },
    {
      imageSrc:
        "/pg2.png",
      title: "Replacement 5 Filter Kit for Sudhajal RO5-50",
      price: "₹1050",
    },
    {
      imageSrc:
        "/pg3.png",
      title: "Replacement 3 Filter Kit for Aquaguard",
      price: "₹750",
    }
  ];

  return (
    <>
      <h2 className="mt-28 text-3xl font-bold text-center text-zinc-800 max-md:mt-10">
        Related products
      </h2>
      <div className="flex overflow-hidden overflow-x-auto gap-5 mt-9 max-w-full bg-cyan-50 w-[1115px]">
        {products.map((product, index) => (
          <RelatedProduct key={index} {...product} />
        ))}
      </div>
      <img
        loading="lazy"
        src="/3dot.svg"
        className="object-contain mt-16 aspect-[5.26] w-[42px] max-md:mt-10"
        alt=""
      />
    </>
  );
};

export default RelatedProducts;
