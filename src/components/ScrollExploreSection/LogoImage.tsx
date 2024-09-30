
import React from "react";

interface LogoImageProps {
  src: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src }) => {
  return (
    <img
      loading="lazy"
      src="/logo.png"
      alt="Company logo"
      className="object-contain max-w-full aspect-[1.01] w-[292px]"
    />
  );
};

export default LogoImage;
