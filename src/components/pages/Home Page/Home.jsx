import React from 'react'
import Header from '../../Dividing/header'
import Hero from './Hero/Hero'
import WhyNiarra from './WhyNirra/WhyNiarra'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <WhyNiarra />
    </div>
  )
}

export default Home