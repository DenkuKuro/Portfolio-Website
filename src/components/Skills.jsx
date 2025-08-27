import React from 'react'
import styles from '../styles'
import { skills, skillsIcon } from '../constants'
import TechDisplay from './techDisplay'

const Skills = () => {
  return (
    <section id='skills' className='min-h-screen w-full relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4'>
              Skills
            </h1>
            <div className='h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full'></div>
          </div>
          <p className='text-gray-400 text-lg mt-6 max-w-2xl mx-auto'>
            Here are some of the technologies I am familiar with
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center'>
          {skillsIcon.map((skill, index) => (
            <div key={index} className='group'>
              <TechDisplay tech={skill.tech} icon={skill.icon} alt={skill.alt} />
            </div>
          ))}
        </div>

        {/* Additional Skills Text */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-white mb-4'>Continuous Learning</h3>
            <p className='text-gray-300 text-lg leading-relaxed'>
              I'm passionate about staying up-to-date with the latest technologies and continuously expanding my skill set. 
              Currently exploring advanced React patterns, cloud technologies, and machine learning concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills