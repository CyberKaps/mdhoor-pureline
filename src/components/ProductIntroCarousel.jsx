import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import appImage from "../assets/madhoorPureline.png"; 

import "../App.css";

const products = [
  {
    name: "Groundnut Oil",
    image: appImage,
    heading: "Introducing Groundnut Oil",
    highlight: "Edible oil",
    description:
      "Cold-pressed below 40°C to retain nutrients and aroma, our groundnut oil is rich in antioxidants, perfect for deep frying and everyday cooking.",
  },
  {
    name: "Jaggery",
    image: appImage,
    heading: "Introducing Jaggery",
    highlight: "Natural care",
    description:
      "Made from fresh coconuts using traditional wooden churning, this oil is ideal for skin, hair, and cooking — pure, chemical-free and aromatic.",
  },
  {
    name: "Coconut Oil",
    image: appImage,
    heading: "Introducing Coconut Oil",
    highlight: "Natural care",
    description:
      "Made from fresh coconuts using traditional wooden churning, this oil is ideal for skin, hair, and cooking — pure, chemical-free and aromatic.",
  },
  {
    name: "Jaggery Powder",
    image: appImage,
    heading: "Introducing Jaggery",
    highlight: "Natural care",
    description:
      "Made from fresh coconuts using traditional wooden churning, this oil is ideal for skin, hair, and cooking — pure, chemical-free and aromatic.",
  },
];

const ProductIntroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % products.length);
  const prev = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="bg-gradient  py-10 text-olive relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-x-20 gap-y-10"
          >
            {/* Text */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
                <h1 className="raleway-heading text-4xl md:text-5xl lg:text-7xl text-black/60 text-center mb-5">
        {products[current].name}
      </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
                {products[current].heading}: lorem,<br />
                ipsum. <span className="text-[#FF6C4A]">{products[current].highlight}</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products[current].description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="w-full lg:w-1/2 relative flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img
                src={products[current].image}
                alt={products[current].name}
                className="w-full max-w-md drop-shadow-xl"
              />
              <div className="absolute bg-[#FF6C4A] rounded-full w-72 h-72 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-">
        <button
          onClick={prev}
          className="bg-[#95be47] text-white px-4 py-2 rounded-full hover:bg-lime-600 transition"
        >
          ⟵ Prev
        </button>
        <button
          onClick={next}
          className="bg-[#95be47] text-white px-4 py-2 rounded-full hover:bg-lime-600 transition"
        >
          Next ⟶
        </button>
      </div>
    </section>
  );
};

export default ProductIntroCarousel;
