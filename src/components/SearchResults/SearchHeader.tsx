import React from "react";
import SortDropdown from "./SortDropdown";
import { SortOption } from "./types";

interface SearchHeaderProps {
  searchTerm: string;
  resultCount: number;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({  searchTerm,
  resultCount,
}) => {
  const sortOptions: SortOption[] = [
    { label: "Sort by", value: "all" },
    { label: "Sort by", value: "Model type" },
  ];
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-7 w-full max-w-[1040px] max-md:max-w-full">
    <h2 className="text-2xl font-semibold tracking-tight leading-none text-blue-700">
      Found {resultCount} results for{" "}
      <span className="text-blue-700">{searchTerm}</span>
    </h2>
    <div className="flex gap-5 text-sm tracking-normal leading-6">
      {sortOptions.map((option, index) => (
        <SortDropdown key={index} label={option.label} value={option.value} />
      ))}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c97949c4d10d7152146d7a83baa8e41705d980512479774dc7b82e626deb8f7d?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
        alt="Additional sorting options"
        className="object-contain shrink-0 w-16 rounded-none aspect-[2]"
      />
    </div>
  </div>
  );
};

export default SearchHeader;
