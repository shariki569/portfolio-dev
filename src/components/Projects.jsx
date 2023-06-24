import React from 'react'
import ProjectItem from './ProjectItem'
import mitProject from '../assets/projects1.png';
import modelProject from '../assets/projects2.png';
import movieProject from '../assets/projects3.jpg';
import artWebsite from '../assets/projects4.png';


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md: pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Lorem dolor sed viverra ipsum nunc.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={mitProject} title='School Website' description='Wordpress' src='https://mit-edu.ph'/>
        <ProjectItem img={modelProject} title='Model Site' description='HTML + CSS' src='https://shariki569.github.io/sepalon-blog-project-1/'/>
        <ProjectItem img={movieProject} title='Movie Site' description='React Js' src='https://shariki569.github.io/Movie-App/'/>
        <ProjectItem img={artWebsite} title='Digital Art Portfolio Site' description='Carrd Web Builder' src='https://shariki569.carrd.co/'/>

      </div>
    </div>
  )
}

export default Projects
