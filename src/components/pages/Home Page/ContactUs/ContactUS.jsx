import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from 'framer-motion';

const ContactUS = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row relative justify-center items-center bg-[#daddc5] p-12 md:p-24'>
      <div className='flex flex-col md:gap-7 '>
        <div className='text-xl md:text-2xl lg:text-5xl w-full md:w-[90%] akaya font-extralight'>Contact a Travel Researcher</div>
        <div>We always aim to reply within 24 hours.</div>
      </div>
      <div className='flex flex-col md:flex-row gap-24 md:gap-5 mt-10 md:mt-0'>
        <div className='relative cursor-pointer w-56 h-24'>
          <div className='flex flex-col p-2 items-center justify-between'>
            <FontAwesomeIcon icon={faPhone} className='text-2xl' />
            <div className='font-sans font-semibold'>Call US</div>
            <div className='font-sans font-semibold'>+963-992339229</div>
          </div>
          <motion.svg
            width="64" height="64" viewBox="0 0 64 64" className='w-full h-full scale-[2] absolute z-50 top-0 left-0'
            initial={{ strokeDasharray: "0.5 1" }}
            whileHover={{ strokeDasharray: ["10 180", "0.5 0"] }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="0.6" />
          </motion.svg>
        </div>
        <div className='relative cursor-pointer w-56 h-24'>
          <div className='flex flex-col p-2 gap-5 items-center justify-between'>
            <FontAwesomeIcon icon={faMessage} className='text-2xl' />
            <div className='font-sans font-semibold'>Send us an enquiry</div>
          </div>
          <motion.svg
            width="64" height="64" viewBox="0 0 64 64" className='w-full h-full scale-[2] absolute z-50 top-0 left-0'
            initial={{ strokeDasharray: "0.5 1" }}
            whileHover={{ strokeDasharray: ["10 180", "0.5 0"] }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="0.6" />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
