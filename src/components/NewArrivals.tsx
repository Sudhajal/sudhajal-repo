
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface Product {
  imageSrc: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    imageSrc:
      "/Group 7611.png",
    title: "5 Filter Purifier With UV, UF, RO and sediment filters",
    description: "Get free installation\n1yr service warranty free",
  },
  {
    imageSrc:
      "/Group 7615.png",
    title: "5 Filter Purifier With UV, UF, RO and sediment filters",
    description: "Get free installation\n1yr service warranty free",
  },
];

const NewArrivals: React.FC = () => {
  return (
    <div className="w-full">

    <div className="flex flex-col justify-center items-center mt-2.5 max-w-full bg-blue-700 bg-opacity-10"> 
      <div className="flex flex-col py-2 max-w-full w-[1029px]">
        <div className="flex flex-col justify-center items-center px-36 py-10 w-full text-black max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[548px]">
            <h2 className="text-4xl font-bold leading-tight text-center">
              New Arrivals
            </h2>
            <p className="mt-5 text-lg leading-5 text-center max-md:max-w-full">
              Explore our collection and variety of range and get 1 year of
              service free!
              <br /> Enquire to know details.
            </p>
            <div className="flex flex-col justify-center items-center self-stretch mt-5 w-full text-xs font-medium leading-9 max-md:max-w-full">
            <Link href="/product">
  <span className="gap-2.5 self-stretch px-5 py-0.5 border border-sky-500 border-solid min-h-[41px] rounded-[46px] max-md:px-5">
    View more &gt;
  </span>
</Link>

            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-start pb-10 mt-7 max-md:max-w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
          </div>
  );
};

export default NewArrivals;
