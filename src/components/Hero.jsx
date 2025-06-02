import Button from './Button';
import styles from "../styles";


const Hero = () => {
  return (
    <section id='home' className='h-full my-32 p-6 flex md:flex-row flex-col mb-56'>
      <div className='flex-col items-center'>
        <p className='text-4xl fade'>Hey! I'm</p>
        <h1 className='gradient-text animate-fadeGradient text-9xl'>
          JAVIER DENG XU
        </h1>
        <div className='w-max m-0 p-0'>
          <p className='animate-typing text-lg text-slate-400 overflow-hidden whitespace-nowrap border-r-4 border-r-white'>
            Aspiring software engineer and student at Simon Fraser University majoring in Computer Science.
          </p>
        </div>
        <div className='py-4 flex gap-3'>
          <Button name="Contact Me" style="fade"/>
          <Button name={`Resume`} style="fade bg-transparent border-2 border-red-700 text-red-500" />
        </div>
      </div>

      <div className={`flex-1 flex relative ${styles.flexCenter}`}>
        <div className='absolute z-[0] w-[150%] h-[80%] top-0 right-0 red__gradient'/>
      </div>

    </section>
  )
};

export default Hero;