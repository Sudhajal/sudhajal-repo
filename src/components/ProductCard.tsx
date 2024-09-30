
'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";


interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-wrap gap-5 items-start min-w-[240px] w-[502px] max-md:max-w-full">
    <Image
  loading="lazy"
  src={imageSrc}
  alt={title}
  className="object-contain grow shrink aspect-[0.81] min-w-[240px] w-[195px]"
  width={195}  // Specify width
  height={240}  // Specify height (calculated or defined based on your aspect ratio)
/>

      <div className="flex flex-wrap grow shrink gap-24 items-end w-48">
        <div className="flex flex-col min-w-[240px] text-zinc-800 w-[242px]">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-xs">{description}</p>
        </div>
        <div className="flex flex-col flex-1 shrink w-full text-xs font-bold tracking-wide text-center basis-0">
          
          {/* Send Enquiry Button */}
          <Link href="/enquiry">
            <button
           
              aria-label="Send enquiry about this product"
              className="self-stretch px-8 py-5 w-full text-white bg-blue-700 border-sky-500 border-solid border-[1.029px] min-h-[51px] rounded-[30.857px] max-md:px-5"
            >
              Send Enquiry
            </button>
          </Link>
          
          {/* Add to Cart Button */}
          <button
            aria-label="Add this product to cart"
            className="flex justify-center items-center px-8 py-3.5 mt-2.5 w-full border-2 border-blue-700 border-solid min-h-[51px] rounded-[31px] text-zinc-800 max-md:px-5"
            onClick={() => {
              // Add to cart logic goes here
              console.log(`${title} added to cart`);
            }}
          >
            <Image
              loading="lazy"
              src="/cart.svg"
              alt="Cart icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]"
              width={5}
              height={5}
            />
            <div className="flex shrink-0 self-stretch my-auto bg-white bg-opacity-0 h-[22px] w-[5px]" />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
