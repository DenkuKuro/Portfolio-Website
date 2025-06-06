import React from 'react'
import { selfie, CV } from '../assets'
import { skills } from '../constants'
import Button from './Button'

const About = () => {
  return (
    <section id='about' className='h-full my-36 mb-56 w-full'>
      <div className=''>
        <h1 className='text-4xl'>About Me</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <div className='flex w-full justify-center my-20'>      
        <div className=''>
          <img src={selfie} alt="selfie of me" className='h-96'/>
        </div>
        <div className='mx-32'>
          <p className='text-xl max-w-2xl break-words'>
            I am a second-year Simon Fraser Student studying Computer Science aspiring to be a Software Engineer! 
            I have worked on several web app projects focusing on Full-Stack applications. I love playing volleyball and really interested
            in learning embedded software engineering in the future.
          </p>
          <Button link={CV} name={"CV"} style={""}/>
        </div>
      </div>
    </section>
  )
}

export default About