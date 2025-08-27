import React from 'react'
import { selfie, CV } from '../assets'
import { skills } from '../constants'
import styles from '../styles'
import Button from './Button'

const About = () => {
  return (
    <section id='about' className='min-h-screen w-full relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4'>
              About Me
            </h1>
            <div className='h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full'></div>
          </div>
          <p className='text-gray-400 text-lg mt-6 max-w-2xl mx-auto'>
            Get to know the person behind the code
          </p>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Image Section */}
          <div className='order-2 lg:order-1 flex justify-center lg:justify-start'>
            <div className='relative group'>
              {/* Decorative Elements */}
              <div className='absolute -inset-4 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
              <div className='absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
              
              {/* Image Container */}
              <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl shadow-2xl'>
                <img 
                  src={selfie} 
                  alt="Javier Deng - Software Engineer" 
                  className='w-80 h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300'
                />
                
                {/* Floating Elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full animate-bounce'></div>
                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-300'></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className='order-1 lg:order-2 space-y-8'>
            {/* Introduction */}
            <div className='space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Hi, I'm <span className='bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent'>Javier</span>
              </h2>
              
              <div className='space-y-4 text-gray-300 text-lg leading-relaxed'>
                <p className='bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300'>
                  I am a second-year Computer Science student at <span className='text-rose-400 font-semibold'>Simon Fraser University</span>, 
                  aspiring to become a Software Engineer. I have worked on several web application projects, 
                  focusing on full-stack development.
                </p>
                
                <p className='bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300'>
                  I'm always eager to learn new technologies and continuously work on strengthening my foundations. 
                  I enjoy playing volleyball and have a strong interest in embedded software engineering for the future.
                </p>
              </div>
            </div>

            {/* Skills Preview */}
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white'>Tech Stack</h3>
              <div className='flex flex-wrap gap-2'>
                {skills.slice(0, 6).map((skill, index) => (
                  <span 
                    key={index}
                    className='px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-rose-500/50 transition-all duration-300 hover:scale-105'
                  >
                    {skill}
                  </span>
                ))}
                <span className='px-3 py-1 bg-gradient-to-r from-rose-500/20 to-orange-500/20 text-rose-400 rounded-full text-sm border border-rose-500/30'>
                  +{skills.length - 6} more
                </span>
              </div>
            </div>

            {/* CTA Section */}
            <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300'>
              <p className='text-gray-300 mb-4'>
                Here is my résumé if you're interested in checking it out:
              </p>
              <Button 
                link={CV} 
                name="View Resume" 
                style="px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About