import Card from "./Card";
import Button from "./Button";
import { projects } from "../constants";
import { blog, SpikeConnect, StressBurnout } from "../assets";
import styles from "../styles";

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen w-full relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4'>
              Projects
            </h1>
            <div className='h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full'></div>
          </div>
          <p className='text-gray-400 text-lg mt-6 max-w-2xl mx-auto'>
            Here are some of my recent projects and contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {projects.map((project) => (
            <Card title={project.title} link={project.link} image={project.image} tech={project.tech} key={project.title}/>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-semibold text-white mb-4'>Interested in my work?</h3>
            <p className='text-gray-300 text-lg mb-6'>
              Check out more of my projects on GitHub or get in touch to discuss potential collaborations.
            </p>
            <Button 
              name="View All Projects" 
              link="https://github.com/DenkuKuro"
              style="px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;