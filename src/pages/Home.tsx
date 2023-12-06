/* import {FiGithub} from 'react-icons/fi' */
import {motion} from 'framer-motion'
import Button from '../components/Button'

const Home = () => {
  // framer motion variants
  const homeVariants = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:2,
        staggerChildren:0.1,
        delayChildren: 2
      }
    }
  }
  const childrenVariant = {
    hidden:{
      x:-5,
      opacity: 0,
      scale:0.95
    },
    visible:{
      x:0,
      scale: 1,
      opacity:1,
      transition:{
        duration:0.2
      }
    }
  }
  return (
    <div 
    id="home" className="flex pt-32 sm:pt-0 flex-wrap sm:items-center w-full h-screen md:mt-0 md:pt-5 text-texts pl-10 md:pl-20 lg:pl-36 font-primary ">
      <motion.div 
        variants={homeVariants}
        initial='hidden'
        animate='visible'
        className='overflow-visible flex flex-col flex-wrap gap-1.5'>
        <motion.p variants={childrenVariant} className='text-accent font-medium text-sm'>Hi, my name is </motion.p>
        <motion.h1 variants={childrenVariant} className='text-heading leading-none md:text-6xl mt-3 line-clamp-none'>Tewodros Yiheyis</motion.h1>
        <motion.h1 variants={childrenVariant} className='text-headingTwo leading-none md:text-5xl text-transparent bg-gradient-to-t from-title2 to-title bg-clip-text'>Full stack developer</motion.h1>
        <motion.p variants={childrenVariant} className='text-sm md:text-[0.9rem] text-secondary mt-6 leading-6 font-light w-10/12 md:w-10/12 lg:w-7/12 text-left'>I have a strong foundation in both front-end and back-end technologies,
         I bring a comprehensive approach to building robust and scalable web applications. Currently interning as a junior developer in <span className="text-accent opacity-100">IGAD</span> mostly
          working with <span className="text-accent opacity-100">Javascript and Python</span>.</motion.p>
        
        <motion.div
          variants={childrenVariant}
          className='overflow-visible'
        >
          <a href="https://github.com/tewodrosAe" target='blank'>
            <Button text={'Check out my projects!'}/>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home