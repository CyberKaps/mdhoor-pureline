import { motion } from 'framer-motion';
import "../App.css";

const ingredients = [
  {
    name: "Groundnut",
    image: "/images/groundnut.jpg",
    origin: "Sourced from the nutrient-rich black soil of Jalgaon, Maharashtra.",
    special: "Cold-pressed to retain its earthy flavor and natural proteins.",
  },
  {
    name: "Coconut",
    image: "/images/coconut.jpg",
    origin: "Freshly harvested from coastal farms in the Konkan region.",
    special: "Naturally sweet and packed with MCTs for energy and immunity.",
  },
  {
    name: "Sugarcane",
    image: "/images/sugarcane.jpg",
    origin: "Grown chemical-free on the lush riverbanks of Jamner.",
    special: "Used to produce rich, mineral-packed jaggery blocks and powder.",
  },
];

const IngredientStory = () => {
  return (
    <section className="bg-[#fefae0] py-20 px-6 md:px-16 text-olive w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold raleway-heading mb-2">From Farm to Bottle</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore the journey of our key ingredients, from soil to soul.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ingredients.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-xl overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-96 object-cover group-hover:brightness-75 transition duration-300"
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent text-white"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="text-sm mb-1"><strong>From:</strong> {item.origin}</p>
              <p className="text-sm"><strong>Why it’s special:</strong> {item.special}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IngredientStory;
