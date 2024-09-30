
import React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  className: string;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className,
}) => {
  return <Image loading="lazy" src={src} alt={alt} className={className} />;
};
