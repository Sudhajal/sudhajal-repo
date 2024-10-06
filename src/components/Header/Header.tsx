import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserActions from "./UserActions";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-5 py-3 w-full bg-white shadow-md md:px-8 md:py-5 max-md:flex-col max-md:items-center ">
      {/* Logo Section */}
      <div className="flex-shrink-0 max-md:mb-3">
        <Logo />
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center gap-10 max-md:flex-col max-md:w-full max-md:gap-3">
        <Navigation />
        <div className="mt-0 max-md:mt-3">
          <UserActions />
        </div>
      </nav>
    </header>
  );
};

export default Header;
