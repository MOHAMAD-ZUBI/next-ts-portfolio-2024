import Image from 'next/image'
import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { DevInfo } from '@/ConstantData';

type Props = {}



const About = (props: Props) => {
  return (
    <div id='about' className='max-w-[1500px] mx-auto w-full text-white mt-[150px] px-[16px] py-[16px] '>
        <div className='flex flex-row items-center md:ml-[200px]  gap-[15px]'>
            <h1 className=' font-fira text-2xl text-primaryText'>01.</h1>
            <h2 className='text-white font-fira text-2xl font-bold md:text-3xl'>About Me</h2>
            <div className=' bg-slate-500 md:max-w-[250px] max-w-[100px] w-full h-[1px]'></div>
            
        </div>
        <div className='md:ml-[200px]  mt-[35px]  text-primaryText max-md:max-w-md  flex flex-row gap-2'>
        <div className=' text-gray-400'>
        <span className='text-lg font-fira md:max-w-[50%] max-w-[1000%]'>
        Hello! My name is </span> <span className='text-lg font-fira text-primaryText md:max-w-[50%] max-w-[1000%]'>{DevInfo.name} </span><p className='text-lg font-fira md:max-w-[50%] max-w-[1000%]'> {DevInfo.desc1}
            </p>
            <p className='text-lg mt-2 font-fira md:max-w-[50%] max-w-[1000%]'>
            {DevInfo.desc2}
            </p>
            <p className='text-lg mt-6 text-primaryText font-fira md:max-w-[50%] max-w-[1000%]'>Technologies I’ve been working with recently:</p>
            <div className='flex flex-row gap-[55px] mt-4 text-primaryText'>
              <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-row items-center'>
                  <IoMdArrowDropright />
                  <h1 className='text-white/70 hover:border-b-1 border-primaryText'>JavaScript (ES6+)</h1>
                </div>
                <div className='flex flex-row items-center'>
                  <IoMdArrowDropright />
                  <h1 className='text-white/70 hover:border-b-1 border-primaryText'>React</h1>
                </div>
                <div className='flex flex-row items-center'>
                  <IoMdArrowDropright />
                  <h1 className='text-white/70 hover:border-b-1 border-primaryText'>Node.js</h1>
                </div>
                
              </div>

              <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-row items-center'>
                  <IoMdArrowDropright />
                  <h1 className='text-white/70 hover:border-b-1 border-primaryText'>TypeScript</h1>
                </div>
                <div className='flex flex-row items-center'>
                  <IoMdArrowDropright />
                  <h1 className='text-white/70 hover:border-b-1 border-primaryText'>MongoDB</h1>
                </div>
                <div className='flex flex-row items-center'>
                  <IoMdArrowDropright />
                  <h1 className='text-white/70 hover:border-b-1 border-primaryText'>Laravel 9</h1>
                </div>
                
              </div>

            </div>
        </div>
           

        </div>

    </div>
  )
}

export default About