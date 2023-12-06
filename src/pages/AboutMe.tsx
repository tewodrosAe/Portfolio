import { skills } from '../constants'
import { motion } from 'framer-motion'

const AboutMe = () => {
  const aboutVariant = {
    hidden: {
      opacity: 0,
      filter: 'blur(1.5px)',
      y: 100,
    },
    view: {
      opacity: 1,
      filter: 'blur(0)',
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <div id="about" className=" mx-10 overflow-visible md:mx-20 lg:mx-36 pt-16 text-secondary">
      <motion.div
        variants={aboutVariant}
        initial="hidden"
        whileInView="view"
        viewport={{ once: true }}
      >
        <div className="flex items-end justify-center gap-10 w-full">
          <h1 className="text-texts text-headingTwo md:text-4xl min-w-max font-primary font-light -tracking-wide">
            About Me
          </h1>
          <div className="w-full h-px bg-secondary" />
        </div>
        <div className="mt-12">
          <p className="text-secondary md:text-paragraphTwo text-[0.875rem]">
            Hello there I'm Tewodros, and my journey into the world of web
            development and programming started a few years ago when I
            encountered a challenge during my blender animation work. This led
            me to explore
            <span className="text-texts font-semibold">
              {' '}
              Blender Scripting
            </span>{' '}
            using Python, and I fondly recall the excitement of creating a
            dynamic
            <span className="text-texts font-semibold">
              {' '}
              3D neuron activity{' '}
            </span>
            animation that filled me with pride. Over time, I've had the
            opportunity to work with various technologies and collaborate with
            diverse individuals.{' '}
            <span className="mt-4">
              {' '}
              Apart from web development, my deep interest in 2D and 3D
              animation brings me joy as I create visually captivating
              animations and give life to characters and stories. Being part of
              a like-minded community that shares this passion is a truly
              enriching experience for me.
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-sm sm:text-base md:text-lg mt-12">
            Technologies i recently worked with include:
          </h1>
          <ul className="grid grid-cols-2 gap-3 text-[0.8rem] mt-7 sm:text-[0.84rem] md:text-sm">
            {skills.map((skill) => (
              <li className="font-bold" key={skill}>
                <span className="text-accent">// </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
