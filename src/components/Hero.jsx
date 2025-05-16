import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import "../App.css"
import SplitText from "./SplitText";


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" h-[90vh] w-full overflow-hidden"
    >

      {/* <div className="animated-dots" /> */}

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
        >
          <h1 className="text-6xl md:text-[110px] font-serif text-olive mb-4 leading-tigh raleway-heading text-[#9BEC00] gradient-text">
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
          <p className="text-2xl md:text-4xl font-medium text-white">
            The Pure Promise
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/products"
              className="mt-6 inline-block bg-[#9BEC00] text-white hover:bg-yellow-500 transition-colors text-green font-bold py-3 px-6 rounded-xl shadow-lg"
            >
              Explore More
            </Link>
          </motion.div>
        </motion.div>
      </div>


        {/* <div className="animated-dots" />

        <div className="h-[97vh] relative flex flex-col text-center bg-orange-50/10 text-gray-800 gap-2 items-center z-10 justify-center ">
            <div className="text-4xl md:text-[80px] font-extrabold text-black/75 md:leading-[10vh] px-[20vw] raleway-heading">
                Madhoor Pureline <span className="text-[#f96a50]"></span> 
            </div>
            <div className="text-lg md:text-4xl text-black/60 leading-6 md:w-[60%] w-[95%] font-bold mb-2 font-extra px-5 mt- raleway">
                The Pure Promise
            </div>
        </div> */}

    </motion.section>
  )
}

export default Hero
