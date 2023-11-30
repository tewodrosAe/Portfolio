
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { otherProjects } from '../constants'


const OtherProjects = () => {
 // Framer Variants
  const otherVariants = {
    hidden: {
      y: 20,
      opacity: 0.3,
    },
    view: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }
  
  return (
    <div className="overflow-visible text-secondary px-10">
      <motion.div
        variants={otherVariants}
        initial="hidden"
        whileInView="view"
        viewport={{ once: true }}
        className="flex px-10 md:px-20 lg:px-36 items-end justify-center gap-10 w-full overflow-visible"
      >
        <div className="w-full h-px bg-secondary" />
        <h1 className="text-texts text-headingTwo md:text-4xl min-w-max font-primary font-light">
          Other Notable Projects
        </h1>
        <div className="w-full h-px bg-secondary" />
      </motion.div>
      <div
        className="grid grid-cols-2 md:px-20 lg:px-36 md:grid-cols-2 lg:grid-cols-3 othergrid gap-10 mt-20 overflow-visible"
      >
        {otherProjects.map((data,i) => <ProjectCard key={i} data={data} index={i}/>)}
      </div>
        
    </div>
  )
}

export default OtherProjects
