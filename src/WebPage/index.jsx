import React from 'react'
import Header from '../component/Header'
import HomeSection from '../component/HomeSection';
import AboutSection from '../component/AboutSection';
import ContactSection from '../component/ContactSection';
import Footer from '../component/Footer';

const WebPage = () => {
  return (
    <>
      <Header />

      <main>
        <HomeSection/>
        
        <AboutSection/>

        <ContactSection/>

        <Footer/>
      </main>

    </>
  )
}

export default WebPage;