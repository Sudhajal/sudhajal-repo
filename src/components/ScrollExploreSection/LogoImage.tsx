
import React from "react";
import Image from "next/image";

interface LogoImageProps {
  src: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src }) => {
  return (
    <Image
      loading="lazy"
      src="/logo.png"
      alt="Company logo"
      className="object-contain max-w-full aspect-[1.01] w-[292px]"
      width={292}
      height={200}
    />
  );
};

export default LogoImage;
