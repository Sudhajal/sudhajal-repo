
import React from "react";

interface LinkSectionProps {
  title: string;
  links: string[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col text-sm w-[174px]">
      <h3 className="font-bold">{title}</h3>
      <nav className="flex flex-col mt-3 w-full">
        {links.map((link, index) => (
          <a key={index} href="#" className="mt-1.5 first:mt-0 hover:underline">
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default LinkSection;
