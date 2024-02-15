import React from 'react'
import ExperinceCard from '../Reusable/ExperinceCard'
import {ExperienceData} from "../../ConstantData"



type Props = {

}

const Experience = (props: Props) => {
  return (
    <div id='exp' className='w-full overflow-x-hidden'>
        <div className='max-w-[1500px] w-full mt-[150px] mx-auto px-[16px] py-[16px]'>
        <div className='flex flex-row items-center md:ml-[200px]  gap-[15px]'>
            <h1 className=' font-fira text-2xl text-primaryText'>02.</h1>
            <h2 className='text-white font-fira text-2xl font-bold md:text-3xl'>Experience</h2>
            <div className=' bg-slate-500 md:max-w-[250px] max-w-[100px] w-full h-[1px]'></div>
            
        </div>
        {ExperienceData.map((exp) => {
            return <ExperinceCard additionalLinks={[]} company={exp.company} companyInfo={exp.companyInfo} date={exp.date} desc={exp.desc}
                tech={exp.tech} title={exp.title} link={exp.link}
            />
        })}
        </div>
    </div>
  )
}

export default Experience