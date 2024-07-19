import React, { useState } from "react";
import Slider from "react-slick";
import africaMap from "../../../../assets/Discover/africa.svg";
import asiaMap from "../../../../assets/Discover/asia.svg";
import europeMap from "../../../../assets/Discover/europe.svg";
import americaMap from "../../../../assets/Discover/america.svg";
import africa from "../../../../assets/Discover/africa.jpg";
import asia from "../../../../assets/Discover/asia.jpg";
import europe from "../../../../assets/Discover/europe.jpg";
import america from "../../../../assets/Discover/america.jpg";
import DiscoverCard from "./DiscoverCard";
import { motion } from "framer-motion";

function Discover() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const cards = [
    {
      map: africaMap,
      img: africa,
      name: "AFRICA",
      location: "Moara , Morocco"
    },
    {
      map: asiaMap,
      img: asia,
      name: "ASIA",
      location: "Damascus , Syria"
    },
    {
      map: europeMap,
      img: europe,
      name: "Europe",
      location: "Netherlands , Hyaf"
    },
    {
      map: americaMap,
      img: america,
      name: "AMERICA",
      location: "Rosario , Argentina"
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "24%",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => {
      setDragging(false);
      setDragOffset(0);
    },
    onSwipe: (swipeDirection) => {
      setDragging(true);
    },
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const dragAmount = e.movementX;
      setDragOffset(dragOffset + dragAmount);
    }
  };

  const calculateDashOffset = (index) => {
    const maxDragDistance = 100; // Adjust this value based on your preference
    const offsetFactor = Math.min(Math.max(dragOffset / maxDragDistance, -1), 1);
    return (index === currentSlide ? 1 - Math.abs(offsetFactor) : Math.abs(offsetFactor));
  };

  return (
    <div className="relative slider-container slider-discover h-[750px]" onMouseMove={handleMouseMove}>
      <motion.div
        key={currentSlide}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cards[currentSlide].img})` }}
      />
      <Slider {...settings}>
        {cards.map((card, index) => (
          <DiscoverCard 
            key={index}
            map={card.map} 
            name={card.name} 
            location={card.location} 
            currentSlide={currentSlide}
            slideIndex={index}
            dashOffset={calculateDashOffset(index)}
          />
        ))}
      </Slider>
      <div className='w-24 h-1   bg-gray-50 flex absolute z-50 right-4 bottom-5 '>
        <motion.span 
        className='w-1/4 bg-red-500'
        initial={{translateX:0}} 
        animate={{translateX:`${currentSlide * (96 / 4) }px`}}
        />
      </div>  
    </div>
  );
}

export default Discover;
