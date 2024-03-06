import React from 'react'
import WorkItems from './WorkItems'


const data = [
    {
        year: 2019,
        title: 'Graphic Illustrator',
        duration: '7 months',
        details: 'I was a Graphic Illustrator for 7 months and helped them draw a children’s storybook. Not only that I am also an Mobile Legends Artist Creator. I also helped them draw digital illustrations.'
    },
    {
        year: 2022,
        title: 'Wordpress Developer',
        duration: '5 months',
        details: 'I was a Wordpress Developer working with Contact Center Solution PH for 5 months and helped them build their website. '
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
