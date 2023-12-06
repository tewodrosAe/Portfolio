import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { navCol } from '../constants'
import { Link } from 'react-scroll'
import PhoneNav from './PhoneNav'

const Nav = ({isOpen, setIsOpen}:{ isOpen: boolean; setIsOpen:  React.Dispatch<React.SetStateAction<boolean>> }) => {
  // React Hooks
  const [hidden, setHidden] = useState('initial')
  const [active, setActive] = useState('Home')
  const { scrollY } = useScroll()

  // Naming Variants
  const navVariants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: 0,
      height: '4rem',
    },
    initial: {
      y: 0,
      height: '5rem',
      backdropFilter: 'blur(0)',
      boxShadow: 'none',
      background: 'transparent'
    },
  }

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      '&:before': {
        opacity: 0,
        y: -20,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  // Using a framer motions hook to get scroll height
  useMotionValueEvent(scrollY, 'change', (current) => {
    const prev = scrollY.getPrevious()
    if (current > prev && current > 20) {
      setHidden('hidden')
    } else if (current <= 20) {
      setHidden('initial')
    } else {
      setHidden('visible')
    }
  })
  
  return (
    <motion.nav
      variants={navVariants}
      animate={hidden}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-screen h-20  flex items-center justify-between bg-primary/80 backdrop-blur-2xl z-20 shadow-xl shadow-black/10"
    >
      <motion.img
        variants={linkVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1.6,
        }}
        className="ml-12 md:ml-20 lg:ml-36"
        src="Logo.svg"
        alt=""
      />
      <div className="hidden md:flex space-x-14 md:mr-20 lg:mr-36">
        {navCol.map((nav, i) => (
          <Link
            activeClass="bg-red" 
            to={nav.to} 
            spy={true} 
            smooth={'easeInOutQuad'}
            duration={(i *100) + 500}
            onSetActive={() => setActive(nav.name)} 
            delay={100}
            isDynamic={true}
          >
            <motion.a
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.1,
                delay: 1.6 + 0.1 * i,
                ease: 'easeInOut',
              }}
              className={`nav text-nav ${
                nav.name !== active
                  ? 'before:opacity-0 text-texts'
                  : 'before:opacity-50 before:mr-2 text-accent'
              }`}
              key={nav.to}
            >
              {nav.name}
            </motion.a>
          </Link>
        ))}
      </div>
      <PhoneNav isOpen={isOpen} setIsOpen={setIsOpen}/>
    </motion.nav>
  )
}

export default Nav
