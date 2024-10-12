
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Purifier", price: "599", rating: 5, reviews: 243, link: "/product/1" },
  { name: "Purifier", price: "1,449", rating: 4, reviews: 98, link: "/product/2" },
  { name: "Purifier", price: "739", rating: 5, reviews: 1002, link: "/product/3" },
  { name: "Purifier", price: "599", rating: 5, reviews: 243, link: "/product/4" },
  { name: "Purifier", price: "1,449", rating: 4, reviews: 98, link: "/product/5" },
  { name: "Purifier", price: "739", rating: 5, reviews: 1002, link: "/product/6" },
];


const ProductGrid: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-wrap gap-2.5 items-start w-full max-md:max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
