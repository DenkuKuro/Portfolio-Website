import React from 'react'
import styles from '../styles'

const ExperienceCard = ({title, date, company, location, desc}) => {
  return (
        <div className='w-full max-w-md h-96 flex flex-col bg-slate-900 rounded-md p-4
                        justify-around transition-transform duration-300 ease-in-out 
                        hover:scale-105 hover:shadow-lg mx-5'>
            <div className='flex justify-between'>
                <h1 className='text-lg font-bold'>
                    {title}
                </h1>
                <h3 className='text-md'>
                    {date}
                </h3>
            </div>
            <h2 className='text-base'>
                {company}
            </h2>
            <h4 className='text-sm text-gray-400'>
                {location}
            </h4>
            <div className='flex-1 my-5'>                
                <ul className='list-disc list-inside text-sm space-y-1'>
                    {desc.map((item) => (
                        <li>{item}</li>
                    ))} 
                </ul>
            </div>
        </div>
  )
}

export default ExperienceCard