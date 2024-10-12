"use client"
import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const Location: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locations = ["Panchavati", "Nashik Road", "College Road", "Cidco"];

  return (
    <div className="flex grow shrink gap-10 items-center self-stretch my-auto whitespace-nowrap w-[106px] relative">
      <div 
        className="flex overflow-hidden flex-col items-center self-stretch px-2 my-auto rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex overflow-hidden gap-2 items-start">
          <MapPin className="object-contain shrink-0 aspect-square w-[25px] text-blue-500" />
          <div>Panchavati</div>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-1 z-10 w-48">
          {locations.map((loc) => (
            <div 
              key={loc} 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {loc}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Location;