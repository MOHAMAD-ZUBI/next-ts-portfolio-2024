import { HeroData } from "@/ConstantData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      id="hero"
      className=" max-w-[1500px] mx-auto w-full text-white mt-[35px] px-[16px] "
    >
      <div className="flex flex-row-reverse">
        <div className="md:ml-[200px] md:mt-[200px] mt-[100px] max-w-[50%] max-md:max-w-md">
          <h1 className="text-xl font-fira">Hi, my name is </h1>
          <p className="mt-4 text-5xl font-bold font-fira text-primaryText">
            {HeroData.name}{" "}
          </p>
          <p className="mt-2 text-5xl font-bold font-fira text-primaryText/80 tracking-tighter">
            {HeroData.desc1}{" "}
          </p>
          <div className="mt-6 text-lg font-fira text-white">
            <span> {HeroData.desc2} </span>{" "}
            <span className=" hover:border-b-2 text-primaryText hover:border-primaryText ease-linear cursor-pointer">
              {HeroData.desc3}
            </span>{" "}
            <span>{HeroData.desc4}</span>
          </div>
          <div className="mt-12">
            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="p-4  bg-none border-2 border-primaryText  hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] duration-500 ease-out text-primaryText rounded-lg"
            >
              Donwload my resume !
            </a>
          </div>
        </div>
        <Image
          src="/me.jpg"
          alt="hero"
          width={300}
          height={300}
          className="rounded-full w-full md:ml-[200px] md:mt-[200px] mt-[100px] max-w-[50%] max-md:hidden hover:shadow-md ease-linear duration-300 hover:shadow-primaryText/80"
        />
      </div>
    </div>
  );
};

export default Hero;
