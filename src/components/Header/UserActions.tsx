"use client";
import React, { useState } from "react";
import Image from "next/image";

const UserActions: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="flex gap-2.5 items-center">
      {/* Search Section */}
      <div className="flex justify-center items-center">
        {!isSearchOpen ? (
          <button
            onClick={handleSearchToggle}
            className="p-2 py-4 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Open search bar"
          >
            <Image
              src="/search.svg"
              width={24} // Change width to number, not string
              height={24} // Change height to number, not string
              alt="Search icon"
            />
          </button>
        ) : (
          <form className="relative w-full max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full px-10 py-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-1/2 translate-y-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
              <button
                type="button"
                className="absolute left-2.5 bottom-1/2 translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handleSearchToggle}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Additional Icon Button */}
      <button
        className="flex justify-center items-center self-stretch px-2 my-auto bg-white bg-opacity-0 h-[42px] min-h-[41px] rounded-[31px] w-[42px]"
        aria-label="Additional user action"
      >
        <Image
          src="/wishlist.svg" // Replace with the actual path to your additional icon
          alt="Additional action icon"
          className="object-contain self-stretch my-auto w-6 aspect-[0.96]"
          width={24} // Adjust size as necessary
          height={24} // Adjust size as necessary
        />
      </button>

      {/* User Action Button 1 */}
      <button
        className="flex justify-center items-center self-stretch px-2 my-auto bg-white bg-opacity-0 h-[42px] min-h-[41px] rounded-[31px] w-[42px]"
        aria-label="User action 2"
      >
        <Image
          loading="lazy"
          src="/cart.svg"
          alt="User action icon"
          className="object-contain self-stretch my-auto w-6 aspect-[0.96]"
          width={24} // Adjust size as necessary
          height={24} // Adjust size as necessary
        />
      </button>

      {/* Sign In Button */}
      <button className="flex flex-col justify-center items-center self-stretch px-6 py-2 leading-6 text-center text-gray-800 bg-white rounded-md border border-solid border-zinc-200">
        <div className="self-stretch">Sign In</div>
      </button>
    </div>
  );
};

export default UserActions;
