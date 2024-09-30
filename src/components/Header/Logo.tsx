
import React from "react";

const Logo: React.FC = () => {
  return (
    <div  className="flex gap-2.5">
      <Image
    
        loading="lazy"
        src="Group 7609.png"
        alt=""
        className="object-contain shrink-0 aspect-[1.02] w-[55px]"
      />
      <Image
        loading="lazy"
        src="Vector.png"
        alt=""
        className="object-contain shrink-0 my-auto max-w-full aspect-[4] w-[124px]"
      />
    </div>
  );
};

export default Logo;
