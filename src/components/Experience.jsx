import React from 'react'
import { experience } from '../constants'
import styles from '../styles'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section id='experience' className='my-8 w-full'>
      <div className=''>
        <h1 className='text-4xl'>Experience</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <div className='flex flex-wrap my-8 mx-5 w-full justify-center h-full'>
        {experience.map((exp) => (
            <ExperienceCard title={exp.title} date={exp.date} company={exp.company} location={exp.location} desc={exp.description} />
        ))}
      </div>
    </section>
  )
}

export default Experience