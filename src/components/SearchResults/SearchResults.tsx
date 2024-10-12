"use client"
import React, { useState } from 'react';
import SearchHeader from './SearchHeader';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import ResponsiveFilterSidebar from './ResponsiveSidebar';

const SearchResults: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size (for simplicity, based on a 768px breakpoint)
  React.useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-7 w-full max-w-[1040px] max-md:max-w-full">
      <SearchHeader searchTerm={""} resultCount={0} />
      <div className="flex gap-5 max-md:flex-col">
        {!isMobile ? (
          <>
            <FilterSidebar />
          </>
        ) : (
          <ResponsiveFilterSidebar />
        )}
        <ProductGrid />
      </div>
    </div>
  );
};

export default SearchResults;
