import { motion } from 'framer-motion'
import { Leaf, Heart, Sprout } from 'lucide-react'
import aboutImg from '../assets/oilbottle.jpg'
import "../App.css"

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 py-16 text-olive w-full"
    >
      <div className="absolute inset-0 -z-10 animate-gradient"></div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl raleway font-semibold mb-6 text-center">
          About <span className="text-yellow-700">Vasundhara Natural Foods</span>
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-brown-700 mb-12">
          Welcome to Vasundhara Natural Foods, where purity meets health. Founded in 2024, we are committed to crafting wholesome, chemical-free food products that nourish both body and soul.
        </p>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center raleway">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-olive">Our Story & Vision</h3>
            <p className="text-brown-800 text-xl">
              We are a proud extension of Madhur Jaggery (Krishna Organic Agro Products) — a trusted name in organic jaggery since 1999. With decades of experience and a strong foundation built on integrity and innovation, we carry forward a legacy of natural, high-quality food production.
            </p>
            <p className="text-brown-800 text-xl">
              At Vasundhara Natural Foods, we specialize in Hydraulic Cold Pressed Oils made from carefully selected, A1-grade raw materials. Our oils are free from preservatives, added water, and palm oil, and made using an indirect heating method that retains essential nutrients and natural flavors — just as nature intended.
            </p>

            <h4 className="text-2xl font-semibold mt-6">Why Choose Us?</h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <Leaf className="text-lime-700" />
                <span><strong>100% Organic & Naturally Processed</strong> — Made from premium, locally grown ingredients.</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="text-rose-600" />
                <span><strong>Cold Press Technology</strong> — Retains nutrients and natural flavors.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sprout className="text-green-700" />
                <span><strong>Eco-Friendly & Hygienic</strong> — Food-grade packaging with quality-controlled manufacturing.</span>
              </li>
            </ul>

            <p className="text-brown-800 text-xl pt-4">
              Our mission is to honor traditional practices while embracing modern innovation to deliver the finest quality products to your table.
            </p>
          </div>

          {/* Image Section */}
          <div className="rounded-xl overflow-hidden shadow-lg ms-10">
            <img
              src={aboutImg}
              alt="Cold-pressed oil process"
              className="object-cover w-[70vw] h-[70vh]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
