import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useFollowPointer } from '../constants'

export default function App() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0,0.6,0.2,0.8,1],
      }}
      transition={{
        delay:3,
        duration:0.8
      }}
    >
      <motion.div
        ref={ref}
        className="fixed h-80 w-80 top-2/6 -left-20 blur-[100px] opacity-30 rounded-full bg-gradient-to-r from-circle1 to-circle2"
        animate={{ x, y }}
        transition={{
          duration: 0.1,
        }}
      />
    </motion.div>
  )
}
