import { motion } from 'framer-motion'
import { Leaf, Heart, Sprout } from 'lucide-react' // Use Lucide icons
import aboutImg from '../assets/oilbottle.jpg' // Optional: add a related image



const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 py-16 bg-beige text-olive"
    >
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-lime-100 via-yellow-100 to-amber-100"></div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-center">
          About <span className="text-yellow-700">Madhur Pureline</span>
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-brown-700 mb-12">
          Rooted in tradition and driven by a passion for purity, Madhur Pureline delivers
          chemical-free, cold-pressed edible oils that nourish your body and soul.
        </p>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-olive">Our Philosophy</h3>
            <p className="text-brown-800 text-xl    ">
              At Madhur Pureline, we believe that the path to good health begins with what
              you consume. Our oils are extracted using traditional hydraulic cold-press
              methods that retain nutrients, flavor, and aroma — without any chemicals or heat.
            </p>

            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <Leaf className="text-lime-700" />
                <span>
                  <strong>Purity First:</strong> 100% natural, unrefined, and chemical-free.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="text-rose-600" />
                <span>
                  <strong>Health-Centric:</strong> Packed with nutrients and natural goodness.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Sprout className="text-green-700" />
                <span>
                  <strong>Traditionally Extracted:</strong> Cold-pressed with care and heritage.
                </span>
              </li>
            </ul>
          </div>

          {/* Optional Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="Cold-pressed oil process"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
