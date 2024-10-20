import React from "react";

interface BackgroundVideoProps {
  src: string;
}

const BackgroundImage: React.FC<BackgroundVideoProps> = ({ src }) => {
  return (
    <video
      autoPlay
      loop
    
      playsInline
      className="object-cover absolute inset-0 w-full h-full"
    >
      <source src="/sudhajal.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundImage;
