import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Process from './pages/Process'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { Corousel } from './components/Corousel'
import { HeroCorousel } from './components/HeroCorousel'
import Particles from './components/Particles'
// import ProductDetail from "./components/ProductDetail";
import { ExpandableProducts } from './components/ExpandableProducts'
import { div } from 'framer-motion/client'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

     
      <div className="pt-15 bg-gradient">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          {/* <Route path="/products" element={<Product />} /> */}
          <Route path="/our-process" element={<Process />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/product/:slug" element={<ProductDetail />} /> */}
          <Route path="/products" element={<div className='pt-15 p-12'><ExpandableProducts /></div>} />
        </Routes>
      </div>
      <Footer />
      


    </BrowserRouter>
  //  <div className='bg-[#f5f181]'>
  //     <Navbar />
  //     <Home />
  //     <About />
  //     <Product />
  //     <Process />
  //     <Gallery />
  //     <Contact />
  //      <Footer />
     
  //  </div>
  )
}

export default App
