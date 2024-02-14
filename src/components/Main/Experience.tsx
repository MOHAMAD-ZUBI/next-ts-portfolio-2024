import React from 'react'
import ExperinceCard from '../Reusable/ExperinceCard'

const data = [
    {
        title : "Full-Stack Developer",
        company: "Passioneurs",
        companyInfo: "Freelancers · Local freelancing platform",
        desc: "I worked at passioneurs as a freelance developer, where i managed to build more than 15+ websites/e-commerce stores.",
        additionalLinks : "",
        date: "Jan, 2023",
        tech : ["Laravel 9","Nodejs","Reactjs","WordPress","Wix","CSS","NextJs","MongoDB","Shopify"],
        link : "https://passioneurs.net/"
    },
    {
        title : "Full-Stack Developer",
        company: "RoadLogistics",
        companyInfo: "Freelancers · Local freelancing platform",
        desc: "I freelanced as a developer for RoadLogistics, crafting a website to highlight their services and a dedicated dashboard for SMS dispatch and tracking. Additionally, I seamlessly integrated their dashboard with ZID, an e-commerce platform, transforming it into a shipping application for store owners to purchase and utilize for delivery needs.",
        additionalLinks : "",
        date: "Jul, 2023",
        tech : ["Nodejs","Tailwind CSS","NextJs","MongoDB","Postman","Axios","ExpressJs","Wix"],
        link : ""
    },
    {
        title : "React-Native Developer",
        company: "Oxygen Technology",
        companyInfo: "Freelancers · Local freelancing platform",
        desc: "At Oxygen Technology, I collaborated with them under a contract as a React-Native developer. My responsibilities included developing a mobile app for a company called Esharti, along with additional work on the dashboard using Laravel 10.",
        additionalLinks : "",
        date: "Oct, 2023",
        tech : ["Laravel 10","React-Native","Tailwind CSS","Postman","Axios"],
        link : "https://o2.com.sa/"
    },
]


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
        {data.map((exp) => {
            return <ExperinceCard additionalLinks={[]} company={exp.company} companyInfo={exp.companyInfo} date={exp.date} desc={exp.desc}
                tech={exp.tech} title={exp.title} link={exp.link}
            />
        })}
        </div>
    </div>
  )
}

export default Experience