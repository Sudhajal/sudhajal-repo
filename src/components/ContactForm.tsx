
import Image from "next/image";
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div id="contactform"  className="flex flex-col justify-center p-2 mt-2.5 max-w-full w-[1437px]">
      <div className="flex flex-col justify-center items-center py-16 w-full min-h-[800px] max-md:max-w-full">
        <div className="flex flex-wrap flex-1 gap-4 justify-center max-w-full h-full w-[1105px]">
          <div className="flex flex-col justify-center items-center min-w-[240px] w-[543px] max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[400px]">
              <div className="flex flex-col w-full text-neutral-800">
                <h2 className="text-4xl font-semibold tracking-tighter leading-none">
                  Get in touch
                </h2>
                <p className="mt-4 text-sm font-medium leading-normal">
                  Our friendly team would love to hear from you.
                </p>
              </div>
              <form className="flex flex-col mt-10 w-full">
                <div className="flex gap-7 items-start w-full text-sm font-medium leading-normal">
                  <div className="flex flex-col flex-1 shrink basis-0">
                    <label htmlFor="firstName" className="text-gray-900">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
                      placeholder="First name"
                    />
                  </div>
                  <div className="flex flex-col flex-1 shrink basis-0">
                    <label htmlFor="lastName" className="text-gray-900">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-5 w-full text-sm font-medium leading-normal">
                  <label htmlFor="address" className="text-gray-900">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
                    placeholder="Address here, Nashik"
                  />
                </div>
                <div className="flex flex-col mt-5 w-full text-sm font-medium leading-normal">
                  <label htmlFor="phone" className="text-gray-900">
                    Phone number
                  </label>
                  <div className="flex overflow-hidden mt-1.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
                    <div className="flex overflow-hidden justify-between items-center py-2.5 pr-2.5 pl-3.5 h-full text-gray-900 whitespace-nowrap">
                      <span className="self-stretch my-auto">IND</span>
                      <div className="flex shrink-0 self-stretch my-auto h-4 w-[17px]" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      className="flex-1 shrink gap-2 self-start py-2.5 pr-3.5 text-gray-500 min-w-[240px] bg-transparent border-none outline-none"
                      placeholder="+91 111 000-0000"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-5 w-full text-xs font-medium leading-none whitespace-nowrap min-h-[128px] text-slate-700">
                  <label htmlFor="message" className="mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex flex-1 gap-2 py-2 mt-1.5 w-full bg-white rounded-lg border border-gray-300 border-solid min-h-[106px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
                  />
                </div>
                <div className="flex gap-2.5 items-start mt-5 w-full h-[22px]">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="w-[17px] h-[17px] rounded-md border border-gray-300"
                  />
                  <label
                    htmlFor="agreement"
                    className="flex-1 shrink text-sm font-medium leading-5 text-gray-500 basis-0"
                  >
                    You agree abide discipline and politeness over the enquiry
                    which you would receive.
                  </label>
                </div>
                <button
                  type="submit"
                  className="flex items-start w-full rounded-lg mt-7 overflow-hidden flex-1 shrink gap-2 self-stretch px-4 py-2.5 bg-blue-700 text-white text-sm font-medium leading-normal min-w-[240px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
          <Image
            loading="lazy"
            src="/Image.png"
            alt="Contact illustration"
            className="object-contain flex-1 shrink w-full aspect-[0.82] basis-0 min-w-[240px] max-md:max-w-full"
            width={240}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
