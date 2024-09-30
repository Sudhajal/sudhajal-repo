
import React from "react"; 
import Image from "next/image";

const ProductInfo: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start self-stretch px-20 py-14 mt-1 w-full font-bold text-white bg-blue-700 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[973px]">
          <h1 className="text-5xl rotate-[2.023537094095494e-16rad] max-md:max-w-full max-md:text-4xl">
            5 Filter Kit With UV, UF, RO and sediment filters
          </h1>
          <nav className="flex gap-2.5 self-start mt-6 text-xl">
            <a href="/" className="grow rotate-[1.6081230200044232e-16rad]">
              Home
            </a>
            <Image
              loading="lazy"
              src="/rightarrow.svg"
              className="object-contain shrink-0 my-auto w-5 aspect-square"
              alt=""
              width={5}
              height={5}
            />
            <div className="flex gap-1.5">
              <a
                href="/shop"
                className="grow rotate-[1.6081230200044232e-16rad]"

              >
                Shop (All)
              </a>
              <Image
                loading="lazy"
                src="/rightarrow.svg"
                className="object-contain shrink-0 my-auto w-5 aspect-square"
                alt=""
                width={5}
                height={5}
              />
              <span className="basis-auto rotate-[1.6081230200044232e-16rad]">
                5 Filter Kit W ...
              </span>
            </div>
          </nav>
        </div>
      </div>
      <div className="mt-20 w-full max-w-[1040px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-5 max-md:max-w-full">
              <div className="flex overflow-hidden flex-col justify-center items-center px-14 bg-white rounded-3xl border border-sky-500 border-solid aspect-square shadow-[0px_3px_25px_rgba(0,173,237,0.3)] max-md:px-5 max-md:mr-1">
                <img
                  loading="lazy"
                  src="/product1.png"
                  className="object-contain w-full aspect-[0.81]"
                  alt="Main product img"
                 />
              </div>
              <div className="flex gap-2 mt-3 text-xs text-black whitespace-nowrap">
                <Image
                  loading="lazy"
                  src="/blur.png"
                  className="object-contain shrink-0 rounded-md aspect-[1.01] shadow-[0px_1px_6px_rgba(0,173,237,0.3)] w-[99px]"
                  alt="Product thumbnail 1"
                  width={5}
                  height={5}
                />
                <Image
                  loading="lazy"
                  src="/blur.png"
                  className="object-contain shrink-0 rounded-md aspect-[1.01] shadow-[0px_1px_6px_rgba(0,173,237,0.3)] w-[99px]"
                  alt="Product thumbnail 2"
                  width={5}
                  height={5}
                />
                <Image
                  loading="lazy"
                  src="/blur.png"
                  className="object-contain shrink-0 rounded-md aspect-[1.01] shadow-[0px_1px_6px_rgba(0,173,237,0.3)] w-[99px]"
                  alt="Product thumbnail 3"
                  width={5}
                  height={5}
                />
                <div className="overflow-hidden px-11 bg-white rounded-md border-sky-500 h-[99px] shadow-[0px_1px_6px_rgba(0,173,237,0.3)] w-[99px] max-md:px-5">
                  +2
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-5 max-md:max-w-full">
              <h2 className="text-3xl font-bold text-zinc-800 w-[416px]">
                5 Filter Kit With UV, UF, RO and sediment filters
              </h2>
              <p className="mt-2 text-sm text-zinc-800">
                Offers would be explained while enquiring.
              </p>
              <div className="flex gap-4 mt-4 max-w-full text-sm font-bold tracking-wide text-center w-[307px]">
                <button className="self-start px-6 py-3.5 text-white bg-blue-700 rounded-3xl border-sky-500 border-solid border-[0.833px] min-h-[41px] max-md:px-5">
                  Send Enquiry
                </button>
                <button className="flex justify-center items-center px-6 py-3 rounded-3xl border-sky-500 border-solid border-[0.833px] min-h-[42px] text-zinc-800 max-md:px-5">
                  <Image
                    loading="lazy"
                    src="/cart.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    alt=""
                    width={5}
                    height={5}
                  />
                  <div className="flex shrink-0 self-stretch my-auto w-1 bg-white bg-opacity-0 h-[18px]" />
                  <span className="self-stretch my-auto">Add To Cart</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center p-2.5 mt-5 max-w-full bg-red-50 rounded-xl w-[332px]">
                <div className="flex gap-9 justify-center items-center">
                  <div className="flex flex-col justify-center self-stretch my-auto text-sm leading-none text-center text-neutral-900">
                    <div className="flex gap-2 items-center font-medium whitespace-nowrap">
                      <Image
                        loading="lazy"
                        src="/star.svg"
                        className="object-contain shrink-0 self-stretch my-auto aspect-[4.88] w-[83px]"
                        alt="Rating stars"
                        width={83}
                        height={100}
                      />
                      <div className="self-stretch my-auto w-5">4.9</div>
                    </div>
                    <div className="self-start mt-2">243 reviews</div>
                  </div>
                  <Image
                    loading="lazy"
                    src="/line.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-0"
                    alt=""
                    width={5}
                    height={5}
                  />
                  <div className="flex flex-col justify-center items-center self-stretch my-auto w-[123px]">
                    <div className="flex gap-2 justify-center items-start w-36 max-w-full">
                      <div className="flex shrink-0 rounded-full border-2 border-pink-800 border-dashed bg-stone-400 h-[25px] w-[25px]" />
                      <div className="flex shrink-0 bg-blue-300 rounded-full h-[25px] w-[25px]" />
                      <div className="flex shrink-0 rounded-full bg-zinc-700 h-[25px] w-[25px]" />
                      <div className="flex shrink-0 bg-white rounded-full h-[26px] w-[26px]" />
                    </div>
                    <div className="text-sm leading-none text-center text-neutral-600">
                      Variations
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap self-stretch mt-7 w-full text-base font-medium tracking-normal text-black whitespace-nowrap max-md:max-w-full">
                <button className="gap-2.5 self-stretch px-2.5 py-1.5 text-white bg-blue-700 rounded-md w-[82px]">
                  Description
                </button>
                <button className="gap-2.5 self-stretch px-2.5 py-1.5 rounded-md w-[60px]">
                  Material
                </button>
                <button className="gap-2.5 self-stretch px-2.5 py-1.5 rounded-md w-[61px]">
                  Reviews
                </button>
              </div>
              <p className="self-stretch mt-5 text-base leading-6 text-neutral-700 max-md:max-w-full">
                This filter set includes five replacement filters for the
                PUREGEN quick-change
                <br />
                50 GPD 5-Stage Reverse Osmosis Water System, PROQ5-50.
                <br />
                The 5-filter kit includes all filters for the Pro-Q System:
                <br />
                <br />
                Stage 1: 5-micron Sediment Filter, QSF-25003. It has high
                chemical resistance; it removes dirt, sand, and rust. In fact,
                it removes any suspended matter (&gt;5 microns) from water, thus
                protecting the other filters. This filter is disposable.
                <br />
                <br />
                Stage 2: Granular Activated Carbon (GAC) Filter, QGA-25002. GAC
                filter removes chlorine and organic chemicals.
                <br />
                <br />
                Stage 3: 10-micron Carbon Block Filter, QCB-25001. This carbon
                filter takes out residual chlorine and organic chemicals before
                the water goes into the RO membrane/filter.
                <br />
                <br />
                Stage 4: 50 GPD Reverse Osmosis Membrane-Filter, QME-25050.
                <br />
                <br />
                Stage 5: Inline GAC Filter 2&quot;x10&quot; (does not include
                end fittings; use the same fittings from old filter or order
                2AME0404 )
                <br />
                <br />
                All five filters are changed once a year. To get the 4-filter
                kit without the Membrane (Stage 4), order RPL4-PROQ5-50.
                <br />
                <br />
                SKU: RPL5-PROQ5-50 ___ UPC: 852869004169
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
