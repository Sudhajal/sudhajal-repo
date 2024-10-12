"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SortOption {
  label: string;
  value: string;
}

interface SortDropdownProps {
  label: string;
  value: string;
  options?: string[];
  onSelect?: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ label, value, options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div 
        className="flex overflow-hidden gap-1 justify-center items-center py-1 pr-1 pl-3 bg-white rounded-md border border-solid border-zinc-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-2 items-center self-stretch my-auto">
          <div className="self-stretch my-auto text-gray-400">{label}</div>
          <div className="self-stretch my-auto text-gray-800">{value}</div>
        </div>
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-1 z-10 w-48 border border-gray-200">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect?.(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SortDropdown