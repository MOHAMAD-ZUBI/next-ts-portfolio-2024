import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className=' max-w-[1536px]  h-[66px] border-b-2 border-[#64FFDA]'>
        <div className='flex flex-row justify-between w-full h-full px-[16px] items-center text-white'>
            <div className='text-[#64FFDA] text-2xl font-fira'>
                <Link href="/"> ./Mohamad </Link>
            </div>
            <div className='flex flex-row gap-8 max-md:hidden font-fira'>
                <Link href="#"><h1><span className='text-[#64FFDA] font-fira'>01. </span>Portfolio</h1></Link>
                <Link href="#"><h1><span className='text-[#64FFDA] font-fira' >02. </span>Projects</h1></Link>
                <Link href="#"><h1><span className='text-[#64FFDA] font-fira'>03. </span>Experince</h1></Link>
                <Link href="#"><h1><span className='text-[#64FFDA] font-fira'>04. </span>Contact</h1></Link>
            </div>
        </div>
    </div>
  )
}

export default Header