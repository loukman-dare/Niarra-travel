import {motion, useScroll, useTransform} from "framer-motion"
import animal1 from "../../../../assets/why/animal.jpg"
import animal2 from "../../../../assets/why/animal1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth, faLocationCrosshairs, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const WhyNiarra = () => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress,70);

  return (
    <div className='bg-green_color p-24 flex flex-col gap-6'>
        <div className='flex flex-col justify-center items-center gap-7'>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.5,ease:"easeInOut"}} className='text-white_color font-bold'>WHAT MAKES US DIFFERENT</motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:1,ease:"easeInOut"}} className='text-white text-7xl akaya'>Why Niarra</motion.div>
        </div>
        <div className="flex items-start   gap-24">
          <motion.div style={{translateY:y ,transition:"ease"}} className="w-1/3 flex flex-col gap-24 mt-36">
              <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                      <FontAwesomeIcon icon={faLocationCrosshairs} className="text-white text-4xl"/>
                    </div>
                    <div className="text-white text-4xl font-normal akaya leading-none text-center">
                        Unforgettable experiences
                    </div>
                    <div className="text-white text-center font-light">
                      Creating your trip is entirely collaborative and our Travel Researchers are here for every step.
                    </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-3 translate-x-32">
                    <div>
                    <FontAwesomeIcon icon={faEarth} className="text-white text-4xl"/>
                    </div>
                    <div className="text-white text-4xl font-normal akaya leading-none text-center">
                      Positive impact
                    </div>
                    <div className="text-white text-center font-light">
                    Curated sustainable experiences and accommodation that maximize the benefits to local people and place.
                    </div>
              </div>
           
              <div className="flex flex-col justify-center items-center gap-3 translate-x-80">
                    <div>
                    <FontAwesomeIcon icon={faUserFriends} className="text-white text-4xl"/>
                    </div>
                    <div className="text-white text-4xl font-normal akaya leading-none text-center">
                    Fairness and transparency
                    </div>
                    <div className="text-white text-center font-light">
                    An open, competitive pricing structure that ensures more money goes to where it's needed in the destination.
                    </div>
              </div>


          </motion.div>


          <div className="w-1/3 relative  transform -rotate-3">
            <div className="w-[300px] h-[400px] ">
              <img src={animal1} className="w-full h-full" />
            </div>
            <motion.div style={{translateY:y , translateX:'30%'}} className="absolute z-10 right-0 bottom-0 translate-y-1/2 translate-x-1/3 w-[200px] h-[250px]">
              <img src={animal2} className="w-48 h-64 "/>
            </motion.div>

          </div>


          <div className="w-1/3 mt-36 flex flex-col p-10 gap-12">
            <p className="text-white text-xl leading-loose font-medium">Niarra Travel is a forward-thinking travel company headquartered in London born out of a passion to do things differently.</p>
            <p className="text-white text-lg font-light leading-relaxed">In Swahili, a Bantu language spoken by millions in Eastern, Central and Southern Africa, the name Niara means "with utmost purpose" and our team are united by a passion for exploration and a belief that the right kind of travel can make the world a better place.</p>
            <p className="text-white text-lg font-light leading-relaxed">Our Travel Researchers are here to create incredible trips with a positive impact for you.</p>
          </div>
        </div>
         
    </div>
  )
}

export default WhyNiarra
