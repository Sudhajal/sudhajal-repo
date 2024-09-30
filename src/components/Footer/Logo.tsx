
import React from "react";
import Image from "next/image";

interface LogoProps {
  src: string;
  companyName: string;
  tagline: string;
}

const Logo: React.FC<LogoProps> = ({ src, companyName, tagline }) => {
  return (
    <div className="flex flex-col self-stretch my-auto h-[131px] w-[169px]">
      <Image
        loading="lazy"
        src="/Group 7610.png"
        alt={`${companyName} logo`}
        className="object-contain self-center "
        width={44}
        height={44}
      
      />
      <div className="flex flex-col justify-center mt-3 w-full">
        <div className="self-center text-2xl font-black leading-none text-center">
          {companyName}
        </div>
        <div className="text-lg font-light leading-loose text-right">
          {tagline}
        </div>
      </div>
    </div>
  );
};

export default Logo;
