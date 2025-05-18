import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import "../App.css";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    message: "The best jaggery I’ve tasted — reminds me of my childhood!",
    rating: 5,
  },
  {
    name: "Rahul Deshmukh",
    location: "Nashik",
    message: "Their groundnut oil has real aroma and flavor. I use it every day.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    location: "Hyderabad",
    message: "Loved the packaging and purity. You can actually taste the tradition!",
    rating: 4,
  },
  {
    name: "Nikita Joshi",
    location: "Nagpur",
    message: "I replaced refined sugar with Madhoor jaggery — it's a game changer.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-[#fffaf0] py-20 px-6 md:px-16 text-olive w-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold raleway-heading">What Our Customers Say</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-xl mx-auto">
          Real stories from those who’ve experienced the Madhoor difference.
        </p>
      </div>

      <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory px-4 scrollbar-hide">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="snap-center flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
          >
            <div className="mb-3 flex justify-center text-yellow-500">
              {Array(t.rating).fill().map((_, i) => (
                <Star key={i} className="w-5 h-5" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-800 italic">“{t.message}”</p>
            <div className="mt-4 font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.location}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialsCarousel;
