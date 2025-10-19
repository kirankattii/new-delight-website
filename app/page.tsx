import Hero from '@/components/home-page/Hero'
import AboutSection from '@/components/home-page/AboutSection'
import React from 'react'
import AchivementNumbers from '@/components/home-page/AchivementNumbers'
import ProjectsSection from '@/components/home-page/ProjectSection'
import WhyInvestSection from '@/components/home-page/WhyInvestScetion'
import OurDevelopmentSection from '@/components/home-page/OurDevelopment'
import ProjectCarousel from '@/components/home-page/ProjectCarousel'
import TestimonialsSection from '@/components/home-page/TestimonialsSection'
import ProjectContact from '@/components/project-page/ProjectContact'
import RecentBlogs from '@/components/home-page/RecentBlogs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Farmland Near Bangalore | Managed Farm Plots - Delight",
  description: "Managed farmland near Bangalore with organic plots, coffee estates, and gated communities. Sustainable agriculture investment opportunities in Karnataka.",
  alternates: {
    canonical: "https://www.delightecofarms.com/",
  },
}

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <AchivementNumbers/>
      <ProjectsSection/>
      <ProjectCarousel/>
      <WhyInvestSection/>
      <OurDevelopmentSection/>
      <RecentBlogs/>
      <ProjectContact/>
      <TestimonialsSection/>
    </div>
  )
}

export default Home