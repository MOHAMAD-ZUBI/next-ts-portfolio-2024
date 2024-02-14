import React from 'react'
import ProjectCard from '../Reusable/ProjectCard'

type Props = {}

const Project = [
    {
        desc : "E-Commerce Supplements Website project! This website is designed for users to browse and purchase supplements. It is built using Node.js, Express.js, MongoDB for the backend, and TypeScript with Next.js for the frontend.",
        title : "E-Commerce Website",
        tech : ["Next.js","Express.js","Node.js","MongoDB"],
        link : "https://github.com/MOHAMAD-ZUBI/MERN-Ecommerce",
        github: "https://github.com/MOHAMAD-ZUBI/MERN-Ecommerce",
        img: "/esharti-app.png"
    },
    {
        desc : "The project offers users the ability to condense lengthy URLs into concise and shareable links. It features a user-friendly interface for effortlessly shortening and redirecting URLs.",
        title : "URL Shortener",
        tech : ["Next.js","Express.js","Node.js","MongoDB"],
        link : "https://github.com/MOHAMAD-ZUBI/mern-urlshortner",
        github: "https://github.com/MOHAMAD-ZUBI/mern-urlshortner",
        img: "/esharti-app.png"
    },
    {
        desc : "The project is made for RoadLogistics company, the dashboard allows employees to send/track sms.",
        title : "SMS Tracking Dashboard: Monitoring and Analytics Platform",
        tech : ["Next.js","Express.js","Node.js","MongoDB"],
        link : "http://roadco-smstracking.online/",
        github: "",
        img: "/esharti-app.png"
    },
    {
        desc : "The project is made for Esharti company, the app allows usesrs to take courses about sign language. and particpate in online events.",
        title : "Esharti App",
        tech : ["React-Native","TailwindCSS"],
        link : "https://esharti.net/",
        github: "",
        img: "/esharti2.png"
    },
    {
        desc : "As the founder of my own startup, I've developed a website and mobile app akin to established food delivery platforms. This venture enables users to conveniently make online orders, track their orders, reorder items, and explore nearby restaurants.",
        title : "Crave Corners: A Robust Food Delivery Platform - Website and Mobile App",
        tech : ["React-Native","Laravel 9","Mysql", "PHP"],
        link : "https://cravecorners.com/",
        github: "",
        img: "/esharti-app.png"
    },
    {
        desc : "Crafted for my school's senior project, this system acts as a comprehensive student automation platform, empowering students to efficiently manage their academic journey by overseeing courses, grades, and attendance.",
        title : "Student Automation System - Web Application",
        tech : ["React","Node.js","Express.js", "MongoDB"],
        link : "https://cravecorners.com/",
        github: "https://github.com/MOHAMAD-ZUBI/MERN-Student-Automation-System",
        img: "/esharti-app.png"
    }
]

const Projects = (props: Props) => {
  return (
    <div id='work' className='   w-full text-white mt-[150px] px-[16px] py-[16px] transition-all duration-900 ease-in-out'>
        <div className='flex flex-row items-center md:ml-[200px]  gap-[15px]'>
            <h1 className=' font-fira text-2xl text-primaryText'>03.</h1>
            <h2 className='text-white font-bold -tracking-wider font-fira text-2xl md:text-3xl'>Some Things I’ve Built</h2>
            
            
            </div>
        <div className='flex flex-row max-md:justify-center items-center h-full justify-center mt-[35px]  gap-[15px] flex-wrap'>
            
        {Project.map((project) => {
            return <ProjectCard desc={project.desc} link={project.link} img={project.img} title={project.title} tech={project.tech} github={project.github} key={project.title}/>
            const {title,desc,tech} = project;
        })}
        </div>
    </div>
  )
}

export default Projects