import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"

const InspiredCard = ({ img, countryIcon, countryName, days, type, explain, price, slideIndex }) => {
  const slideOffset = slideIndex *20

  return (
    <motion.div 
      className='w-96 h-[700px] p-7 relative cursor-pointer transform duration-500 overflow-hidden  '
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <motion.img 
        src={img}
        className='absolute w-full h-full top-0 left-0 object-cover '
        animate={{ x: slideOffset ,scale:1.7}}
        transition={{ ease: "easeIn", duration: 0.5 }}
      />
      <div className='relative z-10'>
        <div className='flex items-center gap-2'>
          <div className='text-white relative flex justify-center items-center w-16 h-16 bg-white rounded-full'>
            <FontAwesomeIcon icon={countryIcon} className='text-3xl text-black ' />
            <div className='absolute inset-0 flex justify-center items-center'>
              <motion.svg
                width="64" height="64" viewBox="0 0 64 64" className='w-14 h-14'
                initial={{ strokeDasharray: "0, 188.4" }}
                animate={{ strokeDasharray: "4 2" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="1" />
              </motion.svg>
            </div>
          </div>
          <div className='text-lg font-bold uppercase text-white'>{countryName}</div>
        </div>
        <div className='mt-64 text-white flex flex-col gap-4'>
          <p className='text-base font-medium'>{`${days}-days Trip`}</p>
          <p className='text-3xl font-extrabold akaya text-center'>{type}</p>
          <p className='text-sm font-normal '>{explain}</p>
          <div className='flex items-center justify-between'>
            <button className='py-3 px-5 border rounded-full hover:text-black hover:bg-white transform duration-500'>Discover Trip</button>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-sm font-bold'>FROM</p>
              <div className='flex items-center gap-1'>
                <p className='text-xl font-medium'>{price}</p>
                <p className='text-sm font-light'>pp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default InspiredCard;
