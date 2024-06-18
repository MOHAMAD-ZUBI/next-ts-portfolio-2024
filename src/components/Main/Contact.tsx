"use client";
import React, { useEffect, useState } from "react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import Link from "next/link";
import { getInTouch } from "@/ConstantData";
import { RiStarLine } from "react-icons/ri";
import { LuGitFork } from "react-icons/lu";

type Props = {};

const Contact = (props: Props) => {
  const [repoInfo, setRepoInfo] = useState({ forks: 0, stars: 0 });
  const owner = "MOHAMAD-ZUBI";
  const repo = "next-ts-portfolio-2024";

  useEffect(() => {
    const fetchRepoInfo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repository information");
        }
        const data = await response.json();
        const repoInfo = {
          forks: data.forks_count,
          stars: data.stargazers_count,
        }; // Parse the response
        console.log(repoInfo.stars);
        setRepoInfo(repoInfo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepoInfo(); // Call the function to fetch repository info when the component mounts
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${getInTouch.email}`;
    }
  };
  return (
    <div
      id="contact"
      className="max-w-[1500px] mx-auto w-full text-white mt-[150px] px-[16px] py-[16px]"
    >
      <div className="flex flex-row items-center justify-center  gap-[15px]">
        <h1 className=" font-fira text-2xl text-primaryText">04.</h1>
        <h2 className="text-white font-fira text-2xl font-bold md:text-3xl">
          What’s Next?
        </h2>
      </div>
      <div className="mt-[55px]  text-primaryText max-md:max-w-md justify-center items-center  flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-gray-400">Get In Touch</h1>
        <p className="text-md mt-[10px] text-gray-300 text-center max-w-[640px]">
          {getInTouch.desc}
        </p>

        <div className="flex flex-row gap-12 justify-center items-center mt-2">
          <div>
            <div
              onClick={handleClick}
              className="relative inline-flex items-center justify-center max-md:py-3 max-md:px-6  px-10 py-4 overflow-hidden hover:cursor-pointer font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Email me</span>
            </div>
          </div>
          <div>
            <Link
              href="https://mohamad-zubi.youcanbook.me/"
              target="_blank"
              className="relative inline-flex items-center justify-center px-10 py-4 max-md:py-3 max-md:px-6 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Book a meeting</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[200px] gap-[5px] font-fira justify-center items-center">
        <h1 className="text-gray-400">Designed & Built by Mohamad Zubi.</h1>
        <Link href="/">
          <p className="text-gray-500">Inspired by Brittany Chiang.</p>
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-[10px] md:hidden mt-[20px] ">
        <Link target="_blank" href={getInTouch.github}>
          {" "}
          <LuGithub size={20} />{" "}
        </Link>
        <Link target="_blank" href={getInTouch.linkedin}>
          <FiLinkedin size={20} />
        </Link>
        <Link target="_blank" href={getInTouch.twitter}>
          <TbBrandTwitter size={20} />
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-[15px] mt-4 text-gray-400 ">
        <Link
          href="https://github.com/MOHAMAD-ZUBI/next-ts-portfolio-2024"
          target="_blank"
        >
          <div className="flex flex-row gap-[5px] hover:text-primaryText items-center">
            <RiStarLine size={16} />
            <h1 className="text-sm">{repoInfo.stars}</h1>
          </div>
        </Link>
        <Link
          href="https://github.com/MOHAMAD-ZUBI/next-ts-portfolio-2024"
          target="_blank"
        >
          <div className="flex flex-row gap-[5px] hover:text-primaryText items-center">
            <LuGitFork size={16} />
            <h1 className="text-sm">{repoInfo.forks}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
