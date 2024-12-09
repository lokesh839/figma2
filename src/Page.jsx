import React from 'react'
import Header from './components/organisms/Hero Section '
import Portfolio from './components/organisms/Portfolio Section'
import BlogSection from './components/organisms/BlogSection'
import WhatIDoSection from './components/organisms/WhatIDoSection'
import HappyClientsSection from './components/organisms/HappyClientsSection'
import TestimonialSection from './components/organisms/TestimonialSection'
import ContactSection from './components/organisms/ContactSection'
import FooterSection from './components/organisms/FooterSection'
import NavBar from './components/molecules/NavBar';
import CallToAction from './components/molecules/CallToAction'


function Page() {
    return (   

        <div>
            <NavBar/>
            <Header />            
            {/* <AboutSection /> */}
            {/* <WorkProcess /> */}
            <Portfolio />
            <CallToAction/>          
            <BlogSection />
            <WhatIDoSection />
            {/* <HappyClientsSection /> */}
            <TestimonialSection />
            {/* <ContactSection /> */}
            {/* <FooterSection /> */}
        </div>

    )
}

export default Page