
import React from "react";

const Location: React.FC = () => {
  return (
    <div className="flex grow shrink gap-10 items-center self-stretch my-auto whitespace-nowrap w-[106px]">
      <div className="flex overflow-hidden flex-col items-center self-stretch px-2 my-auto rounded">
        <div className="flex overflow-hidden gap-2 items-start">
          <Image
            loading="lazy"
            src="/location.svg"
            alt=""
            className="object-contain shrink-0 aspect-square w-[25px]"
          />
          <div>Panchavati</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
