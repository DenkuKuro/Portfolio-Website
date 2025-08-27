import React from 'react'
import styles from '../styles'

const ExperienceCard = ({title, date, company, location, desc}) => {
  return (
    <div className='group relative w-full max-w-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden'>
      {/* Decorative gradient border */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      
      <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 h-full flex flex-col">
        {/* Header */}
        <div className='flex justify-between items-start mb-4'>
          <h1 className='text-lg font-bold text-white group-hover:text-rose-400 transition-colors duration-300 flex-1 mr-4'>
            {title}
          </h1>
          <span className='text-sm text-rose-400 font-medium bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20'>
            {date}
          </span>
        </div>
        
        {/* Company & Location */}
        <div className='mb-4'>
          <h2 className='text-base font-semibold text-gray-200 mb-1'>
            {company}
          </h2>
          <h4 className='text-sm text-gray-400 flex items-center'>
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location}
          </h4>
        </div>
        
        {/* Description */}
        <div className='flex-1'>                
          <ul className='space-y-2'>
            {desc.map((item, index) => (
              <li key={index} className='text-sm text-gray-300 leading-relaxed flex items-start'>
                <span className='w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                {item}
              </li>
            ))} 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard