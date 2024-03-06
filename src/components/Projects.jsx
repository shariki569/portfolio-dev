import React from 'react'
import ProjectItem from './ProjectItem'
import mitProject from '../assets/projects1.png';
import modelProject from '../assets/projects2.png';
import movieProject from '../assets/projects3.jpg';
import artWebsite from '../assets/projects4.png';
import raeleVance from '../assets/projects5.png';
import miswebsite from '../assets/projects6.png';


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md: pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Here are my projects that I've worked on during my free time, school projects and capstone and as well as my paid project
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={mitProject} title='School Website' description='A school website Made with Wordpress' src='https://mit-edu.ph'/>
        <ProjectItem img={modelProject} title='Model Site' description='A model blog site using HTML + CSS' src='https://shariki569.github.io/sepalon-blog-project-1/'/>
        <ProjectItem img={movieProject} title='Movie Site' description='A movie site using movie API + React Js and Tailwind' src='https://shariki569.github.io/Movie-App/'/>
        <ProjectItem img={artWebsite} title='Digital Art Portfolio Site' description='An art portfolio site using Carrd website builder' src='https://shariki569.carrd.co/'/>
        <ProjectItem img={raeleVance} title='RaeleVAnce Site' description='A paid project for VA website using Wordpress and Elementor' src='https://raelevance.online/'/>
        <ProjectItem img={miswebsite} title='MIS Website' description='A capstone for full-stack Management Information System with Chatbot using Node Js, React and MySQL' src='https://aquacaintacapstone.netlify.app/'/>

      </div>
    </div>
  )
}

export default Projects
