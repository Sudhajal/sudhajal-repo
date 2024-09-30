
import React from "react";
import Footer from "./Footer";

const FooterWrapper: React.FC = () => {
  const footerProps = {
    logoSrc:
      "/Group 7610.png",
    companyName: "Sudhajal",
    tagline: "The Epitone of purity",
    address:
      "8, Shri Ganpati Sankul, Nr. seeta Nursing Home Hospital , Ashok Stambh, Nashik - 422001",
    contactInfo: {
      phone: "+91 9545103200",
      email: "sudhajal.sscorp@gmail.com",
    },
    links: {
      getToKnow: ["About us", "Blog", "Privacy Policy"],
      customerSupport: ["FAQ", "Help", "Complaint"],
    },
  };

  return <Footer {...footerProps} />;
};

export default FooterWrapper;
