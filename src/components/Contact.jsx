import React from 'react'
import styles from '../styles'
import { contact_pic } from '../assets'

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen w-full relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4'>
              Contact Me
            </h1>
            <div className='h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full'></div>
          </div>
          <p className='text-gray-400 text-lg mt-6 max-w-2xl mx-auto'>
            Let's connect and discuss opportunities
          </p>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-5 items-center justify-items-center'>
          {/* Contact Form */}
          <div className='order-2 lg:order-1 w-full max-w-lg'>
            <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300 p-8'>
              <h2 className='text-2xl font-bold text-white mb-6 text-center'>Send me a message!</h2>
              
              <form className='space-y-6'>
                <div>
                  <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-2'>
                    Name
                  </label>
                  <input 
                    id="name" 
                    type="text" 
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-300'
                    placeholder='Your name'
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-2'>
                    Email
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className='block text-sm font-medium text-gray-300 mb-2'>
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-300 resize-none'
                    placeholder='Tell me about your project or just say hello!'
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className='w-full px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Image & Info */}
          <div className='order-1 lg:order-2 flex justify-center'>
            <div className='relative group'>
              {/* Decorative Elements */}
              <div className='absolute -inset-4 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
              <div className='absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
              
              {/* Image Container */}
              <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl shadow-2xl'>
                <img 
                  src={contact_pic} 
                  alt="Javier Deng - Contact" 
                  className='w-80 h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300'
                />
                
                {/* Floating Elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full animate-bounce'></div>
                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-300'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-white mb-4'>Let's Work Together</h3>
            <p className='text-gray-300 text-lg leading-relaxed mb-6'>
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you have a question, want to work together, or just want to say hi, I'd love to hear from you!
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a href="mailto:javier.deng17@gmail.com" className='px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-rose-500 hover:to-orange-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'>
                Email Me
              </a>
              <a href="https://github.com/DenkuKuro" target="_blank" rel="noopener noreferrer" className='px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-rose-500 hover:to-orange-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/javier-deng-65b000284" target="_blank" rel="noopener noreferrer" className='px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-rose-500 hover:to-orange-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact