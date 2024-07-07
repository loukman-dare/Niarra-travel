import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import mountain from "../../../../assets/hero/mountain.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons'
import Header from '../../../Dividing/header';

const Hero = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const [dashOffset, setDashOffset] = useState(0);

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  const xPos = typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) / 20 : 0;
  const yPos = typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) / 20 : 0;
  const [openVedio,setOpenVedio] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Increase dash offset based on scroll progress
      setDashOffset(latest * 750); // Adjust the factor as needed
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    controls.start({ strokeDashoffset: dashOffset });
  }, [dashOffset, controls]);


  return (
    <div className=' relative w-screen h-screen z-10 '>
        <Header />

      <div
        className='absolute h-screen w-screen top-0 left-0 overflow-hidden -z-50'
        onMouseMove={handleMouseMove}
      >
        <motion.img
          src={mountain}
          className='w-full h-full '
          style={{ scale: 1.05 }}
          animate={{
            x: xPos,
            y: yPos
          }}
          transition={{
            // ease: "easeInOut"
            type: "just"
          }}
        />
      </div>
      <div className='flex flex-col items-center absolute  -z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <motion.span
         className='text-white text-xl mb-8 font-bold  first' 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1,delay:0.5, ease:"easeIn"}}
         >
          CONNECTING YOUR JOURNEY WITH PURPOSE
        </motion.span>
        <motion.div 
        className='flex flex-col items-center'
        initial={{scaleX:2,opacity:0}}
        whileInView={{scaleX:1,opacity:1}}
        transition={{duration:1,delay:0.5, ease:"easeOut"}}
        >
            <span 
            className='text-white text-7xl akaya'
            >
              Unforgettable travel
            </span>
            <span className='text-white text-7xl akaya'>experiences with</span>
            <span className='text-white text-7xl akaya'>a positive impact</span>
        </motion.div>
        
      </div>
      <motion.div onClick={()=>setOpenVedio(true)} initial="hidden" whileHover="visible" className='absolute -z-20 cursor-pointer bottom-10 left-10  flex items-center gap-10'>
           
        <motion.div  transition={{ duration: 1,  ease: "easeOut" }} className='relative flex items-center border-none'>
          
          <div>
              <div className='relative'>
              <motion.img
                src={mountain}
                className="w-16 h-16 rounded-full"
                variants={{
                  hidden: { scale: 1 },
                  visible: { scale: 1.5 },
                }}
              />
                <motion.div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                  variants={{
                    hidden: { opacity:1},
                    visible: {opacity:0},
                  }}
                >
                  <FontAwesomeIcon   icon={faPlay} className='text-white text-lg opacity-70'/>
                </motion.div>
              </div>
          </div>
          <div  className='absolute -z-10 top-0 left-0 scale-[1.4] '>
          <motion.svg
            width="64" height="64" viewBox="0 0 64 64" className='w-16 h-16'
            initial={{ strokeDasharray: "0, 188.4" }}
            animate={{ strokeDasharray: "4 2" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
        <circle cx="32" cy="32" r="30" fill="none" stroke="white" strokeWidth="1" />
      </motion.svg>
          </div>
        </motion.div>
        <div className='text-white'>open vedio</div>
      </motion.div>
      <AnimatePresence>
      {
        openVedio && (
          <motion.div
           initial={{y:"100%"}} 
           animate={{y:0}} 
           transition={{ duration: 1,  ease: "easeOut" }}
           exit={{y:"100%" ,transition: { duration: 0.5, ease: 'easeOut' }}}
          className='absolute z-40 top-0 lef-0 w-screen h-screen bg-black flex items-center justify-center flex-col gap-10'>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/844594716?h=3f559e32b1" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            <div className='relative'>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}  className='w-12 h-12  rounded-full border-2 border-dotted border-white flex justify-center  items-center' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer' onClick={()=>setOpenVedio(false)}>
              <FontAwesomeIcon icon={faClose}  className='text-white'/>
            </div>
          </div>
          
        
          </motion.div>
        )
      }
      </AnimatePresence>
           
        
        <motion.div transition={{ duration: 1, ease: "easeOut" }} className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center border-none'>
          <motion.svg
            width="128" height="128" viewBox="0 0 128 128" className='w-32 h-32'
            strokeDasharray="1 2"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
            transition={{
              rotate: { duration: 12, ease: "linear", repeat: Infinity },
              scale: { duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
            }}
          >
            <circle cx="64" cy="64" r="60" fill="none" stroke="white" strokeWidth="2"  />
          </motion.svg>
        </motion.div>
        <motion.div  transition={{ duration: 1,  ease: "easeOut" }} className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center border-none'>
            <motion.svg
              width="64" height="64" viewBox="0 0 256 256" className='w-64 h-64'
              strokeDasharray="1 2"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
              transition={{
                rotate: { duration: 30, ease: "linear", repeat: Infinity },
                scale: { duration: 35, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
              }}
            >
              <circle cx="128" cy="128" r="120" fill="none" stroke="white" strokeWidth="1" />
            </motion.svg>
        </motion.div>

        <motion.div
          className='absolute bottom-0 -z-20 translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center border-none'
        >
          <motion.svg
      width="64"
      height="64"
      viewBox="0 0 256 256"
      className='w-[500px] h-[500px]'
      animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
      transition={{
        rotate: { duration: 60, ease: "linear", repeat: Infinity },
        scale: { duration: 40, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
      }}
    >
      <motion.circle
        cx="128"
        cy="128"
        r="120"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeDasharray="1 2"
        animate={controls}
      />
    </motion.svg>
        </motion.div>
        <motion.div className='text-white text-base absolute bottom-0 left-1/2 -translate-x-1/2'> 
            <p>Scroll</p>
            <p>Down</p>

        </motion.div>
    </div>
  );
}

export default Hero;
