
import Link from "next/link";
import React from "react";
import Image from "next/image";

const ServiceFeatures: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-40 justify-center items-center self-end mt-12 max-md:mt-10 max-md:max-w-full">
      <Image
        loading="lazy"
        src="buble.png"
        alt="Water science illustration Sudhajal"
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.38] w-[153px]"
        width={153}
        height={5}
      />
      <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[503px] max-md:max-w-full">
        <h2 className="text-3xl leading-none max-md:max-w-full">
          Why to know water science?
        </h2>
        <p className="mt-9 w-full text-base leading-6 text-black max-md:max-w-full">
          We often trust popular brands because we believe they maintain a
          certain standard—like offering water with a TDS (Total Dissolved
          Solids) of 54 or higher, which many associate with a balanced mineral
          content. You might notice that mineral water at airports is pricier
          than regular bottles, reflecting the perceived value of those
          essential nutrients. Water is more than just a thirst-quencher; it's a
          complex element carrying vital minerals bound to H2O by ionized bonds,
          directly impacting your body's needs. In short, the right TDS balance
          can be the difference between thriving health and potential issues.
        </p>
        <div className="flex gap-5 justify-center items-center self-center mt-9 text-sm tracking-wide">
          <div className="self-stretch my-auto">
            Want to know more about water?
          </div>
          <button className="self-stretch px-6 py-3 my-auto rounded-3xl border-2 border-blue-700 border-solid min-h-[42px] max-md:px-5">
            Connect Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
