"use client";
import React, { useState } from "react";

const PriceFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0); // Set default min price to 0
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure maxPrice is greater than or equal to minPrice
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 max-w-full w-[300px]">
      <div className="text-base font-semibold text-gray-800">Price ₹</div>

      {/* Displaying Min and Max price values */}
      <div className="flex justify-between w-full text-sm text-gray-600">
        <span>Min: ₹{minPrice}</span>
        <span>Max: ₹{maxPrice !== undefined ? maxPrice : "N/A"}</span>
      </div>

      {/* Range input to control max price */}
      <input
        type="range"
        min={minPrice} // Ensure the range starts from the min price
        max="45000"
        value={maxPrice !== undefined ? maxPrice : 30000} // Default to 30000 if maxPrice is undefined
        onChange={handleMaxChange}
        className="w-full"
      />

      {/* Manually set input for min and max prices */}
      <div className="flex gap-2 w-full">
        <input
          type="text"
          value={minPrice} // Fixed minPrice input
          readOnly // Make it read-only since it should not be changed
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
