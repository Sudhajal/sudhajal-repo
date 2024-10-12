
import React from "react";

interface TextBlockProps {
  content: string[];
}

export const TextBlock: React.FC<TextBlockProps> = ({ content }) => {
  return (
    <div className="flex flex-col items-start mt-9 w-full text-base leading-6 text-black max-md:max-w-full text-left">
      {content.map((paragraph, index) => (
        <div
          key={index}
          className={index > 0 ? "mt-3 max-md:max-w-full" : "max-md:max-w-full"}
        >
          {paragraph}
        </div>
      ))}
    </div>
  );
};
