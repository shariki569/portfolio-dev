import React from 'react'
import WorkItems from './WorkItems'


const data = [
    {
        year: 2019,
        title: 'Graphic Illustrator',
        duration: '7 months',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie. Aliquet lectus proin nibh nisl condimentum id venenatis a.'
    },
    {
        year: 2022,
        title: 'Wordpress Developer',
        duration: '5 months',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie. Aliquet lectus proin nibh nisl condimentum id venenatis a.'
    },
  
]

const Work = () => {
  return (
    <div id="work" className='max-w-[1040px] m-auto md: pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItems key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}
    </div>
  )
}

export default Work
