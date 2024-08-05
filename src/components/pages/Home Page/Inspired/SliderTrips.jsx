import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faChevronLeft, faChevronRight, faEarthAfrica, faEarthAmerica, faEarthAsia, faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import mo from "../../../../assets/hero/mountain.jpg";
import af from "../../../../assets/destination/africa.jpg";
import as from "../../../../assets/destination/asia.jpg";
import am from "../../../../assets/destination/america.jpg";
import er from "../../../../assets/destination/europ.jpg";
import InspiredCard from "../../../Utils/InspiredCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide, hidden } = props;
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`${className} ${hidden ? "hidden" : "w-16 h-16 group hidden lg:block absolute "} ${currentSlide < 1 ? "right-[70px] lg:right-[700px]" : "right-[70px]"} `}
      style={{ ...style, borderRadius: "100%"}}
      onClick={onClick}
    >
      <motion.div
        variants={{
          initial: { width: "60px", height: "60px" },
          hover: { width: '80px', height: "80px" }
        }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className="rounded-full bg-white flex items-center justify-center relative"
      >
        <FontAwesomeIcon icon={faChevronRight} className='text-base text-black' />
        <div className='absolute inset-0 flex justify-center items-center'>
          <motion.svg
            width="64" height="64" viewBox="0 0 64 64" className='w-14 h-14'
            strokeDasharray="3 2"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            variants={{
              initial: { rotate: 0 },
              hover: { rotate: 360 }
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
  const { className, style, onClick, hidden } = props;
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`${className} ${hidden ? 'hidden' : 'w-16 h-16 group z-50 hidden md:block'}`}
      style={{ ...style, borderRadius: "100%", position: "absolute", left: "70px" }}
      onClick={onClick}
    >
      <motion.div
        variants={{
          initial: { width: "60px", height: "60px" },
          hover: { width: '80px', height: "80px" }
        }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className="rounded-full bg-white flex items-center justify-center relative"
      >
        <FontAwesomeIcon icon={faChevronLeft} className='text-base text-black' />
        <div className='absolute inset-0 flex justify-center items-center'>
          <motion.svg
            width="64" height="64" viewBox="0 0 64 64" className='w-14 h-14'
            strokeDasharray="3 2"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            variants={{
              initial: { rotate: 0 },
              hover: { rotate: 360 }
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

function SliderTrips() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const handleNextClick = () => {
    if (currentSlide === 0) {
      setShowIntro(false);
    }
  };

  const settings = {
    className: "slider variable-width",
    nextArrow: <SampleNextArrow onClick={handleNextClick} currentSlide={currentSlide} />,
    prevArrow: <SamplePrevArrow hidden={currentSlide < 1} />,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 0,
          slidesToShow: 2.1,
          nextArrow: <SampleNextArrow onClick={handleNextClick} currentSlide={currentSlide} />,
          prevArrow: <SamplePrevArrow />,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 	768,
        settings: {
          nextArrow: false,
          prevArrow: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          nextArrow: false,
          prevArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        }
      }
    ]
  };

  const cardInfo = [
    {
      image: mo,
      countryName: "Africa",
      countryIcon: faEarthAfrica,
      days: "11",
      type: "Cape, Wine, Wildlife and Waterfalls",
      explain: "This is the perfect introduction to South Africa, showcasing the very best of the Rainbow Nation",
      price: "$ 8908"
    },
    {
      image: af,
      countryName: "Asia",
      countryIcon: faEarthAsia,
      days: "12",
      type: "Conservation and Culture in Kenya",
      explain: "Experience the best of Kenya's wildlife, conservation efforts, and some of the most iconic hotels",
      price: "$ 1338"
    },
    {
      image: as,
      countryName: "North America",
      countryIcon: faEarthAmerica,
      days: "4",
      type: "Luxury Costa Rica Explorer",
      explain: "A romantic, serene, and eco-conscious experience of Costa Rica, staying at two luxurious, low impact retreats.",
      price: "$ 568"
    },
    {
      image: am,
      countryName: "Europe",
      countryIcon: faEarthEurope,
      days: "5",
      type: "Luxury Costa Rica Explorer",
      explain: "A romantic, serene, and eco-conscious experience of Costa Rica, staying at two luxurious, low impact retreats.",
      price: "$ 568"
    },
  
    {
      image: er,
      countryName: "Africa",
      countryIcon: faEarthAfrica,
      days: "11",
      type: "Cape, Wine, Wildlife and Waterfalls",
      explain: "This is the perfect introduction to South Africa, showcasing the very best of the Rainbow Nation",
      price: "$ 8908"
    },
    {
      image: af,
      countryName: "North America",
      countryIcon: faEarthAmerica,
      days: "4",
      type: "Luxury Costa Rica Explorer",
      explain: "A romantic, serene, and eco-conscious experience of Costa Rica, staying at two luxurious, low impact retreats.",
      price: "$ 568"
    }
  ];

  return (
    <div className="py-24 slider-container bg-gray_color w-full relative lg:h-[900px]">
      <div className={`flex flex-col lg:flex-row lg:justify-between ${showIntro ? 'block' : 'hidden'} transform transition-all duration-300`}>
        <div className={`${currentSlide >= 1 ? "lg:hidden flex" : "flex"}  first-slide h-[200px] lg:h-[700px] justify-end gap-2 w-full lg:w-1/2 p-24 text-slide flex-col`}>
          <p className='text-sm font-semibold uppercase'>Example Trips</p>
          <p className='text-2xl md:text-6xl font-extrabold akaya'>Get Inspired</p>
          <p className='text-sm md:text-base font-light w-[90%]'>Browse our example trips and get in contact to start planning your very own adventure.</p>
        </div>
        <div className={`${currentSlide >= 1 ? "left-0 lg:w-full" : "w-full left-1/2 "} lg:absolute transform transition-all duration-300`}>
          <Slider {...settings}>
            {cardInfo.map((card, index) => (
              <InspiredCard
                key={index}
                img={card.image}
                countryName={card.countryName}
                countryIcon={card.countryIcon}
                days={card.days}
                type={card.type}
                explain={card.explain}
                price={card.price}
                slideIndex={currentSlide}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className='w-24 h-1 bg-gray-50 flex absolute bottom-0 right-24 transform translate-x-1/2 rounded-full overflow-hidden'>
        <motion.span
          className='w-1/3 bg-red-500'
          initial={{ translateX: 0 }}
          animate={{ translateX: `${currentSlide * (96 / 4)}px` }}
        />
      </div>
    </div>
  );
}

export default SliderTrips;
