import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import "../App.css";

const facts = [
  "Cold-pressed oils retain up to 80% more nutrients than refined oils.",
  "Jaggery is a rich source of iron, potassium, and magnesium.",
  "Cold-pressed oil is extracted without heat — preserving aroma and flavor.",
  "Replacing sugar with jaggery can improve digestion and immunity.",
  "Madhoor’s oils are sourced directly from local farms in Maharashtra.",
];

const DidYouKnowCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-olive py-20 px-4 md:px-16 overflow-hidden bg-[#ECF87F]">


      {/* Content */}
      <div className="text-center mb-10 relative z-10">
        <div className="flex justify-center mb-3">
          <Lightbulb className="w-10 h-10 text-yellow-500 animate-bounce" />
        </div>
        <h2 className="text-4xl font-bold raleway-heading">Did You Know?</h2>
        <p className="text-md text-gray-700 max-w-xl mx-auto mt-2">
          Quick facts about the purity, power, and tradition behind our products.
        </p>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="bg-[#95be47] border border-yellow-300 rounded-xl p-6 shadow-md min-h-[100px] transition duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-white"
            >
              {facts[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DidYouKnowCarousel;
