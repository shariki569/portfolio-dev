import React from 'react'

const ProjectItem = ({img, title, src, description}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200  to-[#001b5e]'>
      <img className='rounded-xl group-hover:opacity-10' src={img} alt="/" />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
            {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{description}</p>
        <a href={src} target='_blank' className='flex justify-center align-middle'>
            <p className='text-center p-3 rounded-lg  bg-white text-gray-700 font-bold cursor cursor-pointer text-lg w-40'>Open Site</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
