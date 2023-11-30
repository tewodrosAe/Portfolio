/* import { useState, RefObject, useEffect } from "react"; */
import { motion } from 'framer-motion' 

export const Logo = () => {
    const animated = {
        y:0,
        x:0,
        transition:{
            duration:0.4,
            ease:'easeInOut'
        }
    }

    const parentVariant = {
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity:[0.3,0.8,1,1,0],
            scale:[1,1,1,1.1,0.8,0.4],
            transition:{
                duration:1.6,
            }
        }
    }
    return(
        <motion.div
        animate={{
            y:['0vh','0vh', '0vh','-100vh'],
            opacity:[1,1,1,1,1,1,1,1,0]
        }}
        transition={{
            ease:'easeOut',
            delay:0.6,
            duration:1,
        }}
        className=" bg-initial absolute flex items-center justify-center h-screen w-screen z-20">
            <motion.svg
            variants={parentVariant}
            initial='hidden'
            animate='visible'
            className='overflow-visible z-40' width={50} height={58} viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                d="M0 2.49614C0 2.18585 0.239023 1.92793 0.548416 1.90438L23.4075 0.163846C24.5685 0.0754416 25.5593 0.993669 25.5593 2.15807V2.33658C25.5593 3.48382 24.5963 4.39593 23.4507 4.33363L0.561244 3.08874C0.246465 3.07162 0 2.81138 0 2.49614Z" 
                fill= '#32CDE2'
                animate={animated}
                initial={{
                    pathLength: 0,
                    x: 15,
                }} 
                />
                <motion.path
                fill= '#32CDE2'
                animate={animated}
                initial={{
                    pathLength: 0,
                    x: -15,
                }} 
                d="M3.93221 7.74567C3.93221 6.57134 4.93922 5.64971 6.10896 5.7535L28.4584 7.73646C28.765 7.76366 29 8.02048 29 8.32825C29 8.64613 28.7498 8.90769 28.4322 8.92178L6.02084 9.91601C4.8826 9.96651 3.93221 9.05734 3.93221 7.91798V7.74567Z" />
                <motion.path
                fill= '#32CDE2'
                animate={animated}
                initial={{
                    pathLength: 0,
                    y: 5,
                }} 
                
                d="M13.6804 30.3325C12.6571 29.9899 12.073 28.8409 12.4017 27.8172L17.8589 10.8196C17.9082 10.6659 18.0452 10.5648 18.2039 10.5648C18.4484 10.5648 18.6436 10.7983 18.6071 11.0469L15.9819 28.9048C15.8176 30.0224 14.7437 30.6886 13.6804 30.3325Z"/>
                <motion.path
                fill= '#32CDE2'
                animate={animated}
                initial={{
                    pathLength: 0,
                    y: 5,
                }} 
                
                d="M7.86162 29.7017C7.6134 29.7017 7.41817 29.4593 7.4649 29.2091L10.6791 12.0008C10.8801 10.9245 11.9304 10.3031 12.9637 10.6491C14.016 11.0015 14.5962 12.2033 14.2131 13.237L8.19776 29.4654C8.14453 29.609 8.01271 29.7017 7.86162 29.7017Z"/>
            </motion.svg>
        </motion.div>
    )
}
export const LeftArrow = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M47.625 40.21L60.9916 23.21C61.5574 22.5292 63.3963 20.7517 63.315 19.8702C63.9958 20.436 63.2338 18.9888 63.315 19.8702C62.4336 19.9515 60.5574 21.6293 59.9916 22.31L40.7583 38.0433C40.268 38.6398 40 39.3879 40 40.16C40 40.9321 40.268 41.6802 40.7583 42.2767L58.9916 60.21C59.3054 60.5967 59.4916 61.21 59.9916 61.71C59.9916 61.71 59.9916 61.71 60.9916 62.71C61.9916 63.71 61.5 62.7193 61.5 63C62.0343 62.6647 61.5084 65.29 62 63.5C61.5084 62.79 61 62 61 61C60.5084 60.29 59.889 59.1998 59.4916 58.71L47.625 40.21Z" fill="#1AA5B7"/>
            <path d="M23.625 40.6321L36.9916 23.6321C37.5574 22.9514 39.3963 21.1738 39.315 20.2924C39.9958 20.8582 39.2338 19.4109 39.315 20.2924C38.4336 20.3736 36.5574 22.0514 35.9916 22.7321L16.7583 38.4654C16.268 39.0619 16 39.81 16 40.5821C16 41.3542 16.268 42.1023 16.7583 42.6988L34.9916 60.6321C35.3054 61.0188 35.4916 61.6321 35.9916 62.1321C35.9916 62.1321 35.9916 62.1321 36.9916 63.1321C37.9916 64.1321 37.5 63.1414 37.5 63.4221C38.0343 63.0868 37.5084 65.7122 38 63.9221C37.5084 63.2122 37 62.4221 37 61.4221C36.5084 60.7121 35.889 59.6219 35.4916 59.1321L23.625 40.6321Z" fill="#1AA5B7"/>
        </svg>
    )
}

export const RightArrow = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M32.375 40.21L19.0084 23.21C18.4426 22.5292 16.6037 20.7517 16.685 19.8702C16.0042 20.436 16.7662 18.9888 16.685 19.8702C17.5664 19.9515 19.4426 21.6293 20.0084 22.31L39.2417 38.0433C39.732 38.6398 40 39.3879 40 40.16C40 40.9321 39.732 41.6802 39.2417 42.2767L21.0084 60.21C20.6946 60.5967 20.5084 61.21 20.0084 61.71C20.0084 61.71 20.0084 61.71 19.0084 62.71C18.0084 63.71 18.5 62.7193 18.5 63C17.9657 62.6647 18.4916 65.29 18 63.5C18.4916 62.79 19 62 19 61C19.4916 60.29 20.111 59.1998 20.5084 58.71L32.375 40.21Z" fill="#1AA5B7"/>
            <path d="M56.375 40.6321L43.0084 23.6321C42.4426 22.9514 40.6037 21.1738 40.685 20.2924C40.0042 20.8582 40.7662 19.4109 40.685 20.2924C41.5664 20.3736 43.4426 22.0514 44.0084 22.7321L63.2417 38.4654C63.732 39.0619 64 39.81 64 40.5821C64 41.3542 63.732 42.1023 63.2417 42.6988L45.0084 60.6321C44.6946 61.0188 44.5084 61.6321 44.0084 62.1321C44.0084 62.1321 44.0084 62.1321 43.0084 63.1321C42.0084 64.1321 42.5 63.1414 42.5 63.4221C41.9657 63.0868 42.4916 65.7122 42 63.9221C42.4916 63.2122 43 62.4221 43 61.4221C43.4916 60.7121 44.111 59.6219 44.5084 59.1321L56.375 40.6321Z" fill="#1AA5B7"/>
        </svg>
    )
}

// Cursor animation

/* export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point; 
  }
  */
