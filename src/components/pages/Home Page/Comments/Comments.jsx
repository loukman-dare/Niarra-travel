import React, { Component } from "react";
import Slider from "react-slick";
import CommentCard from "../../../Utils/CommentCard";
import { motion } from "framer-motion";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <motion.div initial="initial" whileHover="hover" className={`${className} w-10 h-10 md:w-16 md:h-16 group z-50  md:right-[70px]`}
      style={{ ...style, borderRadius:"100%",position:"absolute" }}
      onClick={onClick} 
     >
          <motion.div 
          
          transition={{ease:'easeInOut' , duration:1}}
          className="rounded-ful flex items-center justify-center relative ">
            <FontAwesomeIcon icon={faChevronRight} className='text-base text-black'/>
            <div className='absolute inset-0 flex justify-center items-center'>
            <motion.svg
              width="64" height="64" viewBox="0 0 64 64" className='w-14 h-14'
              strokeDasharray="3 2"
              initial={{rotate:0,scale:1}}
              whileHover={{rotate:360,scale:1.4}}
              
              variants={{
                initial: {rotate:0},
                hover: { rotate:360}
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="1" />
            </motion.svg>
          </div>
          </motion.div>
          
        </motion.div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <motion.div initial="initial" whileHover="hover" className={`${className} w-10 h-10 md:w-16 md:h-16 group z-50  md:left-[70px]`}
      style={{ ...style, borderRadius:"100%",position:"absolute" }}
      onClick={onClick} 
     >
          <motion.div 
          
          transition={{ease:'easeInOut' , duration:1}}
          className="rounded-ful flex items-center justify-center relative ">
            <FontAwesomeIcon icon={faChevronLeft} className='text-base text-black'/>
            <div className='absolute inset-0 flex justify-center items-center'>
            <motion.svg
              width="64" height="64" viewBox="0 0 64 64" className='w-14 h-14'
              strokeDasharray="3 2"
              initial={{rotate:0,scale:1}}
              whileHover={{rotate:360,scale:1.4}}
              
              variants={{
                initial: {rotate:0},
                hover: { rotate:360}
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="1" />
            </motion.svg>
          </div>
          </motion.div>
          
        </motion.div>
    );
  }
function Comments() {
    const comments=[
        {
            travelName:"“Best Honeymoon Ever!”",
            comment:"Every guide, host, concierge, and driver we encountered in Argentina exuded remarkable kindness and genuine enthusiasm to impart their culture to us. Our experience wouldn't have been as enriching without Niarra's expert planning and invaluable insig..."
            ,day:"Sunday"
            ,month:"June"
            ,date:"3/2024"
            ,person:"Larisa Curatola"
        },
        {
            travelName:"“Best Honeymoon Ever!”",
            comment:"Every guide, host, concierge, and driver we encountered in Argentina exuded remarkable kindness and genuine enthusiasm to impart their culture to us. Our experience wouldn't have been as enriching without Niarra's expert planning and invaluable insig..."
            ,day:"Sunday"
            ,month:"June"
            ,date:"3/2024"
            ,person:"Larisa Curatola"
        },
        {
            travelName:"“Best Honeymoon Ever!”",
            comment:"Every guide, host, concierge, and driver we encountered in Argentina exuded remarkable kindness and genuine enthusiasm to impart their culture to us. Our experience wouldn't have been as enriching without Niarra's expert planning and invaluable insig..."
            ,day:"Sunday"
            ,month:"June"
            ,date:"3/2024"
            ,person:"Larisa Curatola"
        },
        {
            travelName:"“Best Honeymoon Ever!”",
            comment:"Every guide, host, concierge, and driver we encountered in Argentina exuded remarkable kindness and genuine enthusiasm to impart their culture to us. Our experience wouldn't have been as enriching without Niarra's expert planning and invaluable insig..."
            ,day:"Sunday"
            ,month:"June"
            ,date:"3/2024"
            ,person:"Larisa Curatola"
        },
    ]
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    
  };
  return (
    <div className="slider-container p-9 bg-gray_color">
      <Slider {...settings}>
        {
            comments.map((comm)=>{
                return(
                    <CommentCard 
                    travelName={comm.travelName}
                    comment={comm.comment}
                    day={comm.day}
                    month={comm.month}
                    date={comm.date}
                    person={comm.person}
                    />
                )
            })
        }
      </Slider>
    </div>
  );
}

export default Comments;
