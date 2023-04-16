import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImage2 from '../Components/HeroImage2'
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="ABOUT" text="I'm a Front-End developer" />
      <Footer />
    </div>
  )
}

export default About