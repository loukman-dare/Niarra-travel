import {AnimatePresence, motion, transform} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocation } from '@fortawesome/free-solid-svg-icons'

const DropDown = ({isOpen,level,setLevel,prevValue,setPrevValue,currentValue,setCurrentValue,images , values,locations}) => {
    const anim = {
        initial: { y: isOpen ? "-100%" : "0%" },
        animate: { y: isOpen ? "0%" : "-100%" },
        transition: { duration: 1, ease: 'easeOut' },
        initialImage: { opacity: isOpen ? 0 : 1 },
        animateImage: { opacity: isOpen ? 1 : 0 },
        transitionImage: { delay: isOpen ? 1.5 : 0, duration: 1, ease: 'easeOut' },
        exitImage: { opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        initialList: { opacity: isOpen ? 0 : 1 },
        animateList: { opacity: isOpen ? 1 : 0 },
        transitionList: { delay: isOpen ? 1.3 : 0, duration: 1, ease: 'easeOut' },
        exitList: { opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { y: "-100%", transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
    };

    const chooseValue = (newValue) => {
        if(newValue !== currentValue){
            setPrevValue(currentValue)
            setCurrentValue(newValue)
            setLevel((prev) => prev + 1)
        }
    };

    const getImageIndex = (value) => {
        return values.indexOf(value);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={anim.initial}
                    animate={anim.animate}
                    exit={anim.exit}
                    transition={anim.transition}
                    className='overflow-hidden absolute -z-10 w-screen h-screen top-0 left-0 bg-white_color'
                >
                    <div className='flex h-full'>
                        <div className='w-2/4 h-full flex flex-col'>
                            <motion.div
                                initial={anim.initialImage}
                                animate={anim.animateImage}
                                transition={anim.transitionImage}
                                exit={anim.exitImage}
                                className='relative translate-x-1/4 h-full translate-y-1/4'
                            >
                                <img
                                    className={`absolute w-[300px] h-[400px]`}
                                    src={images[getImageIndex(prevValue)]}
                                    alt="previous"
                                />
                                <img
                                    className={`absolute w-[300px] h-[400px] ${level === 0 ? "" : level % 5                           === 0 ? "transform translate-x-10 translate-y-6 rotate-3" : level % 3 === 0 ? "transform -translate-x-15 -translate-y-4 -rotate-6" : "transform -translate-x-10 -translate-y-6 -rotate-3"}`}
                                    src={images[getImageIndex(currentValue)]}
                                    alt="current"
                                />
                                {locations && (
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className='flex relative bottom-[-450px] left-[-100px] items-center gap-5 '>
                                        <FontAwesomeIcon icon={faLocation} />
                                        <div>{locations[getImageIndex(currentValue)]}</div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                        <motion.div
                            initial={anim.initialList}
                            animate={anim.animateList}
                            transition={anim.transitionList}
                            exit={anim.exitList}
                            className='h-screen flex items-center justify-center'
                        >
                            <div className='flex flex-col gap-3'>
                                {values.map((val) => (
                                    <div
                                        key={val}
                                        onMouseEnter={() => chooseValue(val)}
                                        className='text-3xl country cursor-pointer hover:opacity-40 z-10'
                                    >
                                        {val}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DropDown;

