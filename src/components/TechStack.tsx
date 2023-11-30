import {
    BiLogoFlask,
    BiLogoMongodb,
    BiLogoNodejs,
    BiLogoReact,
  } from 'react-icons/bi'
import { SiCss3, SiExpress, SiHtml5 } from 'react-icons/si'
import {motion} from 'framer-motion'

const TechStack = ({isEven, stack}:{isEven:boolean, stack: string}) => {
  const stackVariant = {
    hidden: {
      y: 4,
      x: 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
    },
  }
  return (
      <ul
      className={`${
        isEven ? 'grid-stack' : 'grid-stack-one'
      } flex gap-3 mt-auto py-2 px-8 lg:bg-transparent md:bg-primary`}
    >
        {
            stack === 'mern' ?
            <>
            
                <motion.li
                variants={stackVariant}
                initial='hidden'
                whileInView='visible'
                transition={{
                    delay:0.2,
                    duration: 0.2,
                    ease:'easeInOut'
                }}
                viewport={{ once:true }}
                className="tech-stack">
                <BiLogoMongodb size={30} /> MongoDb
                </motion.li>
                <motion.li 
                variants={stackVariant}
                initial='hidden'
                whileInView='visible'
                transition={{
                    delay:0.3,
                    duration: 0.2,
                    ease:'easeInOut'
                }}
                viewport={{ once:true }}
                className="tech-stack">
                <BiLogoReact size={30} /> React
                </motion.li>
                <motion.li
                variants={stackVariant}
                initial='hidden'
                whileInView='visible'
                transition={{
                    delay:0.4,
                    duration: 0.2,
                    ease:'easeInOut'
                }}
                viewport={{ once:true }}
                className="tech-stack">
                <SiExpress size={30} /> Express
                </motion.li>
                <motion.li
                variants={stackVariant}
                initial='hidden'
                whileInView='visible'
                transition={{
                    delay:0.5,
                    duration: 0.2,
                    ease:'easeInOut'
                }}
                viewport={{ once:true }}
                className="tech-stack">
                <BiLogoNodejs size={30} /> Node.Js
                </motion.li>
                </>
            :
                <>
                    <motion.li
                    variants={stackVariant}
                    initial='hidden'
                    whileInView='visible'
                    transition={{
                        delay:0.2,
                        duration: 0.2,
                        ease:'easeInOut'
                    }}
                    viewport={{ once:true }}
                    className="tech-stack">
                    <SiHtml5 size={30} /> Html
                    </motion.li>
                    <motion.li
                    variants={stackVariant}
                    initial='hidden'
                    whileInView='visible'
                    transition={{
                        delay:0.3,
                        duration: 0.2,
                        ease:'easeInOut'
                    }}
                    viewport={{ once:true }}
                    className="tech-stack">
                    <SiCss3 size={30} /> Css
                    </motion.li>
                    <motion.li
                    variants={stackVariant}
                    initial='hidden'
                    whileInView='visible'
                    transition={{
                        delay:0.4,
                        duration: 0.2,
                        ease:'easeInOut'
                    }}
                    viewport={{ once:true }}
                    className="tech-stack">
                    <BiLogoFlask size={30} /> Flask
                    </motion.li>
                </>
        }
        </ul>
  )
}

export default TechStack