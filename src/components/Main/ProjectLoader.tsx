"use client"
import React, {useState} from 'react'
import ProjectCard from '../Reusable/ProjectCard'
import {Project} from '../../ConstantData'

type Props = {}

const ProjectLoader = (props: Props) => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const maxProjectsToShow = 6;
    const toggleShowAllProjects = () => {
      setShowAllProjects(!showAllProjects);
    };
    return (
        <div id='work' className='w-full text-white mt-[150px] px-[16px] py-[16px] transition-all duration-900 ease-in-out'>
        <div className='flex flex-row items-center md:ml-[200px] gap-[15px]'>
            <h1 className='font-fira text-2xl text-primaryText'>03.</h1>
            <h2 className='text-white font-bold -tracking-wider font-fira text-2xl md:text-3xl'>Some Things I’ve Built</h2>
        </div>
        <div className='flex flex-row max-md:justify-center items-center h-full justify-center mt-[35px] gap-[15px] flex-wrap'>
            {Project.slice(0, showAllProjects ? Project.length : maxProjectsToShow).map((project) => (
            <ProjectCard desc={project.desc} link={project.link} img={project.img} title={project.title} tech={project.tech} github={project.github} key={project.title} />
            ))}
        </div>
        {Project.length > maxProjectsToShow && (
            <div className='flex justify-center mt-[38px]'>
            <button onClick={toggleShowAllProjects} className='p-4  bg-none border-2 border-primaryText  hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] duration-500 ease-out text-primaryText rounded-lg'>
            {showAllProjects ? 'Show Less' : 'Show More'}
            </button>
            </div>
        )}
    </div>
  )
}

export default ProjectLoader