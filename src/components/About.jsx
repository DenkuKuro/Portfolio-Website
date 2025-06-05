import React from 'react'
import { selfie, CV } from '../assets'
import Button from './Button'

const About = () => {
  return (
    <div className=''>
      <div>
        <img src={selfie} alt="selfie of me" className=''/>
      </div>
      <div className=''>
        <h1 className=''>
          About Me
        </h1>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit totam deleniti. 
        </p>
        <Button link={CV} name={"CV"} style={"fade bg-transparent border-2 border-red-700 text-red-500"}/>
      </div>
    </div>
  )
}

export default About