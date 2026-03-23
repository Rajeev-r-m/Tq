import React from 'react'
import Hero from './Hero/hero'
import Authority from './Authority/authority'
import Services from './Services/services'
import ProvenImpact from './Provenimect.jsx/provenimpact'  
import WhyChooseUs from './WhyChoseUs/WhyChooseUs'
import Footer from '../Footer/footer'

const home = () => {
  return (
    <>
      <Hero />
      {/* <Authority /> */}
      <Services />
      <ProvenImpact />  
      <WhyChooseUs />
      <Footer />
    </>
  )
}

export default home