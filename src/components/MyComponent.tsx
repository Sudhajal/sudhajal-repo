"use client"
import React from "react";

import Testimonial from "./Testimonial";
import PricingPlans from "./PricingPlans";
import NewArrivals from "./NewArrivals";
import ContactForm from "./ContactForm";


import WaterService from "./WaterService/WaterService";

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
 <WaterService/>
      <Testimonial />
      <PricingPlans />
      <NewArrivals />
      <ContactForm />
    </div>
  );
};

export default MyComponent;
