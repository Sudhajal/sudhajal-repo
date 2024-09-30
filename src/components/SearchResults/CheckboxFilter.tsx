
import React from "react";

interface CheckboxFilterProps {
  title: string;
  items: string[];
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col mt-5 w-full">
      <div className="text-base font-semibold tracking-normal leading-relaxed text-gray-800">
        {title}
      </div>
      <div className="flex flex-col items-start mt-1.5 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 items-start self-stretch mt-1 w-full"
          >
            <div className="flex gap-2.5 items-start py-1 w-4">
              <input
                type="checkbox"
                id={`${title.toLowerCase().replace(/\s+/g, "-")}-${index}`}
                className="flex w-4 h-4 rounded border border-gray-400 border-solid bg-slate-50 min-h-[16px]"
              />
            </div>
            <label
              htmlFor={`${title.toLowerCase().replace(/\s+/g, "-")}-${index}`}
              className="flex-1 shrink text-sm tracking-normal leading-6 text-gray-800 basis-0"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
