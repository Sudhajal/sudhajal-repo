"use client"
import { useState } from "react";

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Best Sellers");
  const categories = [
    "Best Sellers",
    "New Releases",
    "Ultra Voilet",
    "Reverse Osmosis",
    "Filters",
  ];

  return (
    <div className="flex flex-col grow shrink self-stretch my-auto text-center min-w-[240px] w-[560px] max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center max-md:max-w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`flex overflow-hidden flex-col items-center self-stretch px-2 my-auto rounded cursor-pointer transition-colors ${
              activeCategory === category 
                ? 'text-blue-600 bg-blue-50' 
                : 'hover:text-blue-500'
            }`}
          >
            <div className="overflow-hidden gap-2.5 self-stretch">
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories