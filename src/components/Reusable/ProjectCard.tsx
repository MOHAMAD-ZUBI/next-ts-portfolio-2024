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
}

const ProjectCard = (props: Props) => {
  return (
    <div className='min-w-[300px] max-w-[400px] w-full bg-gray-600 rounded-lg p-2 flex flex-col min-h-[250px] h-full  '>
        <div className=' flex flex-row justify-between'>
            <FaCode size={25} className='mb-[30px] mt-4 ml-4' />
            {props.github? <Link href={props.github} target='_blank'><LuGithub size={25} className='mb-[30px] mt-4 mr-4' /></Link> : <Link href={props.link} target='_blank'><SlShareAlt size={25} className='mb-[30px] mt-4 mr-4 '/></Link>}
        </div>
        <div className='flex flex-col items-center justify-start h-full w-full'>
        <Link href={props.link} target='_blank  
            '><h1 className='text-2xl text-white font-fira font-semibold  text-start mb-[10px]'>{props.title}</h1></Link>
            <p className=' text-gray-300 text-sm font-fira tracking-tighter max-w-[90%] mb-[30px]'>{props.desc}</p>
            <div className='flex flex-row gap-[5px] text-xs text-gray-300'>
        {props.tech.map((tech, index) => (
            <React.Fragment key={index}>
                <p className='mx-[3px]'>{tech}</p>
                {index !== props.tech.length - 1 && '|'}
            </React.Fragment>
        ))}
    </div>
        </div>
    </div>
  )
}

export default ProjectCard