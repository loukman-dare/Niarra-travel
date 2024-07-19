import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const ReceiveInspiration = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  // زيادة المسافة لزيادة التأثير
  const y = useParallax(scrollYProgress, 90);

  return (
    <div ref={ref} className="w-full  relative flex flex-col justify-end items-center mount bg-cover">
      <motion.img
        style={{ y }}
        src="https://www.niarratravel.com/static/1721198446/assets/img/footer/footer-clouds.png"
        className="absolute w-full h-full object-cover"
      />
      <motion.div style={{ y, scaleY: 1.2 }} transition={{ ease: "easeInOut", duration: 2 }} className="p-16 z-10 text-white text-center flex flex-col gap-7 w-full items-center justify-end cloud h-[900px] mt-96">
        <div>
          <div className='text-xs text-black font-bold'>THE WORLD IS AT YOUR FEET</div>
          <div className='akaya font-semibold text-3xl text-black space-x-2 tracking-widest'>Receive inspiration in</div>
          <div className='akaya font-semibold text-3xl text-black space-x-2 tracking-widest'>your inbox</div>
        </div>
        <form className="relative z-10">
          <div className='flex gap-3'>
            <input type="text" placeholder="First name" className="block mb-2 p-2" />
            <input type="text" placeholder="Last name" className="block mb-2 p-2" />
          </div>
          <div className='flex items-center gap-3'>
            <input type="email" placeholder="Email" className="block mb-2 p-2" />
            <div className='flex gap-2 w-56 leading-4'>
              <input type="radio" id="html" value="HTML" />
              <label htmlFor="html" className='text-black'>I'm happy to receive emails from Niarra Travel *</label>
            </div>
          </div>
        </form>
        <button className='text-black border-black border-[1px] py-3 px-8 rounded-full mb-9'>Subscribe</button>
      </motion.div>
    </div>
  );
};

export default ReceiveInspiration;
