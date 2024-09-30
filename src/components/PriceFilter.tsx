
import React from "react";

const PriceFilter: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2.5 items-end max-w-full w-[233px]">
      <div className="text-base font-semibold tracking-normal leading-relaxed text-gray-800">
        Price ₹
      </div>
      <div className="flex flex-col grow shrink items-start w-56">
        <div className="flex shrink-0 bg-blue-700 rounded-full h-[9px] w-[9px]" />
      </div>
      <input
        type="text"
        placeholder="Min"
        aria-label="Minimum price"
        className="overflow-hidden grow shrink px-3 py-1 text-sm tracking-normal leading-6 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 w-[104px] max-md:pr-5"
      />
      <input
        type="text"
        placeholder="Max"
        aria-label="Maximum price"
        className="overflow-hidden grow shrink px-3 py-1 text-sm tracking-normal leading-6 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 w-[103px] max-md:pr-5"
      />
    </div>
  );
};

export default PriceFilter;
