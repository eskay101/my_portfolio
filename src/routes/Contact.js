import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImage2 from '../Components/HeroImage2'
import Form from '../Components/Form'

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImage2  heading="CONTACT." text="Let have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact