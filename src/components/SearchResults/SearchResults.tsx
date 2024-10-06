
import React from "react";
import SearchHeader from "./SearchHeader";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

const SearchResults: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-7 w-full max-w-[1040px] max-md:max-w-full">
      <SearchHeader searchTerm={""} resultCount={0} />
      <div className="flex gap-5 max-md:flex-col">
        <FilterSidebar />
        <ProductGrid />
      </div>
    </div>
  );
};

export default SearchResults;
