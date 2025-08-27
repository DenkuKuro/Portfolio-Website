import React from 'react'
import { experience } from '../constants'
import styles from '../styles'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section id='experience' className='min-h-screen w-full relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4'>
              Experience
            </h1>
            <div className='h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full'></div>
          </div>
          <p className='text-gray-400 text-lg mt-6 max-w-2xl mx-auto'>
            My professional journey and achievements
          </p>
        </div>

        {/* Experience Cards */}
        <div className='grid md:grid-cols-2 gap-8 justify-items-center max-w-6xl mx-auto'>
          {experience.map((exp, index) => (
            <ExperienceCard 
              key={index}
              title={exp.title} 
              date={exp.date} 
              company={exp.company} 
              location={exp.location} 
              desc={exp.description} 
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-white mb-4'>Always Learning & Growing</h3>
            <p className='text-gray-300 text-lg leading-relaxed'>
              I'm constantly seeking new opportunities to expand my skills and contribute to meaningful projects. 
              Whether it's through internships, hackathons, or personal projects, I believe in the power of continuous learning and hands-on experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience