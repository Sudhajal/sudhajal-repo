
import React from "react";

interface ContactInfoProps {
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email }) => {
  return (
    <div className="flex flex-col w-52 text-sm min-h-[86px]">
      <h3 className="font-bold">Contact us</h3>
      <div className="flex flex-col mt-3.5 w-full">
        <a href={`tel:${phone}`} className="hover:underline">
          {phone}
        </a>
        <a href={`mailto:${email}`} className="mt-1.5 hover:underline">
          {email}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
