import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import "../App.css"
import SplitText from "./SplitText"

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen w-full overflow-hidden relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 bg-no-repeat bg-[length:100%_100%]"
        style={{ backgroundImage: 'url("./bgImg.png")' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-[110px] font-serif text-olive mb-4 leading-tight raleway-heading text-[#9BEC00] gradient-text">
            <SplitText
              text="Madhoor Pureline"
              className="font-extrabold text-center text-shadow-lg text-shadow-gray-200"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>

          <p className="text-lg sm:text-xl md:text-3xl font-medium text-white">
            The Pure Promise
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/products"
              className="mt-6 inline-block bg-[#95be47] text-white hover:bg-yellow-500 transition-colors text-sm sm:text-base md:text-lg font-bold py-2 px-5 sm:py-3 sm:px-6 rounded-xl shadow-lg"
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
