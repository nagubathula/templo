import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container flex flex-col gap-8 ">
      <div className="text-2xl ">Product Designer</div>
      <div className="text-7xl max-w-7xl ">
        Hi ! I am Satya Sai and I do make your products better.
        <span className="opacity-40">
          Let{"'"}s shape your brand into a masterpiece together.
        </span>{" "}
      </div>
      <div>
        <Link
          href="#_"
          className="relative inline-flex gap-4 items-center mt-6 px-8 py-6 overflow-hidden text-2xl font-medium bg-black text-white border-2 border-black rounded-full hover:text-black group hover:bg-gray-50 transition-all ease-in duration-300"
        >
          <div>
          Contact Me{" "}
          </div>
          <svg
            className="h-8 fill-white h-full -rotate-45 transition-all ease-in group-hover:rotate-0 group-hover:fill-black duration-300 "
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 14H24.34L13.17 2.83L16 0L32 16L16 32L13.17 29.17L24.34 18H0V14Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
