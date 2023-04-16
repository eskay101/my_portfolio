import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImage2 from '../Components/HeroImage2'
import PricingCards from '../Components/PricingCards'
const Project = () => {
  return (
    <div>
<Navbar />
<HeroImage2 heading="PROJECTS." text="some of my most recent projects" />
<PricingCards />
<Footer />
    </div>
  )
}

export default Project