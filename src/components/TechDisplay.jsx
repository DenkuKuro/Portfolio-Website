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
    <div className='max-w-28 bg-slate-800 rounded-md m-5 p-[1px] bg-gradient-to-r from-red-700 to-blue-700
                    transition duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer'>
        <div className="bg-slate-800 rounded-md">
            <div className='flex pt-2 justify-center'>
                <img src={icon} alt={alt} className='h-24'/>
            </div>
            <div className='flex justify-center'>
                <h1 className=''>{tech}</h1>
            </div>
        </div>
    </div>
  )
}

export default TechDisplay;