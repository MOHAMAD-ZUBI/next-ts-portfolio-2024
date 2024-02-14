import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

type Props = {
    title : string;
    desc : string;
    company : string;
    companyInfo : string;
    tech : string[];
    date : string;
    link: string;
    additionalLinks : string[];
}

const ExperinceCard = (props: Props) => {
  return (
    <div className='flex flex-col justify-center mt-[50px] w-full items-start md:mx-[120px] gap-[30px]'>
            <div className='p-2 rounded-lg md:max-w-[60%] w-full hover:bg-primaryText/10 duration-400 ease-in-out border-l-2 border-white'>
                
                <div className="relative  pl-8 sm:pl-32 py-6 group ">
                <div className="font-caveat font-medium md:text-2xl text-md  text-gray-300 flex flex-row items-center mb-1 sm:mb-0"><span>{props.title} - {props.company}</span> <Link href={props.link} target='_blank'><MdArrowOutward className='mx-2 hover:text-primaryText duration-200 ease-in-out'/></Link></div>
                
                <div className="flex flex-col sm:flex-row mt-3 items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-primaryText sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primaryText after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 py-1 px-2 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{props.date}</time>
                    
                </div>
                
                <div className="text-slate-500  mt-2">{props.desc}</div>
                <div className='flex flex-row flex-wrap gap-[5px] mt-4'>
                    {props.tech.map((tech) => {
                        return <div className=' text-primaryText p-2 bg-primaryText/5 rounded-full text-sm'>{tech}</div>
                    })}
                </div>
                </div>
            </div>
        </div>
  )
}

export default ExperinceCard