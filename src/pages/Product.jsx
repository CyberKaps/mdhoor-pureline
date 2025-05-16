import { motion } from 'framer-motion'
import TiltedCard from '../components/TitledCard'
import image from "../assets/oilbottle.jpg"

const products = [
  {
    name: 'Groundnut Oil',
    image: './bgImg.png',
    description: 'Cold-pressed groundnut oil without colestrol and zero transfat.',
  },
  {
    name: 'Coconut Oil',
    image: './bgImg.png',
    description: 'Naturally extracted from organic coconuts.',
  },
  {
    name: 'Jaggery',
    image: './bgImg.png',
    description: 'Traditional sesame oil for cooking and wellness.',
  },
  {
    name: 'Jaggery Powder',
    image: './bgImg.png',
    description: 'Traditional sesame oil for cooking and wellness.',
  },
]

const Products = () => (

<motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 py-16 bg-beige text-olive"
    >

            <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-lime-100 via-yellow-100 to-amber-100"></div>
  {/* <section className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.map((p) => (
      <div key={p.name} className="bg-white rounded-2xl shadow p-4">
        <img src={p.image} alt={p.name} className="rounded-xl mb-4" />
        <h3 className="text-xl font-serif text-olive">{p.name}</h3>
        <p>{p.description}</p>
      </div>
    ))}
  </section> */}




    <TiltedCard
      imageSrc={image}
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text">
          Groundnut Oil
        </p>
      }
    />
  

  </motion.section>
)
export default Products
