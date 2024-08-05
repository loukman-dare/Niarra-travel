import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import mountain from "../../../../assets/hero/mountain.jpg";
import mount from "../../../../assets/hero/mount.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons'
import Header from '../../../Dividing/header';

const Hero = () => {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  const xPos = typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) / 20 : 0;
  const yPos = typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) / 20 : 0;
  const [openVedio, setOpenVedio] = useState(false);

  useEffect(() => {
    if (openVedio) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
  }, [openVedio]);

  // Get scroll progress
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to strokeDasharray values
  // These values start as a full circle (two halves joined) and shrink with scroll
  const strokeDasharray = useTransform(scrollYProgress, [0, 1], ["0.5 1", "100 1000"]);
  const strokeDasharrayLeft = useTransform(scrollYProgress, [0, 1], ["0 0", "0 10000"]);
  const strokeDasharrayRight = useTransform(scrollYProgress, [0, 1], ["0.5 1", "0 10000"]);

  // Transform scroll progress to opacity values
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className='relative w-screen h-screen z-10'>
        <Header />

      <div
        className='absolute h-screen w-screen top-0 left-0 overflow-hidden -z-50'
        onMouseMove={handleMouseMove}
      >
        <motion.img
          src={mountain}
          className='w-full h-full'
          style={{ scale: 1.05, opacity }}
          animate={{
            x: xPos,
            y: yPos
          }}
          transition={{
            type: "just"
          }}
        />
      </div>
      <div className='flex flex-col items-center absolute -z-30  md:mt-16 lg:mt-0 left-1/2 transform -translate-x-1/2 w-full  '>
        <motion.span
         className='text-white text-base md:text-xl lg:text-2xl mb-8 font-bold first w-full text-center' 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1,delay:0.5, ease:"easeIn"}}
         style={{ opacity }}
         >
          CONNECTING YOUR JOURNEY WITH PURPOSE
        </motion.span>
        <motion.div 
        className='flex flex-col items-center'
        initial={{scaleX:2,opacity:0}}
        whileInView={{scaleX:1,opacity:1}}
        transition={{duration:1,delay:0.5, ease:"easeOut"}}
        style={{ opacity }}
        >
            <span 
            className='text-white text-4xl md:text-5xl lg:text-6xl  akaya'
            >
              Unforgettable travel
            </span>
            <span className='text-white text-4xl md:text-5xl lg:text-6xl akaya'>experiences with</span>
            <span className='text-white text-4xl md:text-5xl lg:text-6xl akaya'>a positive impact</span>
        </motion.div>
        
      </div>
      <motion.div onClick={() => setOpenVedio(true)} initial="hidden" whileHover="visible" className='absolute -z-20 cursor-pointer bottom-1/3 md:bottom-10 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 flex items-center gap-10' style={{ opacity }}>
        <motion.div transition={{ duration: 1, ease: "easeOut" }} className='relative flex items-center border-none'>
          <div>
              <div className='relative'>
              <motion.img
                src={mount}
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
                  <FontAwesomeIcon icon={faPlay} className='text-white text-lg opacity-70'/>
                </motion.div>
              </div>
          </div>
        

<div className='absolute -z-10 top-0 left-0 scale-[1.4]'>
  <motion.svg
    width="64" height="64" viewBox="0 0 64 64" className='w-16 h-16'
    initial={{ strokeDasharray: "1 299", strokeDashoffset: "299" }}
    animate={{ strokeDasharray: "1 2", strokeDashoffset: "0" }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1,2],
      // repeat: Infinity,
      repeatType: "mirror"
    }}
  >
    <circle cx="32" cy="32" r="30" fill="none" stroke="white" strokeWidth="1" />
  </motion.svg>
</div>

        </motion.div>
        <div className='text-white hidden md:block'>open video</div>
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
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/844594716?h=3f559e32b1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
            <div className='relative'>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}  className='w-12 h-12 rounded-full border-2 border-dotted border-white flex justify-center items-center' />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer' onClick={() => setOpenVedio(false)}>
                <FontAwesomeIcon icon={faClose} className='text-white'/>
              </div>
            </div>
          </motion.div>
        )
      }
      </AnimatePresence>
      {/* <motion.div transition={{ duration: 1, ease: "easeOut" }} className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center border-none'>
        <motion.svg
          width="128" height="128" viewBox="0 0 128 128" className='w-32 h-32'
          style={{ strokeDasharray }}
          animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
          transition={{
            rotate: { duration: 12, ease: "linear", repeat: Infinity },
            scale: { duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
          }}
        >
          <circle cx="64" cy="64" r="60" fill="none" stroke="white" strokeWidth="2"  />
        </motion.svg>
      </motion.div>
      <motion.div transition={{ duration: 1, ease: "easeOut" }} className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center border-none'>
        <motion.svg
          width="64" height="64" viewBox="0 0 256 256" className='w-64 h-64'
          style={{ strokeDasharray }}
          animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
          transition={{
            rotate: { duration: 30, ease: "linear", repeat: Infinity },
            scale: { duration: 35, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
          }}
        >
          <circle cx="128" cy="128" r="120" fill="none" stroke="white" strokeWidth="1"   />
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
          style={{ strokeDasharray }}
          animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
          transition={{
            rotate: { duration: 30, ease: "linear", repeat: Infinity },
            scale: { duration: 35, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
          }}
        >
          <motion.circle
            cx="128"
            cy="128"
            r="120"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray={strokeDasharrayRight}
            strokeDashoffset={useTransform(scrollYProgress, [0, 0.5, 1], [0, 377, 0])}
          />
          <motion.circle
            cx="128"
            cy="128"
            r="120"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray={strokeDasharrayLeft}
            strokeDashoffset={useTransform(scrollYProgress, [0, 0.5, 1], [377, 0, -0])}
          />
        </motion.svg>
      </motion.div> */}
      <motion.div className='text-white text-base absolute bottom-0 left-1/2 -translate-x-1/2' style={{ opacity }}>
        <p>Scroll</p>
        <p>Down</p>
      </motion.div>
    </div>
  );
}

export default Hero;
