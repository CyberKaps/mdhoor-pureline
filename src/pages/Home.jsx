

import ComparisonTable from '../components/ComparisonTable'
import DidYouKnowCarousel from '../components/DidYouKnowCarousel'
import { ExpandableProducts } from '../components/ExpandableProducts'
import Footer from '../components/Footer'
import GroundnutOil from '../components/GroundnutOil'
import Hero from '../components/Hero'
import IngredientStory from '../components/IngredientStory'
import OilProductsSection from '../components/OilProductsSection'
import ProductIntroCarousel from '../components/ProductIntroCarousel'
import ProductQuiz from '../components/ProductQuiz'
import SustainabilityPledge from '../components/SustainabilityPledge'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

import WhyMadhoor from '../components/WhyMadhoor'
import About from './About'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Home = () => {


  useEffect(() => {
  AOS.init({ duration: 1000 }) // animation duration in ms
}, [])


  
  return <>
   <div>


          <div data-aos="fade-up"><Hero /></div>
          <div data-aos="fade-right"><ProductIntroCarousel /></div>
          <div data-aos="fade-up"><OilProductsSection /></div>
          <div data-aos="zoom-in"><ComparisonTable /></div>
          <div data-aos="fade-left"><ProductQuiz /></div>
          <div data-aos="fade-up"><DidYouKnowCarousel /></div>
          <div data-aos="fade-right"><WhyMadhoor /></div>
          <div data-aos="fade-up"><SustainabilityPledge /></div>



    {/* <ExpandableProducts /> */}
  
    
   </div>
   
    
  </>
}
export default Home


