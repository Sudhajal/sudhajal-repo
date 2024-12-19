"use client"
import React, { useState } from "react";
import Link from "next/link"; // Assuming you're using Next.js

interface NavItem {
  label: string;
  href: string;
  isActive: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Service Plans", href: "/#pricingplans", isActive: false },
  { label: "About Us", href: "/about", isActive: false },
  // { label: "Products", href: "/product", isActive: false },
  { label: "Connect Us", href: "/#contactform", isActive: false },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`text-sm font-bold tracking-wide text-center transition-colors duration-300 ${
              item.isActive ? "text-indigo-800" : "text-gray-700"
            } hover:text-blue-600`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (Toggled via button) */}
      {isOpen && (
        <div className="flex flex-col md:hidden space-y-4 mt-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-bold tracking-wide text-center transition-colors duration-300 ${
                item.isActive ? "text-indigo-800" : "text-gray-700"
              } hover:text-blue-600`}
              onClick={toggleMenu} // Close the menu when an item is clicked
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
