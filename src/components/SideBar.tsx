import {motion} from 'framer-motion'
import { Link } from 'react-scroll'
import { navCol } from '../constants'
import { useState } from 'react'
const SideBar = ({isOpen,setIsOpen}:{isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [active, setActive] = useState('Home')
    const sideVariant = {
        initial:{
            x: '100%'
        },
        final: {
            x:0,
            transition:{
                duration: 0.2
            }
        }
    }
    const blurVariant = {
        initial:{
            backdropFilter: 'blur(0px)'
        },
        final: {
            backdropFilter: 'blur(2px)',
            transition:{
                delay:0.1,
                duration: 0.1
            }
        }
    }
  return (
    <motion.div
    variants={sideVariant}
    animate={isOpen ? 'final' : 'initial'}
    className='fixed h-screen z-10 overflow-hidden md:hidden'>
        <motion.div
        variants={blurVariant}
        className='h-full w-screen '/>
        <div className='absolute flex flex-col gap-16 justify-center pl-[5vw] pr-5 overflow-visible top-0 right-0 h-full w-1/2 bg-primarybright shadow-md'>
        {navCol.map((nav, i) => (
          <Link
            activeClass="bg-red" 
            onClick={() => setIsOpen(o => !o)}
            to={nav.to} 
            spy={true} 
            smooth={'easeInOutQuad'}
            duration={(i *100) + 500}
            onSetActive={() => setActive(nav.name)} 
            delay={100}
            isDynamic={true}
            className='space-y-2 overflow-visible'
          >
            <motion.a
              className={`nav  ${
                nav.name !== active
                  ? ' text-texts'
                  : ' text-accent'
              }`}
              key={nav.to}
            >
              {nav.name}
            </motion.a>
            <div className='w-full h-px bg-accent'/>
          </Link>
        ))}
        </div>
    </motion.div>
  )
}

export default SideBar