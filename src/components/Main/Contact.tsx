"use client"
import React from 'react'
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import Link from 'next/link';

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id='contact' className='max-w-[1500px] mx-auto w-full text-white mt-[150px] px-[16px] py-[16px]'>
        <div className='flex flex-row items-center justify-center  gap-[15px]'>
            
        <h1 className=' font-fira text-2xl text-primaryText'>03.</h1>
            <h2 className='text-white font-fira text-3xl'>What’s Next?</h2>
           
            

        </div>
        <div className='mt-[55px]  text-primaryText max-md:max-w-md justify-center items-center  flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold text-gray-400'>Get In Touch</h1>
                    <p className='text-md mt-[10px] text-gray-300 text-center max-w-[640px]'>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question/request or just want to say hi, I’ll try my best to get back to you!</p>

                    <button onClick={() => window.location.href = 'mailto:mozubi128@hotmail.com'} className='py-4 px-6 bg-none border-2 border-primaryText mt-8 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] duration-500 ease-out text-primaryText rounded-lg'>Say Hello</button>
            </div>


            <div className='flex flex-col mt-[200px] gap-[5px] font-fira justify-center items-center'>
                <h1 className='text-gray-400'>Designed & Built by Mohamad Zubi.</h1>
                <Link href="https://brittanychiang.com/" target='_blank'><p className='text-gray-500'>Inspired by Brittany Chiang.</p></Link>

            </div>
            <div className='flex flex-row justify-center items-center gap-[10px] md:hidden mt-[20px] '>
                <Link target='_blank' href="https://github.com/MOHAMAD-ZUBI"> <LuGithub size={20} /> </Link>
                <Link target='_blank'  href="https://www.linkedin.com/in/mohamad-zubi/"><FiLinkedin size={20} /></Link>
                <Link target='_blank' href="https://twitter.com/sichiio"><TbBrandTwitter size={20} /></Link>
            </div>
            
            
    </div>
  )
}

export default Contact