import React from 'react'
import { selfie, CV } from '../assets'
import { skills } from '../constants'
import styles from '../styles'
import Button from './Button'

const About = () => {
  return (
    <section id='about' className='h-full my-36 mt-56 w-full relative mb-30'>

      <div className="absolute z-0 bottom-0 left-[-20%] top-[-20%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] m-0 p-0" />
     {/* Adapted from [https://www.youtube.com/watch?v=QeaeACHoReI] */}
      <div className='relative z-10'>
        <h1 className='text-4xl'>About Me</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>

        <div className='flex w-full justify-center my-20'>
          <div className='ml-30'>
            <img src={selfie} alt="selfie of me" className='h-96'/>
          </div>
          <div className='ml-32 py-10'>
            <p className='text-xl max-w-2xl break-words'>
              I am a second-year Computer Science student at Simon Fraser University,
               aspiring to become a Software Engineer. I have worked on several web application projects,
                focusing on full-stack development. I’m always eager to learn new technologies and
                 continuously work on strengthening my foundations. I enjoy playing volleyball
                  and have a strong interest in embedded software engineering for the future.
            </p>
            <p className='text-xl mt-7'>
              Here is my résumé if you’re interested in checking it out:
            </p>
            <Button link={CV} name={"CV"} style={"px-8"} />
          </div>
        </div>
      </div>
    </section>

  )
}

export default About