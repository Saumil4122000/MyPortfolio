import React from 'react'
import About from '../Components/AboutSection'
import ContactBanner from '../Components/ContactBanner'
import HeroSection from '../Components/HeroSection'
import ProjectSection from '../Components/ProjectsSection'
import ServiceSection from '../Components/ServiceSection'
import TestimonialsSection from '../Components/TestimonialsSection'

export default function Home() {
    return (
        <div>
            <HeroSection />
            <About />
            <ServiceSection />
            <ProjectSection />
            <TestimonialsSection />
            <ContactBanner/>
        </div>
    )
}
