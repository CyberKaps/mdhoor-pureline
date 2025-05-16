import { motion } from 'framer-motion'

 import CircularGallery from '../components/CircularGallery'

// const images = ['/bgImg.png', '/bgImg.png', '/bgImg.png']
const Gallery = () => (

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // className="px-6 md:px-16 py-16 text-olive mt-20 w-[100%]" 
    >

<div className="bg-[#95be47]" style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>


</motion.section>
)
export default Gallery
