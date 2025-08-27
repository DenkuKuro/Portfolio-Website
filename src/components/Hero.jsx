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
            <div className='inline-block'>
              <p className='text-lg md:text-xl text-gray-300'>
                <span className='animate-typing'>
                  Aspiring software engineer and student at Simon Fraser University majoring in Computer Science.
                </span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in'>
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

        </div>
      </div>
    </section>
  )
};

export default Hero;