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

const techDisplay = ({tech, icon, alt}) => {
  return (
    <div className=''>
        <div className=''>
            <img src={icon} alt={alt} className=''/>
        </div>
        <div className=''>
            <h1 className=''>{tech}</h1>
        </div>
    </div>
  )
}

export default techDisplay