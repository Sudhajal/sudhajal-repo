
import React from "react";
import PricingCard from "./PricingCard";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Freebie (Service call)",
    description:
      "A normal service call where you can get notified for the service through call within 48 hours",
    price: "₹450",
    period: "service",
    features: [
      "₹1050 worth of spares free!",
      "Get Elbow, connectors, pipe (5mtrs).",
      "Spun Filter and sediment filter",
      "3 Compulsory service",
      "2 Emergency service worth ₹450+ free",
      "No toll free numbers! 1 call service available.",
      "Instant Access to our service system",
      "Get notified for every move",
    ],
  },
  {
    title: "RO services",
    description:
      "A combo service pack Ideal for domestic services who need personalized care for domastic purifiers.",
    price: "₹2500",
    period: "Yr",
    features: [
      "₹1050 worth of spares free!",
      "Get Elbow, connectors, pipe (5mtrs).",
      "Spun Filter and sediment filter",
      "3 Compulsory service",
      "2 Emergency service worth ₹450+ free",
      "No toll free numbers! 1 call service available.",
      "Instant Access to our service system",
      "Get notified for every move",
    ],
    isPopular: true,
  },
  {
    title: "UV/UF/UV+UF services",
    description:
      "A combo service pack ideal for domestic services who need personalized care for domastic purifiers",
    price: "₹1500",
    period: "Year",
    features: [
      "₹1050 worth of spares free!",
      "Get Elbow, connectors, pipe (5mtrs).",
      "Spun Filter and sediment filter",
      "3 Compulsory service",
      "2 Emergency service worth ₹450+ free",
      "No toll free numbers! 1 call service available.",
      "Instant Access to our service system",
      "Get notified for every move",
    ],
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div id="pricingplans" className="flex flex-col items-center px-6 md:px-28 py-12 mt-2.5 w-full bg-white rounded max-md:max-w-full">
      <div className="flex flex-col justify-center max-w-full text-center w-full md:w-[472px]">
        <h2 className="text-3xl font-bold">
          <span className="text-zinc-900">Powerful service features for </span>
          <span className="">Domestic services</span>
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
      <div className="flex flex-wrap gap-4 items-center px-4 md:px-8 py-6 mt-12 w-full md:w-[1033px] bg-blue-700 rounded max-md:mt-10">
        <div className="flex flex-col flex-1 justify-center text-center md:text-left">
          <h3 className="text-xl font-semibold text-white capitalize">
            Looking for Industry solutions?
          </h3>
          <p className="mt-1 text-lg text-white text-opacity-80">
            Click here & connect us to know about discounts and offers
          </p>
        </div>
        <form className="flex flex-1 gap-2 items-center py-2 pl-3 pr-10 rounded min-h-[40px]">
          <img
            loading="lazy"
            src="/arrow.svg"
            alt=""
            className="w-5 h-5 object-contain"
          />
          <label htmlFor="contactNumber" className="sr-only">
            Enter your contact number
          </label>
          <input
            type="tel"
            id="contactNumber"
            placeholder="Enter your contact number"
            className="flex-1 bg-transparent text-white border-none outline-none"
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
  );
};

export default PricingPlans;
