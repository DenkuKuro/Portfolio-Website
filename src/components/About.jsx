import React from 'react'
import { selfie, CV } from '../assets'
import { skills } from '../constants'
import styles from '../styles'
import Button from './Button'

const About = () => {
  return (
    // <section id='about' className='h-full my-36 mb-56 w-full'>
    //   <div class="relative h-full w-full bg-slate-950">
    //     <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    //   </div>
    //   <div className=''>
    //     <h1 className='text-4xl'>About Me</h1>
    //     <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
    //   </div>
    //   <div className='flex w-full justify-center my-20'>      
    //     <div className='z-1'>
    //       <img src={selfie} alt="selfie of me" className='h-96'/>
    //     </div>
    //     <div className='mx-32 py-10'>
    //       <p className={'text-xl max-w-2xl break-words'}>
    //         I am a second-year Simon Fraser Student studying Computer Science aspiring to be a Software Engineer! 
    //         I have worked on several web app projects focusing on Full-Stack applications. I always interestes in learning new techonologies and like to work
    //          on my foundations to improve little by little. I love playing volleyball and really interested
    //         in learning embedded software engineering in the future. <br />
            
    //       </p>
    //       <p className='text-xl mt-7'>
    //         Here is my Resume if you are interested in checking it:
    //       </p>
    //       <Button link={CV} name={"CV"} style={"px-8"}/>
    //     </div>
    //   </div>
      
    // </section>
    <section id='about' className='h-full my-36 mt-56 w-full relative mb-30'>

      <div className="absolute z-0 bottom-0 left-[-20%] top-[-20%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] m-0 p-0" />

      <div className='relative z-10'>
        <h1 className='text-4xl'>About Me</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>

        <div className='flex w-full justify-center my-20'>
          <div className='ml-30'>
            <img src={selfie} alt="selfie of me" className='h-96'/>
          </div>
          <div className='mx-32 py-10'>
            <p className='text-xl max-w-2xl break-words'>
              I am a second-year Simon Fraser Student studying Computer Science aspiring to be a Software Engineer! 
              I have worked on several web app projects focusing on Full-Stack applications. I’m always interested in learning new technologies 
              and like to work on my foundations to improve little by little. I love playing volleyball and I’m really interested
              in embedded software engineering in the future.
            </p>
            <p className='text-xl mt-7'>
              Here is my Resume if you are interested in checking it:
            </p>
            <Button link={CV} name={"CV"} style={"px-8"} />
          </div>
        </div>
      </div>
    </section>

  )
}

export default About