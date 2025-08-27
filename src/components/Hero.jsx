import Button from './Button';
import styles from "../styles";
import {CV} from "../assets";

const Hero = () => {
  return (
    <section id='home' className='min-h-screen w-full relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 flex items-center'>
      <div className='relative z-10 max-w-7xl mx-auto w-full'>
        <div className='text-center space-y-8'>
          {/* Greeting */}
          <div className='space-y-4'>
            <p className='text-2xl md:text-3xl text-gray-400 animate-fade-in'>
              Hey! I'm
            </p>
            
            {/* Main Name with Gradient Animation */}
            <h1 className='gradient-text animate-fadeGradient text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight'>
              JAVIER DENG XU
            </h1>
            
            {/* Animated Typing Effect */}
            <div className='max-w-4xl mx-auto'>
              <p className='text-lg md:text-xl text-gray-300'>
                <span className='animate-typing'>
                  Aspiring software engineer and student at Simon Fraser University majoring in Computer Science.
                </span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-8'>
            <Button 
              name="Contact Me" 
              style="px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg" 
            />
            <Button 
              name="View Resume" 
              link={CV} 
              style="px-8 py-4 bg-transparent border-2 border-rose-500 text-rose-400 hover:bg-rose-500 hover:text-white font-semibold rounded-lg transition-all duration-300 text-lg" 
            />
          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
            <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
              <div className='w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;