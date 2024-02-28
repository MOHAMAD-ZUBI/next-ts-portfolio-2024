import { DevInfo } from '@/ConstantData'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className=' max-w-[1536px] mx-auto h-[66px] border-b-2 border-[#64FFDA]'>
        <div className='flex flex-row justify-between w-full h-full px-[16px] items-center text-white'>
            <div className='text-[#64FFDA] text-2xl font-fira'>
                <Link href="/"> ./{DevInfo.name} </Link>
            </div>
            <div className='flex flex-row gap-8 max-md:hidden font-fira'>
                <Link href="#about"><h1><span className='text-[#64FFDA] font-fira'>01. </span>About</h1></Link>
                <Link href="#exp"><h1><span className='text-[#64FFDA] font-fira' >02. </span>Experience</h1></Link>
                <Link href="#work"><h1><span className='text-[#64FFDA] font-fira' >03. </span>Work</h1></Link>
                <Link href="#contact"><h1><span className='text-[#64FFDA] font-fira'>04. </span>Contact</h1></Link>
                <Link href="/blog" ><h1><span className='text-[#64FFDA] font-fira'>05. </span>Blog</h1></Link>
            </div>
            <div className='md:hidden font-fira text-xl '>
              <Link href="/blog" ><h1 className=' text-md'><span className='text-[#64FFDA] font-fira'></span>Blog</h1></Link>  
            </div>
        </div>
    </div>
  )
}

export default Header