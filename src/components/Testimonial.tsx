import React from "react";

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row relative gap-6 items-center py-20 px-5 md:px-20 mt-2.5 max-w-full bg-violet-100 min-h-[431px] shadow-[0px_3px_21px_rgba(0,0,0,0.25)]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-violet-100 h-full w-full" />
      
      {/* Testimonial Content */}
      <div className="flex z-10 flex-col self-stretch my-auto min-w-[240px] w-full md:w-[535px]">
        <Image
          loading="lazy"
          src="apostrophie.png"
          alt="Quote icon"
          className="object-contain w-9 aspect-[1.5]"
        />
        <div className="flex flex-col mt-8">
          <blockquote className="text-xl font-medium text-neutral-800">
            "People now recognise that having a good service means that something happens as a result."
          </blockquote>
          <p className="mt-4 text-base leading-7 text-stone-500">
            "I've been using this water purifier service for over 5 years, and I'm very happy. The team is prompt, professional, and always ensures my purifier is functioning perfectly. The water quality has improved drastically, and I feel much safer knowing my family is drinking clean, pure water. Highly recommend their services!"
          </p>
        </div>
      </div>

      {/* Image and Person Info */}
      <div className="relative z-10 flex flex-col self-stretch my-auto text-white rounded-2xl min-w-[240px] w-full md:w-[469px]">
        <div className="relative flex flex-col pt-52 md:pt-20 w-full rounded-2xl min-h-[281px]">
          <Image
            loading="lazy"
            src="BG.png"
            alt="Sachin Bhosle"
            className="object-cover absolute inset-0 h-full w-full rounded-2xl"
          />
          <div className="relative flex flex-col items-start pt-2 pr-20 pb-5 pl-8 rounded-2xl bg-opacity-60">
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
