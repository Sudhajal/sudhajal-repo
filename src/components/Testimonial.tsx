import React from "react";
import Image from "next/image";
const Testimonial: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-16" style={{ backgroundColor: '#E9EEFC' }}>


    
    
   
      
      {/* Testimonial Content */}
      <div className="flex z-10 flex-col self-stretch my-auto min-w-[240px] w-full md:w-[535px]">
        <Image
          loading="lazy"
          src="/apostrophie.png"
          alt="Quote icon Sudhajal"
          className="object-contain w-9 aspect-[1.5]"
          width={9}
          height={12}
          />
        <div className="flex flex-col mt-8">
          <blockquote className="text-xl font-medium text-neutral-800">
            "People Now Realize the True Value of Good Service"
          </blockquote>
          <p className="mt-4 text-base leading-7 text-stone-500">
            "I've been using this water purifier service for over 5 years, and I'm very happy. The team is prompt, professional, and always ensures my purifier is functioning perfectly. The water quality has improved drastically, and I feel much safer knowing my family is drinking clean, pure water. Highly recommend their services!"
          </p>
        </div>
      </div>

      {/* img and Person Info */}
      <div className="relative z-10 flex flex-col self-stretch my-auto text-white rounded-2xl min-w-[240px] w-full md:w-[469px]">
        <div className="relative flex flex-col pt-52 md:pt-20 w-full rounded-2xl min-h-[281px]">
          <Image
            loading="lazy"
            src="/sachin.jpeg"
            alt="Sachin Bhosle Sudhajal"
            className="object-cover absolute inset-0 h-full w-full rounded-2xl"
            fill
            
            />
          <div className="relative flex flex-col items-start  pr-20  pl-8 mt-20 rounded-2xl bg-opacity-60">
            <div className="text-base font-semibold tracking-tight leading-none">
              Sachin Bhosle
            </div>
            <div className="mt-2 text-xs leading-5">
              Corporator. <br /> Panchavati Karanja, Nashik
            </div>
          </div>
        </div>
      </div>
    </div>
          
  );
};

export default Testimonial;
