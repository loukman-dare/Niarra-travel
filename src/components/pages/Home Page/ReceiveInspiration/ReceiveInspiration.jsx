import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const ReceiveInspiration = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  // زيادة المسافة لزيادة التأثير
  const y = useParallax(scrollYProgress, 50);

  // تغير الشفافية والحجم للنصوص عند التمرير لأعلى
  const text1Opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const text2Opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const text2Scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={ref} className=" w-full h-[] transform duration-300 bg-[#eeedea] transition-none relative flex flex-col justify-end items-center  object-cover">
      <motion.img
        style={{ y, scaleY: 1.5 }}
        src="https://www.niarratravel.com/static/1721198446/assets/img/footer/footer-clouds.png"
        className="absolute w-full  object-cover z-10 top-0  "
      />
      <motion.img
        src="https://www.niarratravel.com/content/images/newsletter/_720x393_crop_center-center_80_none/163/mountain-cutout-2.webp"
        className=" w-full  object-cover top-0 left-0 "
      />
      <motion.div transition={{ ease: "easeInOut", duration: 2 }} className="z-10 bg-[#eeedea] text-white text-center flex flex-col gap-2 lg:gap-7 w-full items-center lg:justify-end  h-[550px]   ">
        <div className='mt-24 lg:mt-56'> {/* زيادة المسافة العلوية */}
          <motion.div
            style={{ opacity: text1Opacity }}
            transition={{ duration: 3 }}  // مدة التحويل للنص الأول
            className='text-base text-black font-bold'
          >
            THE WORLD IS AT YOUR FEET
          </motion.div>
          <motion.div
            style={{ opacity: text2Opacity, scale: text2Scale }}
            transition={{ duration: 1.5 }}  // مدة التحويل للنص الثاني
            className='akaya font-semibold text-3xl lg:text-5xl text-black space-x-2 tracking-widest'
          >
            Receive inspiration in
          </motion.div>
          <motion.div
            style={{ opacity: text2Opacity, scale: text2Scale }}
            transition={{ duration: 1.5 }}  // مدة التحويل للنص الثاني
            className='akaya font-semibold text-3xl lg:text-5xl text-black space-x-2 tracking-widest'
          >
            your inbox
          </motion.div>
        </div>
        <form className="relative z-10 mt-5 lg:mt-20 flex flex-col  gap-6  w-full justify-center items-center"> {/* زيادة المسافة العلوية */}
          <div className='w-full lg:w-fit flex flex-col gap-6'>
            <div className=' flex items-center flex-col lg:flex-row gap-6 lg:gap-5 '>
              <div className='flex flex-col items-start relative input-container w-[90%]'>
                <input
                  type="text"
                  placeholder=" First name"  // إضافة placeholder
                  className="block mb-2 p-2 border-b border-black focus:outline-none bg-transparent text-black w-full"
                />
                <label className='absolute bottom-3 text-gray-500'>First name</label>
              </div>
              <div className='flex flex-col items-start relative input-container w-[90%]'>
                <input
                  type="text"
                  placeholder=" Last name"  // إضافة placeholder
                  className="block mb-2 p-2 border-b border-black focus:outline-none bg-transparent text-black w-full"
                />
                <label className='absolute bottom-3 text-gray-500'>Last name</label>
              </div>
            </div>
            <div className='flex items-center flex-col lg:flex-row gap-6 lg:gap-5'>
              <div className='flex flex-col items-start relative input-container w-[90%]'>
                <input
                  type="email"
                  placeholder=" email"  // إضافة placeholder
                  className="block mb-2 p-2 border-b border-black focus:outline-none bg-transparent text-black w-full"
                />
                <label className='absolute bottom-3 text-gray-500'>Email</label>
              </div>
              <div className='flex gap-2  leading-4 w-[90%] lg:w-full'>
                <input type="radio" id="html" value="HTML" />
                <label htmlFor="html" className='text-black w-full'>I'm happy to receive emails from Niarra Travel *</label>
              </div>
            </div>
          </div>
        </form>
        <button className='text-black border-black border-[1px] py-3 px-8 rounded-full mb-9 mt-5'>Subscribe</button>
      </motion.div>
    </div>
  );
};

export default ReceiveInspiration;
