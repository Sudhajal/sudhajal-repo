
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col justify-center max-w-full font-bold text-center min-h-[951px] text-zinc-800 w-[1029px]">
      <div className="flex gap-2.5 items-end w-full max-md:max-w-full">
        <div className="flex flex-col justify-center min-w-[240px] w-[547px] max-md:max-w-full">
          <h1 className="text-3xl max-md:max-w-full">
            A service may be all what you need (Our Motive)
          </h1>
          <div className="flex flex-col items-start mt-9 w-full text-base leading-6 text-black max-md:max-w-full">
            <p className="max-md:max-w-full">
              Water is not simply a drinkable element; it is also an essential
              component of our lives. Sudhajal, The Samruddhi Sales
              Corporation's dedication, has opted to prioritize 'servicing' in
              this industry.
            </p>
            <p className="mt-3 max-md:max-w-full">
              Pure water does more than quench your thirst—it fuels every
              function in your body. But the secret isn't just in how much you
              drink; it's in the quality of the water itself. With the right
              purification at home, you unlock a hidden essence, ensuring that
              every sip and every meal nourishes you in ways you might not even
              realize.
            </p>
          </div>
          <a href="#contactform" className="self-center px-6 py-3 mt-9 text-sm tracking-wide rounded-3xl border-2 border-blue-700 border-solid min-h-[42px] max-md:px-5">
    Connect Us
</a>
        </div>
        <Image
          loading="lazy"
          src="Color.png"
          alt="Water purification system"
          className="object-contain aspect-[1.18] min-w-[240px] w-[545px] max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default Header;
