"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const modelTypes = [
  "Basic", "Classic", "Gold", "Prime", "Advanced", "Premium", "Supreme",
];
const productTypes = [
  "Reverse Osmosis(RO) Machines", "Ultra voilet (UV) Machines",
  "Ultra Filteration (UF) Machines", "Alkylizer(s)",
];
const filterTypes = [
  "Sediment Filter", "Granular Activated Carbon (GAC)", 
  "Reverse Osmosis(RO) Membrane", "Carbon Block", "Ultra Filteration (UF)",
  "mineral filter", "Ultra voilet(UV) filter",
];

// Define types for CheckboxFilter props
interface CheckboxFilterProps {
  title: string;
  items: string[]; // Assuming items are string arrays
  category: keyof SelectedFiltersState; // Category should match the keys of selectedFilters
  selectedFilters: SelectedFiltersState;
  handleCheckboxChange: (category: keyof SelectedFiltersState, item: string) => void;
}

interface SelectedFiltersState {
  modelType: string[];
  productType: string[];
  filterType: string[];
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  title,
  items,
  category,
  selectedFilters,
  handleCheckboxChange,
}) => (
  <div className="flex flex-col mt-5 w-full">
    <div className="text-base font-semibold tracking-normal leading-relaxed text-gray-800">
      {title}
    </div>
    <div className="flex flex-col items-start mt-1.5 w-full">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2 items-start self-stretch mt-1 w-full">
          <div className="flex gap-2.5 items-start py-1 w-4">
            <input
              type="checkbox"
              id={`${category}-${index}`}
              checked={selectedFilters[category].includes(item)}
              onChange={() => handleCheckboxChange(category, item)}
              className="flex w-4 h-4 rounded border border-gray-400 border-solid bg-slate-50 min-h-[16px]"
            />
          </div>
          <label htmlFor={`${category}-${index}`} className="flex-1 shrink text-sm tracking-normal leading-6 text-gray-800 basis-0">
            {item}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const ResponsiveFilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>({
    modelType: [],
    productType: [],
    filterType: [],
  });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 30000 });

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (category: keyof SelectedFiltersState, item: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item],
    }));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= priceRange.min) {
      setPriceRange((prev) => ({ ...prev, max: value }));
    }
  };

  return (
    <div className="relative w-full md:w-1/4">
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-between w-full p-4 bg-gray-100 md:hidden"
      >
        Filters
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full bg-white shadow-lg md:shadow-none z-10 p-4 transition-all duration-300 ease-in-out`}>
        {/* Price Filter */}
        <div className="flex flex-col items-start gap-4 max-w-full w-[300px]">
          <div className="text-base font-semibold text-gray-800">Price ₹</div>
          <div className="flex justify-between w-full text-sm text-gray-600">
            <span>Min: ₹{priceRange.min}</span>
            <span>Max: ₹{priceRange.max}</span>
          </div>
          <input
            type="range"
            min={priceRange.min}
            max="30000"
            value={priceRange.max}
            onChange={handleMaxPriceChange}
            className="w-full"
          />
          <div className="flex gap-2 w-full">
            <input
              type="text"
              value={priceRange.min}
              readOnly
              placeholder="Min"
              aria-label="Minimum price"
              className="overflow-hidden grow px-3 py-1 text-sm text-gray-400 bg-white rounded-md border border-solid border-zinc-200 w-[104px]"
            />
            <input
              type="text"
              value={priceRange.max}
              onChange={handleMaxPriceChange}
              placeholder="Max"
              aria-label="Maximum price"
              className="overflow-hidden grow px-3 py-1 text-sm text-gray-400 bg-white rounded-md border border-solid border-zinc-200 w-[103px]"
            />
          </div>
        </div>

        {/* Checkbox Filters */}
        <CheckboxFilter title="Model type" items={modelTypes} category="modelType" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
        <CheckboxFilter title="Product type" items={productTypes} category="productType" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
        <CheckboxFilter title="Filter Types" items={filterTypes} category="filterType" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
      </div>
    </div>
  );
};

export default ResponsiveFilterSidebar;
