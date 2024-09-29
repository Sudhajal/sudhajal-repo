import SearchResults from '@/components/SearchResults/SearchResults';
import SubHeader from '@/components/SubHeader/SubHeader';
import React from 'react'

const page = () => {
        return (
          <div className="flex overflow-hidden flex-col items-center pt-2 bg-white">
            
            <div className="flex self-stretch mt-5 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
            <SubHeader />
            <SearchResults />
           
          </div>
        );
      };

export default page