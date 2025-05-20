import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../App.css";
import images from "../assets/coconut.jpg";

const themes = [
  {
    title: "Coconut Oil",
    desc: "Cold-pressed, aromatic, natural source of MCTs.",
    badge: "New",
    slug: "coconut-oil",
    image: images,
  },
  {
    title: "Groundnut Oil",
    desc: "Rich in antioxidants and vitamin E.",
    slug: "groundnut-oil",
    image: images,
  },
  {
    title: "Jaggery",
    desc: "Natural sweetener, rich in iron and minerals.",
    badge: "Best Seller",
    slug: "jaggery",
    image: images,
  },
  {
    title: "Jaggery Powder",
    desc: "Easier to use, same goodness as solid jaggery.",
    slug: "jaggery-powder",
    image: images,
  },
  {
    title: "Groundnut Cake",
    desc: "Organic cattle feed, high in protein.",
    slug: "groundnut-cake",
    image: images,
  },
  {
    title: "Sunflower Oil",
    desc: "Light, heart-healthy oil with mild flavor.",
    slug: "sunflower-oil",
    image: images,
  },
];

const Product = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      import('gsap').then(({ gsap }) => {
        gsap.registerPlugin(ScrollTrigger);
        cardRefs.current.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    });
  }, []);

  return (
    <section id="Theme" className="py-16 bg-gradient raleway text-olive">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {themes.map((theme, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="p-6 bg-gradient-to-r from-[#ECE852] to-[#95be47] shadow-lg rounded-lg transition-transform hover:scale-105"
            >
              {theme.badge && (
                <span className="inline-block mb-2 text-xs font-semibold text-white bg-red-500 px-3 py-1 rounded-full">
                  {theme.badge}
                </span>
              )}
              <img
                src={theme.image}
                alt={theme.title}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{theme.title}</h3>
              <p className="text-sm text-center text-gray-700 leading-relaxed">{theme.desc}</p>

              {/* Click Here Button */}
              <Link to={`/product/${theme.slug}`}>
                <button className="mt-4 w-full bg-[#ff6c4a] text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                  Click Here
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
