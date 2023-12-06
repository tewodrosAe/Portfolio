import { BiLink } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import {MdOutlineAdminPanelSettings } from 'react-icons/md'
import { project } from '../types'
import TechStack from './TechStack'

const ProjectSection = ({ index,data }: project) => {
  // Determine whether it is even or odd
  const isEven = index % 2 === 0

  // Framer Variants
  const imgVariant = {
    hidden: {
      y: 10,
      x: isEven ? -10 : 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }
  const contentVariant = {
    hidden: {
      y: 10,
      x: isEven ? 10 : -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: 'easeInOut'
      },
    },
  }
  return (
    <div className={`grid md:grid-cols-5 ${!isEven ? 'grid-rows-4': ''} w-full `}>
      <motion.img
        variants={imgVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true }}
        className={`${isEven ? 'grid-img-one lg:w-3/5 md:w-full' : 'grid-img-two lg:w-3/5 md:w-full'} hidden md:block md:h-[85%] lg:h-[100%] self-center `}
        src={data.image}
        alt="project"
      />
      
      <motion.div variants={contentVariant} viewport={{ once:true }} initial='hidden' whileInView='visible' className={`${isEven ? 'grid-content' : 'grid-content-side'} `}>
        <h1
          className={`text-xl text-texts font-semibold ${
            isEven ? 'text-right' : 'text-left'
          } tracking-wide`}
        >
          {data.title}
        </h1>
        <div className={` relative shadow-2xl overflow-hidden text-paragraphTwo md:text-sm bg-hero-pattern md:bg-secondary text-texts py-6 px-10`}>
          <motion.img
          variants={imgVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true }}
          className={`absolute top-0 left-0 object-cover w-full h-full -z-10 block md:hidden md:h-[85%] lg:h-[100%] self-center brightness-50 `}
          src={data.image}
          alt="project"
          />
          <h1 >
           {data.detail}
          </h1>
          <div className="flex items-end gap-5 my-4 w-11/12">
            <h2 className="min-w-max leading-none">Experience</h2>
            <div className="w-full h-px bg-slate-400" />
          </div>
          <ul className="text-[0.82rem] marker:text-accent marker:text-lg list-disc list-inside space-y-2">
            {data.experience.map((d,i) => <li key={i}>{d}</li>)}
          </ul>
          <div className="flex gap-4 relative">
            <a href={data.live} target='_blank' className="grid-btn gradient-border">
              <BiLink size={18} />
              Live
            </a>
            <a href={data.code} target='_blank' className="grid-btn gradient-border">
              <FiGithub />
              Code
            </a>
            {
              data?.admin &&
              <a href={data.admin} target='_blank' className="grid-btn gradient-border">
                <MdOutlineAdminPanelSettings size={17} />
                Admin
              </a>
            }
          </div>
        </div>
      </motion.div>
      <TechStack isEven={isEven} stack={data.stack}/>
    </div>
  )
}

export default ProjectSection
