import React from "react";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import LinkSection from "./LinkSection";
import { Url } from "next/dist/shared/lib/router/router";

interface FooterProps {
  logoSrc: string;
  companyName: string;
  tagline: string;
  companyHandle: string;
  address: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  links: {
    getToKnow: string[];
    customerSupport: string[];
  };
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  companyName,
  companyHandle,
  tagline,
  address,
  contactInfo,
  links,
}) => {
  return (
    <footer className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center w-full text-black bg-white min-h-[219px] shadow-[0px_-3px_21px_rgba(0,0,0,0.3)] pt-[3%]">
      {/* Logo Section */}
      <Logo
        src={logoSrc}
        companyName={companyName}
        tagline={tagline}
      />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-5 items-start w-full md:w-[914px] px-5 max-w-full">
        {/* Company Info */}
        <div className="flex flex-col min-h-[80px] min-w-[240px] w-full md:w-[341px]">
          <h2 className="text-2xl font-black leading-none">{companyHandle}</h2>
          <address className="mt-2 text-base font-light leading-6 not-italic">
            {address}
          </address>
        </div>

        {/* Contact Info */}
        <ContactInfo 
          phone={contactInfo.phone} 
          email={contactInfo.email} 
        />

        {/* Link Sections */}
        <LinkSection title="Get to know us" links={links.getToKnow}  />
        <LinkSection title="Customer support" links={links.customerSupport} />
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full text-center py-2 mt-12 text-lg text-white bg-black">
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
