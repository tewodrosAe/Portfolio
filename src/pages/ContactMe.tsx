import {motion} from 'framer-motion'
import Button from '../components/Button'
const ContactMe = () => {
  return (
    <motion.div 
    initial={{
      y:10,
      opacity:0,
      filter:'blur(1px)'
    }}
    whileInView={{
      y:0,
      opacity:1,
      filter:'blur(0)',
      transition:{
        duration:0.6
      }
    }}
    id='contact'
    viewport={{once:true}}
    className="flex flex-col items-center justify-center py-20 my-20 px-10 md:px-20 lg:px-36"> 
      <div className="flex items-end justify-center gap-10 w-full">
        <div className="w-full h-px bg-secondary"/>
        <h1 className="text-texts text-headingTwo md:text-4xl min-w-max font-primary font-light">Get In Touch</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className=" text-secondary mt-20 text-center lg:w-4/5 md:text-lg">
        Looking for new opportunists to further my skills and knowledge. My inbox is always open. Reach out whenever and i will respond as soon as possible.
        </p>
        <a className='overflow-visible' href="mailto:tewodrosaemiro@gmail.com" target='_blank'>
          <Button text={'Reach Out! :)'}/>
        </a>
      </div>
    </motion.div>
  )
}

export default ContactMe