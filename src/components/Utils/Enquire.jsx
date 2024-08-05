import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const Enquire = () => {
  return (
    <div className='absolute right-0 top-0 w-[90%] bg-black text-white p-24 flex'>
      <div className='flex flex-col gap-20 w-1/3'>
        <div className='text-5xl akaya'>
          Contact a Travel Researcher
        </div>
        <div className='relative cursor-pointer w-56 h-56'>
          <div className='flex flex-col p-2 items-center justify-center absolute z-10 inset-0'>
            <FontAwesomeIcon icon={faPhone} className='text-2xl' />
            <div className='font-sans font-semibold'>Call US</div>
            <div className='font-sans font-semibold'>+963-992339229</div>
          </div>
          <motion.div
            className='absolute inset-0 flex items-center justify-center'
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <motion.svg
              width="200" height="200" viewBox="0 0 200 200"
              initial={{stroke:"white"}}
                hover={{stroke:"red"}}
              variants={{
                initial:{stroke:"white"},
                hover:{stroke:"red"}
                
              }

            }
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}

            >
              <motion.circle cx="100" cy="100" r="90" fill="none" strokeWidth="1" strokeDasharray="2 3" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
      <div>
        <div>Contact us by sending a message</div>
        <div>We always aim to reply within 24 hours.</div>
      </div>
    </div>
  )
}

export default Enquire
