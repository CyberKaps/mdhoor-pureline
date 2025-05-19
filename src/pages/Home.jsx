

import ComparisonTable from '../components/ComparisonTable'
import DidYouKnowCarousel from '../components/DidYouKnowCarousel'
import Footer from '../components/Footer'
import GroundnutOil from '../components/GroundnutOil'
import Hero from '../components/Hero'
import IngredientStory from '../components/IngredientStory'
import ProductIntroCarousel from '../components/ProductIntroCarousel'
import ProductQuiz from '../components/ProductQuiz'
import SustainabilityPledge from '../components/SustainabilityPledge'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import WhyMadhoor from '../components/WhyMadhoor'
import About from './About'

const Home = () => (
  <>
   <div>
    <Hero />
    <ProductIntroCarousel />
    <WhyMadhoor />
    {/* <SustainabilityPledge /> */}
    <DidYouKnowCarousel />
    <ComparisonTable />
    <ProductQuiz />
  
    
   </div>
   
    
  </>
)
export default Home


