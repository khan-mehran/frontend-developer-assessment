import React from 'react'
import Header from '../component/Header'
import HomeSection from '../component/HomeSection';
import AboutSection from '../component/AboutSection';
import ContactSection from '../component/ContactSection';

const WebPage = () => {
  return (
    <>
      <Header />

      <main>
        <HomeSection/>
        
        <AboutSection/>

        <ContactSection/>
      </main>

    </>
  )
}

export default WebPage;