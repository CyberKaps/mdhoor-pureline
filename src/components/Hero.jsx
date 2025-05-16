import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" h-[90vh] w-full overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
        style={{ backgroundImage: 'url("./bgImg.png")' }}
      />

      {/* Foreground Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-white/70 backdrop-blur-md px-6 py-8 rounded-3xl shadow-xl max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-olive mb-4 leading-tight">
            Madhoor Pureline
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700">
            Hydraulic Cold-Press Oil
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/products"
              className="mt-6 inline-block bg-lime-500 hover:bg-yellow-500 transition-colors text-green font-bold py-3 px-6 rounded-xl shadow-lg"
            >
              Explore More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
