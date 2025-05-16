import hero from "../assets/oilbottle.jpg"
import "../App.css"
import { motion } from 'framer-motion'


const Process = () => (

  <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 py-16 text-olive mt-20 w-[100%]" 
    >

 

  <section className="max-w-6xl mx-auto p-6 space-y-6 raleway">
    <h2 className="text-3xl text-olive ">Our Cold-Pressing Process</h2>
    <p>We use wooden churners and traditional techniques to extract oils without heat or chemicals.</p>
    <img src={hero} alt="Cold Pressing" className="rounded-2xl shadow" />
  </section>


  </motion.section>
)
export default Process
