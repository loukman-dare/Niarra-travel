import React from 'react'
import Hero from './Hero/Hero'
import WhyNiarra from './WhyNirra/WhyNiarra'
import SliderTrips from './Inspired/SliderTrips'
import Comments from './Comments/Comments'
import Discover from './Discover/Discover'
import FindTravelCard from './Find Travel/FindTravelCard'
import FindTravel from './Find Travel/FindTravel'
import InspiringStories from './InspiringStories/InspiringStories'
import ReceiveInspiration from './ReceiveInspiration/ReceiveInspiration'
import ContactUS from './ContactUs/ContactUS'
import Footer from '../../Dividing/Footer'
import TinyDropDown from '../../Utils/TinyDropDown'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <WhyNiarra />
        <SliderTrips />
        <Comments />
        <Discover />
        <FindTravel />
        <InspiringStories />
        <Comments />
        <ReceiveInspiration />
        <ContactUS />
        <Footer />
    </div>
  )
}

export default Home