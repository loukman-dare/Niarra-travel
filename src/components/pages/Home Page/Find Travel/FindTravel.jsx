import React from 'react';
import family from "../../../../assets/find travel/family.jpg";
import honey from "../../../../assets/find travel/honey.jpg";
import privt from "../../../../assets/find travel/private.jpg";
import FindTravelCard from "./FindTravelCard";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const details = [
  {
    img: family,
    name: "Family travel",
    exp: "Luxury family safaris and inspiring wildlife adventures with a positive impact."
  },
  {
    img: privt,
    name: "private travel",
    exp: "Quality time with family and friends, complete flexibility and exclusive use safari camps."
  },
  {
    img: honey,
    name: "Honeymoons",
    exp: "From guilt-free indulgence to the romance of a real adventure, we can help you plan your perfect honeymoon."
  }
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, // نقطة الكسر للشاشات الصغيرة
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const FindTravel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[1200px] relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray_color -z-50"></div>
      <div className='flex flex-col items-center w-full m-0 gap-2'>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }} className='uppercase text-sm font-semibold'> travel in style</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} className=' text-5xl font-semibold'>Find travel</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} className=' text-5xl font-semibold'>inspiration by</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} className=' text-5xl font-semibold akaya'>style</motion.p>
      </div>
      <div className="lg:flex hidden">
        {
          details.map((card, index) => (
            <FindTravelCard img={card.img} exp={card.exp} name={card.name} index={index} key={index} />
          ))
        }
      </div>
      <div className="slider-container block lg:hidden w-full">
        <Slider {...settings}>
          {
            details.map((card, index) => (
              <FindTravelCard img={card.img} exp={card.exp} name={card.name} index={index} key={index} />
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default FindTravel;
