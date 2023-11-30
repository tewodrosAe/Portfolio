import { motion } from 'framer-motion'
import ProjectSection from '../components/ProjectSection'
import { mainProjects } from '../constants'


const Projects = () => {
  const projectsVariant = {
    hidden: {
      y: 20,
      x: -40,
      filter: 'blur(1.5px)',
      opacity: 0,
    },
    view: {
      y: 0,
      x: 0,
      filter: 'blur(0)',
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <motion.div
      variants={projectsVariant}
      id='projects'
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      /* name="one" */ className="relative px-10 md:px-20 lg:px-36 my-24 py-16 text-secondary"
    >
      <div className="flex items-end justify-center gap-10 w-full">
        <div className="w-2/4 h-px bg-secondary" />
        <h1 className="text-texts text-headingTwo md:text-4xl min-w-max font-primary font-light">
          Projects
        </h1>
        <div className="w-full h-px bg-secondary" />
      </div>
      <div className="mt-20 flex flex-col gap-40 items-center">
        {
          mainProjects.map((data,i) => <ProjectSection key={i} index={i} data={data}/>)
        }
      </div>
    </motion.div>
  )
}

export default Projects
