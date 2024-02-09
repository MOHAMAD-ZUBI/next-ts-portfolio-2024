import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' max-w-[1500px] w-full text-white mt-[35px] px-[16px] '>
        <div className='md:ml-[400px] md:mt-[200px] mt-[100px] max-w-md'>
            <h1 className='text-2xl font-fira'>Hello, there</h1>
            <p className="mt-8 text-3xl font-fira text-primaryText">I am a Full-Stack developer</p>
            <p className="mt-6 text-lg font-fira text-primaryText">I’m a software engineer from Syria specialized in building Web & Mobile Apps. I also love designing them to create vibrant UI experiences. In the past few month I focused on personal project to upgrade my skills and be more efficiant.</p>
            <button className='p-4 bg-none border-2 border-primaryText mt-8 text-primaryText rounded-lg'>Download my resume !</button>
        </div>
    </div>
  )
}

export default Hero