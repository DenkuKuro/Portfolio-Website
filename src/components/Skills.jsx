import React from 'react'
import styles from '../styles'
import { skills, skillsIcon } from '../constants'
import TechDisplay from './techDisplay'

const Skills = () => {
  return (
    <section id='skills' className='mb-8 w-full'>
      <div className=''>
        <h1 className='text-4xl'>Skills</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <h2 className='text-xl mt-7'>
        Here are some of the techonologies I am familiar with:
      </h2>
      <div className='flex flex-wrap justify-center'>
        {skillsIcon.map((skill) => (
          <TechDisplay tech={skill.tech} icon={skill.icon} alt={skill.alt} />
        ))}
      </div>
    </section>
  )
}

export default Skills