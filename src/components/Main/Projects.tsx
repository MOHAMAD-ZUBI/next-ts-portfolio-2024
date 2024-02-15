import React from 'react'
import ProjectCard from '../Reusable/ProjectCard'
import {Project} from '../../ConstantData'

type Props = {}



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