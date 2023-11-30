import { motion } from 'framer-motion' 
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Nav from "./components/Nav"
import MouseBall from "./components/MouseBall"
import FixedElements from "./components/FixedElements"
import OtherProjects from "./pages/OtherProjects"
import Footer from "./components/Footer"
import { Logo } from "./constants/Constant"
import SideBar from './components/SideBar'
import { useState } from 'react'

function App() {
  // Framer Variants
  const [isOpen, setIsOpen] = useState(false)
  const wrapperVariant = {
    hidden:{
      display:'none',
      marginTop:'100vh',
    },
    visible:{
      display:'block',
      marginTop:['10vh','0vh'],
      y:0,
      transition:{
        duration:0.2,
        delay:1.2,
      }
    }
    
  }
  return (
    <>
    <Logo/>
    <MouseBall/>
    <motion.div 
    variants={wrapperVariant}
    initial='hidden'
    animate='visible'
    className=" bg-primary font-primary selection:bg-secondary/40 overflow-visible">
      <div className=' relative lg:w-[1400px] lg:mx-auto'>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <FixedElements small={false}/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <OtherProjects/>
        <ContactMe/>
        <FixedElements small={true}/>
        <Footer/>
      </div>
    </motion.div>
    </>
  )
}

export default App
