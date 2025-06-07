import React from 'react'
import styles from '../styles'
import { skills, skillsIcon } from '../constants'

const Skills = () => {
  return (
    <section id='skills' className='my-8 w-full'>
      <div className=''>
        <h1 className='text-4xl'>Skills</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <div className=''>
        <TechDisplay tech={skillsIcon[0].tech} icon={skillsIcon[0].icon} alt={skillsIcon[0].alt}  />
      </div>
    </section>
  )
}

export default Skills