import { motion } from 'framer-motion'

interface buttonType {
  text: string
}
const Button = ({ text }: buttonType) => {
  const isContact = text === 'Reach Out! :)'
  const buttonVariant = {
    rest: {
      scale: 1,
      y: 0,
      x: 0,
    },
    hover: {
      scale: 1.01,
      y: -1,
      x: 1,
    },
  }
  const spanOneVariant = {
    rest: {
      transform: 'scaleX(0)',
      display: 'none',
      transition: {
        duration: 0,
      },
    },
    hover: {
      transform: 'scaleX(1)',
      display: 'block',
      opacity: [1, 1, 1, 1, 0],
    },
  }
  const spanTwoVariant = {
    rest: {
      transform: 'scaleY(0)',
      display: 'none',
      transition: {
        duration: 0,
      },
    },
    hover: {
      transform: 'scaleY(1)',
      display: 'block',
      opacity: [1, 1, 1, 1, 0],
    },
  }
  const circleVariant = {
    rest: {
      top: -1.5,
      left: -1,
      transition: {
        duration: 0,
      },
    },
    hover: {
      top: ['0%', '0%', '100%', '100%', '-4.5%'],
      left: ['-4.5%', '100%', '100%', '-4.5%', '-4.5%'],
      scale: [1, 1, 1, 0, 0],
    },
  }

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={buttonVariant}
      className="primary-btn overflow-visible text-paragraph w-48 mt-6 "
    >
      <motion.div
        variants={circleVariant}
        className="button-span h-1.5 w-1.5 rounded-full shadow-sm shadow-accent"
      />
      <motion.span
        variants={spanOneVariant}
        transition={{
          duration: 0.2,
        }}
        className="button-span w-full h-px left-0 top-0 origin-left "
      />
      <motion.span
        transition={{
          delay: 0.2,
          duration: 0.2,
        }}
        variants={spanTwoVariant}
        className="button-span h-full w-px right-0 top-0 origin-top "
      />
      <motion.span
        transition={{
          delay: 0.4,
          duration: 0.2,
        }}
        variants={spanOneVariant}
        className="button-span w-full h-px right-0 bottom-0 origin-right "
      />
      <motion.span
        transition={{
          delay: 0.6,
          duration: 0.2,
        }}
        variants={spanTwoVariant}
        className="button-span h-full w-px left-0 top-0 origin-bottom "
      />
      <div className={`py-4 ${isContact ? 'tracking-wider text-sm ':''}`}>{text}</div>
    </motion.button>
  )
}

export default Button
