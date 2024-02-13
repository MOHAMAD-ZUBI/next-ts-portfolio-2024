import React from 'react'
import ProjectCard from '../Reusable/ProjectCard'

type Props = {}

const Project = [
    {
        desc : "This website is designed for users to browse and purchase supplements",
        title : "E-Commerce Website",
        tech : ["Next.js","Express.js","Node.js","MongoDB"],
        link : "https://github.com/MOHAMAD-ZUBI/MERN-Ecommerce",
        github: "https://github.com/MOHAMAD-ZUBI/MERN-Ecommerce"
    },
    {
        desc : "The project allows users to shorten long URLs into more manageable and shareable links. It provides a user-friendly interface for both shortening and redirecting URLs.",
        title : "URL Shortener",
        tech : ["Next.js","Express.js","Node.js","MongoDB"],
        link : "https://github.com/MOHAMAD-ZUBI/mern-urlshortner",
        github: "https://github.com/MOHAMAD-ZUBI/mern-urlshortner"
    },
    {
        desc : "The project is made for RoadLogistics company, the dashboard allows employees to send/track sms.",
        title : "Sms Tracking Dashboard",
        tech : ["Next.js","Express.js","Node.js","MongoDB"],
        link : "http://roadco-smstracking.online/",
        github: ""
    },
    {
        desc : "The project is made for Esharti company, the app allows usesrs to take courses about sign language. and particpate in online events.",
        title : "Esharti App",
        tech : ["React-Native","TailwindCSS"],
        link : "https://esharti.net/",
        github: ""
    },
    {
        desc : "This is my own start up, which is a website & mobile app that works exactly like hungerstation, allowing users to make online orders.",
        title : "Crave Corners",
        tech : ["React-Native","Laravel 9","Mysql", "PHP"],
        link : "https://cravecorners.com/",
        github: ""
    },
    {
        desc : "This project is my school senior project, which is a student automation system, allowing  students to manage their courses, grades, and attendance.",
        title : "KBUSYS",
        tech : ["React","Node.js","Express.js", "MongoDB"],
        link : "https://cravecorners.com/",
        github: "https://github.com/MOHAMAD-ZUBI/MERN-Student-Automation-System"
    }
]

const Projects = (props: Props) => {
  return (
    <div id='work' className=' max-w-[1500px] mx-auto w-full text-white mt-[150px] px-[16px] py-[16px]'>
        <div className='flex flex-row justify-center items-center  gap-[15px] '>
            <h1 className=' font-fira text-2xl text-primaryText'>02.</h1>
            <h2 className='text-white font-fira text-3xl'>Some Things I’ve Built</h2>
            
            
            </div>
        <div className='flex flex-row max-md:justify-center items-center md:ml-[200px] mt-[35px]  gap-[15px] flex-wrap'>
            
        {Project.map((project) => {
            return <ProjectCard desc={project.desc} link={project.link} title={project.title} tech={project.tech} github={project.github} key={project.title}/>
            const {title,desc,tech} = project;
        })}
        </div>
    </div>
  )
}

export default Projects