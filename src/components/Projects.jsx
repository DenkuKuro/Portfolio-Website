import Card from "./Card";
import Button from "./Button";
import { projects } from "../constants";
import { blog, SpikeConnect } from "../assets";
import styles from "../styles";

const Projects = () => {
  return (
    <section id='projects' className='my-8 w-full'>
      <div className=''>
        <h1 className='text-4xl'>Projects</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-5'></div>
      </div>
      <div className='flex flex-row flex-wrap justify-between'>
        {projects.map((project) => (
          <Card title={project.title} link={project.link} image={project.image} tech={project.tech} key={project.title}/>
        ))}
      </div>
    </section>
  )
};

export default Projects;