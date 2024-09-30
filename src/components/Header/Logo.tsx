import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex gap-2.5">
      <Image
        loading="lazy"
        src="/Group 7609.png"
        alt="Logo part 1"
        className="object-contain shrink-0 aspect-[1.02]"
        width={55}   // Set width
        height={55}  // Set height
      />
      <Image
        loading="lazy"
        src="/Vector.png"
        alt="Logo part 2"
        className="object-contain shrink-0 my-auto aspect-[4]"
        width={124}  // Set width
        height={31}  // Set height
      />
    </div>
  );
};

export default Logo;
