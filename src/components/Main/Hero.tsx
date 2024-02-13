import Link from 'next/link'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' max-w-[1500px] mx-auto w-full text-white mt-[35px] px-[16px] '>
        <div className='md:ml-[200px] md:mt-[200px] mt-[100px] max-w-[50%] max-md:max-w-md'>
            <h1 className='text-2xl font-fira'>Hi, my name is </h1>
            <p className="mt-8 text-5xl font-fira text-primaryText">Mohamad Zubi. </p>
            <p className="mt-2 text-5xl font-fira text-primaryText">I Build things for the web. </p>
            <div className="mt-6 text-lg font-fira text-white">
            <span >I’m a software engineer from Syria </span> <span className=' hover:border-b-2 text-primaryText hover:border-primaryText ease-linear cursor-pointer'>specialized in building Web & Mobile Apps.</span> <span >I also love designing them to create vibrant UI experiences. In the past few month I focused on personal project to upgrade my skills and be more efficiant.</span>
            </div>
            <div className='mt-12'>
            <a href="/resume.pdf" target='_blank' download className='p-4  bg-none border-2 border-primaryText  hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] duration-500 ease-out text-primaryText rounded-lg'>Donwload my resume !</a>
            </div>
        </div>
    </div>
  )
}

export default Hero