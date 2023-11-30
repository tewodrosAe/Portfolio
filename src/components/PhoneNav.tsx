
import {motion} from 'framer-motion'
const PhoneNav = ({isOpen, setIsOpen}:{ isOpen: boolean; setIsOpen:  React.Dispatch<React.SetStateAction<boolean>> }) => {
  const containerVariant = {
    hidden:{
      y:-100,
      opacity:0
    },
    visible: {
      y:0,
      opacity:1,
      transition:{
        delay:1.7,
        duration:0.1
      }
    }
  }
  const menuVariant = {
    normal: {
        rotate: 0,
        scale:1,
        x:0
    },
    tap: {
        x:-5,
        rotate: 160,
        scale:0.8,
        transition:{
            duration: 0.2
        }
    }
  }
  const middleVariant = {
    open: {
        rotate: 38
    },
    closed: {
        rotate: 0
    }
  }
  const upperVariant = {
    open: {
        rotate: -50,
        y:-10
    },
    closed: {
        rotate: 0
    }
  }
  return (
    <motion.div
    variants={containerVariant}
    initial='hidden'
    animate='visible'
    onClick={() => setIsOpen(o => !o)} className='md:hidden'>
      <motion.div
      variants={menuVariant}
      initial='normal'
      whileTap='tap'
      className="flex mr-[8vw] flex-col justify-center items-center gap-1 cursor-pointer" >
        <motion.div className='w-4 nav-bar'/>
        <motion.div className={isOpen ? 'w-7 nav-bar opacity-0' : 'w-7 nav-bar'}/>
        <motion.div
        variants={middleVariant}
        animate={isOpen ? 'open': 'closed'}
        className='w-10 nav-bar'/>
        <motion.div
        variants={upperVariant}
        animate={isOpen ? 'open': 'closed'}
        className='w-7 nav-bar'/>
        <motion.div className='w-4 nav-bar'/>
      </motion.div>
      
    </motion.div>
  )
}

export default PhoneNav
