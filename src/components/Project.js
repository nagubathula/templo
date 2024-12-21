import React from "react";
import Link from "next/link";

const Project = () => {
  return (
    <Link href="//project"
     className="group">
      <div className="relative rounded-2xl w-full aspect-video overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532036521863-eb1e79f117b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black p-6 rounded-full">
          <svg
            className="h-8 fill-white transition-all ease-in duration-300 -rotate-45 group-hover:rotate-0"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 14H24.34L13.17 2.83L16 0L32 16L16 32L13.17 29.17L24.34 18H0V14Z" />
          </svg>
        </div>
      </div>
      <div className="mt-4"
      >
        <div className="opacity-40 text-2xl">Company</div>
        <div className="text-3xl mt-2
        ">Project Name</div>
      </div>
    </Link>
  );
};

export default Project;
