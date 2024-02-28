import Link from 'next/link';
import React from 'react'
import { FaCode } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { SlShareAlt } from "react-icons/sl";

type Props = {
    title : string;
    desc : string;
    tech : string[];
    link : string;
    github: string;
    img: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden  max-h-[700px] hover:scale-105 duration-200   shadow-lg bg-[#112240]/45">
            <div className=' flex flex-row justify-between'>
            <FaCode size={25} className='mb-[30px] mt-4 ml-4 text-primaryText ' />
            {props.github && props.link ? (
            <div className='flex flex-row'>
              <Link href={props.github} target='_blank'>
                <LuGithub size={25} className='mb-[30px] hover:text-primaryText duration-200 ease-in mt-4 mr-4' />
              </Link>
              <Link href={props.link} target='_blank'>
                <SlShareAlt size={25} className='mb-[30px] hover:text-primaryText duration-200 ease-in mt-4 mr-4' />
              </Link>
            </div>
          ) : props.github ? (
            <Link href={props.github} target='_blank'>
              <LuGithub size={25} className='mb-[30px] hover:text-primaryText duration-200 ease-in mt-4 mr-4' />
            </Link>
          ) : (
            <Link href={props.link} target='_blank'>
              <SlShareAlt size={25} className='mb-[30px] hover:text-primaryText duration-200 ease-in mt-4 mr-4' />
            </Link>
          )}
        </div>
            <div className='min-h-[360px]'>
            <div className="px-6 py-4 ">
              <div className="font-bold hover:text-primaryText duration-200 ease-in text-xl hover:cursor-pointer text-gray-300 mb-2">{props.title}</div>
              <p className="text-gray-400 hover:text-primaryText duration-200 ease-in text-base">
                {props.desc}
              </p>
            </div>
            <div className="px-6 flex flex-wrap justify-start gap-[3px] items-baseline pt-4 pb-2">
              {props.tech.map((tech) => {
                return <div className=' text-primaryText p-2 bg-primaryText/5 rounded-full text-sm'>#{tech}</div>
              })}
              
            </div>
            </div>
          </div>
  )
}

export default ProjectCard