import React from "react";
import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string; // Make className optional
  width: number;      // Add width prop
  height: number;     // Add height prop
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className = "", // Default to an empty string if not provided
  width,
  height,
}) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
      width={width}   // Provide width
      height={height} // Provide height
    />
  );
};
