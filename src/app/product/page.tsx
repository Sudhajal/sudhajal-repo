import SearchResults from '@/components/SearchResults/SearchResults';
import SubHeader from '@/components/SubHeader/SubHeader';
import React from 'react';
import Image from 'next/image'; // Ensure you import Image

const Page = () => {
  return (
    <div id="product" className="flex overflow-hidden flex-col items-center pt-2 bg-white">
      <div className="flex self-stretch mt-5 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
      <SubHeader />
      <SearchResults />
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          <Image
            src="/chat.png"
            alt="Chat Icon Sudhajal" // Add alt text for accessibility
            height={50}
            width={50}
          />
        </button>
      </div>
    </div>
  );
};

export default Page; // Updated to Page
