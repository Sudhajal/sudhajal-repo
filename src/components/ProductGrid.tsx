
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Purifier", price: "599", rating: 5, reviews: 243 },
  { name: "Purifier", price: "1,449", rating: 4, reviews: 98 },
  { name: "Purifier", price: "739", rating: 5, reviews: 1002 },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-wrap gap-2.5 items-start w-full max-md:max-w-full">
        {products.map((product, index) => (
          <ProductCard imageSrc={""} title={""} description={""} key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
