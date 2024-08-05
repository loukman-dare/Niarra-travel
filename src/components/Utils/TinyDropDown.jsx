import { faChevronRight, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

const TinyDropDown = ({ isOpen }) => {
    const anim = {
        initial: { y: "-100%" },
        animate: { y: "0%" },
        exit: { y: "-100%", transition: { duration: 1, ease: 'easeOut' } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={anim}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='absolute top-0 left-0 bg-white w-full py-24 flex justify-center items-center flex-col gap-24 -z-10'
                >
                    <div className='flex flex-col gap-9 items-center'>
                        <div className='flex gap-2 items-center cursor-pointer font-semibold'>
                            <div className='text-4xl font-semibold'>Destinations</div>
                            <FontAwesomeIcon icon={faChevronRight} className='text-[12px] translate-y-1/2' />
                        </div>
                        <div className='flex gap-2 items-center cursor-pointer font-semibold'>
                            <div className='text-4xl'>Travel Style</div>
                            <FontAwesomeIcon icon={faChevronRight} className='text-[12px] translate-y-1/2' />
                        </div>
                        <div className='flex gap-2 items-center cursor-pointer font-semibold'>
                            <div className='text-4xl'>About us</div>
                            <FontAwesomeIcon icon={faChevronRight} className='text-[12px] translate-y-1/2' />
                        </div>
                        <div className='flex gap-2 items-center cursor-pointer font-semibold'>
                            <div className='text-4xl'>Stories</div>
                        </div>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <div className='flex flex-col items-center gap-2 cursor-pointer w-40 h-40 rounded-full border-dashed border-black border-[1px] justify-center'>
                            <FontAwesomeIcon icon={faPhone} className='text-4xl' />
                            <p className='font-base text-lg font-semibold'>Contact a Travel</p>
                            <p className='font-base text-lg font-semibold'>ReSearcher</p>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer w-40 h-40 rounded-full border-dashed border-black border-[1px] justify-center'>
                            <FontAwesomeIcon icon={faMessage} className='text-4xl' />
                            <p className='font-base text-lg font-semibold'>Send US an</p>
                            <p className='font-base text-lg font-semibold'>enquiry</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TinyDropDown;
