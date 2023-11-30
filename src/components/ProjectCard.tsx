import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { otherProject } from '../types'

interface projectCard {
  data: otherProject,
  index: number
}

const ProjectCard = ({data,index}:projectCard) => {

  // Framer variants
  const cardVariant = {
    hidden: {
      y: 20,
      opacity: 0,
      filter: 'blur(1px)',
    },
    view: {
      y: 0,
      opacity: 1,
      filter: 'blur(0)',
      transition: {
        delay: (index * 0.05),
        duration: 0.2,
      },
    },
    hover:{
      boxShadow: '1px 10px 100px 2px #ffffff07',
      y:-3,
      transition:{
        duration:0.1,
        ease: 'easeOut'
      }
    }
  }
 


  return (
    <motion.div 
    variants={cardVariant} 
    whileInView='view'
    initial='hidden'
    viewport={{ once: true }}
    whileHover='hover'
    className="flex flex-col bg-secondary/50  max-h-fit">
      <img src={data.image} alt="" className='brightness-90 hover:brightness-100'/>
      <div className="flex text-texts p-4 justify-between items-center">
        <h1 className="text-lg ">{data.title}</h1>
        <a className="flex gap-2 text-secondary" href={data.code} target='_blank'>
          <FiGithub size={20} />
        </a>
      </div>
      <p className="text-sm px-4">
        {data.detail}
      </p>
      <ul className="p-4 text-title2 text-xs flex gap-2 min-w-max h-fit mt-auto">
        {data.stack.map((s,i)=> <li key={i}  >{s} {data.stack.length <= i + 1 ? ' ' : '-'} </li>)}
      </ul>
    </motion.div>
  )
}

export default ProjectCard
