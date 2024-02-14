import React from 'react'
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import Link from 'next/link';

type Props = {}

const StickyContact = (props: Props) => {
  return (
    <div>
        <div className='flex flex-col gap-[15px] text-white items-center fixed bottom-0 ml-4 max-md:hidden  left-0'>
        <Link className='hover:text-primaryText' target='_blank' href="https://github.com/MOHAMAD-ZUBI"> <LuGithub size={20} /> </Link>
                <Link className='hover:text-primaryText' target='_blank' href="https://www.linkedin.com/in/mohamad-zubi/"><FiLinkedin size={20} /></Link>
                <Link className='hover:text-primaryText' target='_blank' href="https://twitter.com/sichiio"><TbBrandTwitter size={20} /></Link>
                <h2 className='mt-[10px] w-[2px] bg-gray-500 h-[100px]'></h2>
            </div>
           
    </div>
  )
}

export default StickyContact