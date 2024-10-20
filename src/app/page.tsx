 'useclient'
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from "@/components/WhyChooseUs"
import FeaturedWebinars from '@/components/FeaturedWebinars'
 import HeroSection from '@/components/HeroSection'

import React from 'react'
import Coursespage from './Courses/page'
const page = () => {
  return (
    <main className='min-h-screen bg-black/[0,96] bg-grid-white/[0.06]'>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <FeaturedWebinars/>

    </main>
  )
}

export default page

