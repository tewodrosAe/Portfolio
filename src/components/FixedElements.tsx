import {FiGithub,FiLinkedin} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'

const FixedElements = ({small}:{small: boolean}) => {
  return (
    <div className={`${small ? 'absolute space-x-8 w-full bottom-14 md:hidden':'fixed flex-col space-y-4 h-screen md:right-5 lg:right-16 hidden md:flex'} z-10 flex justify-center  text-secondary overflow-visible text-2xl`}>
      <a className='overflow-visible' href="https://linkedin.com/in/tewodros-yiheyis" target='_blank'>
        <FiLinkedin className='social-links animate-[icons_2s_ease-in-out]'/>
      </a>
      <a className='overflow-visible' href='https://github.com/tewodrosAe' target='_blank'>
        <FiGithub className='social-links animate-[icons_2.2s_ease-in-out]'/>
      </a>
      <a className='overflow-visible' href="mailto:tewodrosaemiro@gmail.com" target='_blank'>
        <AiOutlineMail className='social-links animate-[icons_2.4s_ease-in-out]'/>
      </a>
    </div>

  )
}

export default FixedElements