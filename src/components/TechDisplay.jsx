import React from 'react'
import styles from '../styles'
import {
    python,
    javascript,
    cpp,
    c,
    nodejs,
    react,
    bootstrap,
    html,
    css,
    jquery,
    tailwind,
    express,  
 } from "../assets";

const TechDisplay = ({tech, icon, alt}) => {
  return (
    <div className='group relative w-full max-w-32 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer'>
        {/* Decorative gradient border */}
        <div className='absolute -inset-0.5 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg p-4 h-full flex flex-col items-center justify-center">
            <div className='flex justify-center mb-3'>
                <img src={icon} alt={alt} className='h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300'/>
            </div>
            <div className='text-center'>
                <h3 className='text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300'>{tech}</h3>
            </div>
        </div>
    </div>
  )
}

export default TechDisplay;