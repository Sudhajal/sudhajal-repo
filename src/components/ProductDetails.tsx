
import React from "react";

import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";


const ProductDetails: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center pb-1.5 bg-white">

      <ProductInfo />
      <RelatedProducts />
     
    </div>
  );
};

export default ProductDetails;
