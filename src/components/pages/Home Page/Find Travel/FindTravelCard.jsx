import React from 'react';
import { motion } from 'framer-motion';

const FindTravelCard = ({ img, name, exp, index }) => {
  return (
    <div className={`flex flex-col items-center gap-7 p-16 ${index % 2 === 0 ? "-translate-y-24" : ""}`}>
      <div className='w-80 h-[500px] relative p-10 akaya text-3xl'>
        <img src={img} className='w-full h-full absolute top-0 left-0 -z-10' />
        <p className='text-center text-white'>{name}</p>
      </div>
      <div className='text-center font-semibold opacity-50'>{exp}</div>
      <motion.button 
        initial={{ background: "transparent", color: "black" }}
        whileHover={{ background: "black", color: "white" }}
        transition={{ duration: 2 }}
        className='border-[2px] border-black border-solid py-3 px-8 rounded-full opacity-50 font-semibold text-lg'>
        Discover more
      </motion.button>
    </div>
  );
}

export default FindTravelCard;
