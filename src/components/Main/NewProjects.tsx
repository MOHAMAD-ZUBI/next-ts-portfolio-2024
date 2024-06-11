import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { Project } from "@/ConstantData";

type Props = {};

const NewProjects = (props: Props) => {
  return (
    <div className="max-w-[1500px] w-full mt-[150px] mx-auto px-[16px] py-[16px]">
      <div className="flex flex-row items-center md:ml-[200px] gap-[15px] mb-12">
        <h1 className="font-fira text-2xl text-primaryText">03.</h1>
        <h2 className="text-white font-bold -tracking-wider font-fira text-2xl md:text-3xl">
          Some Things I’ve Built
        </h2>
      </div>
      <StickyScroll contentClassName="font-bold" content={Project} />
    </div>
  );
};

export default NewProjects;
