
import React from "react";

import ProductInfo from "@/components/ProductInfo";
import RelatedProducts from "@/components/RelatedProducts";


const product: React.FC = () => {
  return (
    <div id="product" className="flex overflow-hidden flex-col items-center pb-1.5 bg-white">

      <ProductInfo />
      <RelatedProducts />
     
    </div>
  );
};

export default product;
