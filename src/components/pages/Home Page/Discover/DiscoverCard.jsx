import React from 'react';
import { ReactSVG } from 'react-svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const DiscoverCard = ({ map, name, location,  slideIndex, currentSlide }) => {
  return (
    <div className='text-white h-[750px]'>
      <div className='flex flex-col items-center justify-center h-full text-white relative'>
        <motion.div>
          <ReactSVG
            src={map}
            className={` w-96 h-96 ${currentSlide !== slideIndex ? 'invisible' : ""}`}
            // beforeInjection={(svg) => {
            //   svg.querySelectorAll('path').forEach((path) => {
            //     path.setAttribute('stroke', 'red');
            //     const totalLength = path.getTotalLength();
            //     path.setAttribute('stroke-dasharray',`10 ${dashOffset * 1000}`);
            //     path.setAttribute('stroke-dashoffset', `3 5`);
            //   });
            // }}
          />
        </motion.div>
        <p className={`font-bold text-2xl ${currentSlide !== slideIndex ? 'invisible' : ""}`}>I want to discover</p>
        <motion.p animate={currentSlide === slideIndex ? { opacity: 1 } : { opacity: 0.5 }} className={`font-medium text-5xl md:text-9xl akaya`}>{name}</motion.p>
        <motion.button
          initial={{ backgroundColor: "transparent", color: "white" }}
          whileHover={{ backgroundColor: "white", color: "black" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`py-3 rounded-full px-6 border text-base ${currentSlide !== slideIndex ? 'invisible' : ""}`}>
          Discover more
        </motion.button>
        <div className={`flex items-center gap-2 text-white absolute -left-24  md:-left-36 bottom-2 ${currentSlide !== slideIndex ? 'invisible' : ""}`}>
          <FontAwesomeIcon icon={faLocation} className='text-2xl' />
          <p>{location}</p>
        </div>
      </div>
      
    </div>
  );
};

export default DiscoverCard;
