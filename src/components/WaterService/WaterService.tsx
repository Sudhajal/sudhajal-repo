import React from "react";
import { Button } from "./Button";
import { TextBlock } from "./TextBlock";
import { ImageComponent } from "./ImageComponent";
import Link from "next/link";

interface WaterServiceProps {}

export const WaterService: React.FC<WaterServiceProps> = () => {
  return (
    <div id="waterservice" className="bg-white flex flex-col p-4">
      {/* Main Header Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center text-center text-zinc-800 font-bold">
        <div className="flex gap-2.5 items-end w-full lg:w-[50%]">
          <div className="flex flex-col justify-center min-w-[240px] w-full lg:w-[547px]">
            <h1 className="text-3xl lg:text-4xl">
              <span>A service may be all what you need (</span>
              <span className="leading-10">Our Motive</span>
              <span>)</span>
            </h1>
            <TextBlock
              content={[
                "Water is not simply a drinkable element; it is also an essential component of our lives. Sudhajal, The Samruddhi Sales Corporation's dedication, has opted to prioritize 'servicing' in this industry.",
                "Pure water does more than quench your thirst—it fuels every function in your body. But the secret isn't just in how much you drink; it's in the quality of the water itself...",
              ]}
            />
            <Link href="#contactform">
              <Button text="Connect Us" />
            </Link>
          </div>
        </div>
        <ImageComponent
  src="/blob.png"
  alt="Water service illustration"
  className="object-contain w-full lg:w-[50%] mt-6 lg:mt-0 animate-blob"
  width={500} // Replace with actual width
  height={300} // Replace with actual height
/>
      </div>

      {/* Water Science Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-5 items-center">
        <div className="flex justify-center lg:justify-end w-full lg:w-6/12">
        <ImageComponent
  src="/buble.png"
  alt="Water science illustration"
  className="object-contain w-32 lg:w-[153px]"
  width={128}   // Set the width based on your design
  height={128}  // Set the height based on your design
/>

        </div>
        <div className="flex flex-col w-full lg:w-6/12 mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col justify-center w-full max-w-[503px] text-left">
              <h2 className="text-2xl lg:text-3xl leading-tight">
                Why to know water science?
              </h2>
              <TextBlock
                content={[
                  "We often trust popular brands because we believe they maintain a certain standard—like offering water with a TDS (Total Dissolved Solids) of 54 or higher...",
                ]}
              />
              <div className="flex gap-9 justify-center items-center mt-6 lg:mt-9 text-sm tracking-wide">
                <div className="self-stretch">
                  Want to know more about water?
                </div>
                <Link href="#contactform">
                  <Button text="Connect Us" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
