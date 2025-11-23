import React from 'react';
import { Header } from "./LandingPage/components/Header"
import { Hero } from "./LandingPage/components/Hero"
import { Features } from "./LandingPage/components/Features"
import { Testimonials } from "./LandingPage/components/Testimonials"
import { Pricing } from "./LandingPage/components/Pricing"
import { FinalCTA } from "./LandingPage/components/FinalCta"
import { Footer } from "./LandingPage/components/Footer"



export const LandingPage: React.FC = () => (
  <main className="min-h-screen">
    <Header />
    <Hero />
    <Features />
    <Testimonials />
    <Pricing />
    <FinalCTA />
    <Footer />
  </main>
)

