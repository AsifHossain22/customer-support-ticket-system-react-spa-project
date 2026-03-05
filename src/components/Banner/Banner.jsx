import React from "react";
import leftBG from "../../assets/images/bg-left.png";
import rightBG from "../../assets/images/bg-right.png";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-0 py-5 lg:py-20">
      <div className="flex items-center gap-4">
        {/* InProgressColumn */}
        <div className="relative overflow-hidden w-full lg:h-62.5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-lg py-5 lg:py-0">
          <img src={leftBG} className="absolute top-0 left-0" alt="" />
          <img src={rightBG} className="absolute top-0 right-0" alt="" />

          {/* Content */}
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white">
              <h2 className="text-xl lg:text-2xl">In-Progress</h2>
              <span className="text-3xl lg:text-6xl font-semibold mt-4">0</span>
            </div>
          </div>
        </div>

        {/* ResolvedColumn */}
        <div className="relative overflow-hidden w-full lg:h-62.5 bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-lg py-5 lg:py-0">
          <img src={leftBG} className="absolute top-0 left-0" alt="" />
          <img src={rightBG} className="absolute top-0 right-0" alt="" />

          {/* Content */}
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white">
              <h2 className="text-xl lg:text-2xl">Resolved</h2>
              <span className="text-3xl lg:text-6xl font-semibold mt-4">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
