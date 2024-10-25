import React from "react";
import PricingCard from "./PricingCard";
import Image from "next/image";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  period: string;
  features: { icon: string; text: string; className: string }[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Freebie (Service call)",
    description:
      "A normal service call where you can get notified for the service through call within 48 hours",
    price: "₹450",
    period: "Service",
    features: [
      { icon: "/cross.svg", text: "₹1050 worth of spares free!", className: "text-gray-900 text-opacity-40"},
      { icon: "/cross.svg", text: "Get Elbow, connectors, pipe (5mtrs).", className: "text-gray-900 text-opacity-40" },
      { icon: "/cross.svg", text: "Spun Filter and sediment filter", className: "text-gray-900 text-opacity-40" },
      { icon: "/cross.svg", text: "3 Compulsory service", className: "text-gray-900 text-opacity-40" },
      { icon: "/cross.svg", text: "2 Emergency service worth ₹450+ free", className: "text-gray-900 text-opacity-40" },
      { icon: "/check.svg", text: "No toll free numbers! 1 call service available.", className: "" },
      { icon: "/check.svg", text: "Instant Access to our service system", className: "" },
      { icon: "/check.svg", text: "Get notified for every move", className: "" },
    ],
  },
  {
    title: "RO services",
    description:
      "A combo service pack Ideal for domestic services who need personalized care for domestic purifiers.",
    price: "₹3000",
    period: "Year",
    features: [
      { icon: "/check.svg", text: "₹1050 worth of spares free!", className: "" },
      { icon: "/check.svg", text: "Get Elbow, connectors, pipe (5mtrs).", className: "" },
      { icon: "/check.svg", text: "Spun Filter and sediment filter", className: "" },
      { icon: "/check.svg", text: "3 Compulsory service", className: "" },
      { icon: "/check.svg", text: "2 Emergency service worth ₹450+ free", className: "" },
      { icon: "/check.svg", text: "No toll free numbers! 1 call service available.", className: "" },
      { icon: "/check.svg", text: "Instant Access to our service system", className: "" },
      { icon: "/check.svg", text: "Get notified for every move", className: "" },
    ],
    isPopular: true,
  },
  {
    title: "UV/UF/UV+UF services",
    description:
      "A combo service pack ideal for domestic services who need personalized care for domestic purifiers.",
    price: "₹2000",
    period: "Year",
    features: [
      { icon: "/check.svg", text: "₹700 worth of spares free!", className: "" },
      { icon: "/check.svg", text: "Get Elbow, connectors, pipe (5mtrs).", className: "" },
      { icon: "/check.svg", text: "1 Free Multilayer Candle", className: "" },
      { icon: "/check.svg", text: "3 Compulsory service", className: "" },
      { icon: "/check.svg", text: "2 Emergency service worth ₹450+ free", className: "" },
      { icon: "/check.svg", text: "No toll free numbers! 1 call service available.", className: "" },
      { icon: "/check.svg", text: "Instant Access to our service system", className: "" },
      { icon: "/check.svg", text: "Get notified for every move", className: "" },
    ],
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div id="pricingplans" className="flex flex-col items-center px-6 md:px-28 py-12 mt-2.5 w-full bg-white rounded max-md:max-w-full">
      <div className="flex flex-col justify-center max-w-full text-center w-full md:w-[472px]">
        <h2 className="text-3xl font-bold">
          <span className="text-zinc-900">Powerful service features for </span>
          <span>Domestic services</span>
        </h2>
        <p className="self-center mt-3.5 text-lg text-zinc-900">
          Choose a plan that's right for you
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-12 max-w-full w-full md:w-[1033px] max-md:mt-10">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 items-center px-4 md:px-8 py-6 mt-12 w-full md:w-[1033px] bg-blue-600 rounded max-md:mt-10">
        <div className="flex flex-col flex-1 justify-center text-center md:text-left">
          <h3 className="text-xl font-semibold text-white capitalize">
            Looking for Industry solutions?
          </h3>
          <p className="mt-1 text-lg text-white text-opacity-80">
            Click here & connect us to know about discounts and offers
          </p>
        </div>
        <div className="bg-blue-900">
          <form className="flex flex-1 gap-2 items-center py-2 pl-3 pr-10 rounded min-h-[40px]">
            <Image
              loading="lazy"
              src="/arrow.svg"
              alt=""
              className="w-5 h-5 object-contain"
              width={5}
              height={5}
            />
            <label htmlFor="contactNumber" className="sr-only">
              Enter your contact number
            </label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter your contact number"
              className="flex-1 bg-transparent text-white border-none outline-none py-4"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-emerald-700 font-semibold rounded transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
