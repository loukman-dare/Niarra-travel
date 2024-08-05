import { motion, useScroll, useTransform } from "framer-motion";
import animal1 from "../../../../assets/why/animal.jpg";
import animal2 from "../../../../assets/why/animal1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth, faLocationCrosshairs, faUserFriends, faUsers } from "@fortawesome/free-solid-svg-icons";

const WhyNiarra = () => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [distance, -distance]);
  }

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 200);

  return (
    <div className="bg-green_color  lg:p-24 flex flex-col gap-6 p-12">
      <div className="flex flex-col justify-center items-center gap-7 mb-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }} className="text-white_color font-bold">
          WHAT MAKES US DIFFERENT
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease: "easeInOut" }} className="text-white text-7xl akaya">
          Why Niarra
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-24">
        <motion.div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-24 lg:mt-48 order-3 lg:order-1 ml-12 ">
          <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration:1 , ease:"easeInOut"}} className="flex   md:flex-col justify-center items-center gap-3 h-fit">
            <div className="flex w-1/6 md:w-fit  justify-center items-center">
              <FontAwesomeIcon icon={faLocationCrosshairs} className="text-white text-4xl" />
            </div> 
            <div className="flex flex-col w-4/6 md:w-fit justify-center items-start  md:items-center">
              <div className="text-white text-base lg:text-4xl font-normal akaya leading-none text-start md:text-center">
                Unforgettable experiences
              </div>
              <div className="text-white text-start md:text-center font-light text-sm lg:text-base">
                Creating your trip is entirely collaborative and our Travel Researchers are here for every step.
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration:1 , ease:"easeInOut"}} className="flex md:flex-col justify-center items-center gap-3 h-fit lg:translate-x-1/2">
            <div className="flex w-1/6 md:w-fit  justify-center items-center">
              <FontAwesomeIcon icon={faEarth} className="text-white text-4xl" />
            </div> 
            <div className="flex flex-col w-4/6 md:w-fit  justify-center items-start  md:items-center">
              <div className="text-white text-base lg:text-4xl font-normal akaya leading-none text-start md:text-center">
              Positive impact
              </div>
              <div className="text-white text-start md:text-center font-light text-sm lg:text-base">
              Curated sustainable experiences and accommodation that maximize the benefits to local people and place.
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration:1 , ease:"easeInOut"}} className="flex md:flex-col justify-center items-center gap-6 h-fit lg:translate-x-full">
            <div className="flex w-1/6 md:w-fit  justify-center items-center">
              <FontAwesomeIcon icon={faUsers} className="text-white text-4xl" />
            </div> 
            <div className="flex flex-col w-4/6 md:w-full  justify-center items-start md:items-center">
              <div className="text-white text-base lg:text-4xl font-normal akaya leading-none text-start md:text-center">
              Fairness and transparency
              </div>
              <div className="text-white text-start md:text-center font-light text-sm lg:text-base">
              An open, competitive pricing structure that ensures more money goes to where it's needed in the destination.
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className=" lg:w-1/3 relative order-1 lg:order-2">
          <motion.div style={{y:y/2}} className="rotate-3">
            <img src={animal1} className="w-[235px] sm:w-[400px] sm:h-[600px] lg:w-[250px] h-[385px] lg:h-[350px]" />
          </motion.div >
          <motion.div style={{ y:y }} transition={{ease:"easeInOut"}} className="absolute z-10 left-1/2  bottom-0 lg:bottom-1/4 w-[150px] h-[250px] sm:w-[250px] sm:h-[400px] lg:w-[150px] lg:h-[250px]">
            <img src={animal2} className="object-cover w-full h-full" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/3 mt-36 flex flex-col p-1 lg:p-10 gap-12 lg:gap-4 order-2 lg:order-3 md:flex-row md:text-center lg:flex-col">
          <p className="text-white text-sm leading-relaxed  font-medium">
            Niarra Travel is a forward-thinking travel company headquartered in London born out of a passion to do things differently.
          </p>
          <p className="text-white text-sm  font-light">
            In Swahili, a Bantu language spoken by millions in Eastern, Central and Southern Africa, the name Niara means "with utmost purpose" and our team are united by a passion for exploration and a belief that the right kind of travel can make the world a better place.
          </p>
          <p className="text-white text-sm  font-light">
            Our Travel Researchers are here to create incredible trips with a positive impact for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyNiarra;
