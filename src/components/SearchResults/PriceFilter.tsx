"use client";
import React, { useState } from "react";

const PriceFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Update minPrice only if it's less than or equal to the maxPrice
    if (maxPrice === undefined || value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure minPrice does not exceed maxPrice
    if (maxPrice === undefined || value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure maxPrice is greater than or equal to minPrice
    if (minPrice === undefined || value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 max-w-full w-[300px]">
      <div className="text-base font-semibold text-gray-800">Price ₹</div>

      {/* Displaying Min and Max price values */}
      <div className="flex justify-between w-full text-sm text-gray-600">
        <span>Min: ₹{minPrice !== undefined ? minPrice : "N/A"}</span>
        <span>Max: ₹{maxPrice !== undefined ? maxPrice : "N/A"}</span>
      </div>

      {/* Range input to control min price */}
      <input
        type="range"
        min="0"
        max="30000"
        value={minPrice !== undefined ? minPrice : 0} // Default to 0 if minPrice is undefined
        onChange={handleRangeChange}
        className="w-full"
      />

      {/* Manually set input for min and max prices */}
      <div className="flex gap-2 w-full">
        <input
          type="text"
          value={minPrice !== undefined ? minPrice : ""}
          onChange={handleMinChange}
          placeholder="Min"
          aria-label="Minimum price"
          className="overflow-hidden grow px-3 py-1 text-sm text-gray-400 bg-white rounded-md border border-solid border-zinc-200 w-[104px]"
        />
        <input
          type="text"
          value={maxPrice !== undefined ? maxPrice : ""}
          onChange={handleMaxChange}
          placeholder="Max"
          aria-label="Maximum price"
          className="overflow-hidden grow px-3 py-1 text-sm text-gray-400 bg-white rounded-md border border-solid border-zinc-200 w-[103px]"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
