// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import appImage from "../assets/madhoorPureline.png"; 
// import Splash from "../assets/oil_splashing.png"; 



// import "../App.css";

// const products = [
//   {
//     name: "Groundnut Oil",
//     image: Splash,
//     heading: "Introducing Groundnut Oil",
//     highlight: "Edible oil",
//     description:
//       "Cold-pressed below 40°C to retain nutrients and aroma, our groundnut oil is rich in antioxidants, perfect for deep frying and everyday cooking.",
//   },
//   {
//     name: "Jaggery",
//     image: appImage,
//     heading: "Introducing Jaggery",
//     highlight: "Natural care",
//     description:
//       "Made from fresh coconuts using traditional wooden churning, this oil is ideal for skin, hair, and cooking — pure, chemical-free and aromatic.",
//   },
//   {
//     name: "Coconut Oil",
//     image: appImage,
//     heading: "Introducing Coconut Oil",
//     highlight: "Natural care",
//     description:
//       "Made from fresh coconuts using traditional wooden churning, this oil is ideal for skin, hair, and cooking — pure, chemical-free and aromatic.",
//   },
//   {
//     name: "Jaggery Powder",
//     image: appImage,
//     heading: "Introducing Jaggery",
//     highlight: "Natural care",
//     description:
//       "Made from fresh coconuts using traditional wooden churning, this oil is ideal for skin, hair, and cooking — pure, chemical-free and aromatic.",
//   },
// ];

// const ProductIntroCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   const next = () => setCurrent((prev) => (prev + 1) % products.length);
//   const prev = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);

//   return (
//     <section className="bg-  py-10 text-olive relative overflow-hidden">
      

//       <div className="max-w-7xl mx-auto px-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col lg:flex-row items-center gap-x-20 gap-y-10"
//           >
//             {/* Text */}
//             <motion.div
//               className="lg:w-1/2 text-center lg:text-left"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//                 <h1 className="raleway-heading text-4xl md:text-5xl lg:text-7xl text-black text-center mb-5">
//         {products[current].name}
//       </h1>
//               <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
//                 {products[current].heading}: lorem,<br />
//                 ipsum. <span className="text-[#FF6C4A]">{products[current].highlight}</span>
//               </h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {products[current].description}
//               </p>
//             </motion.div>

//             {/* Image */}
//             <motion.div
//               className="w-full lg:w-1/2 relative flex justify-center"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               <img
//                 src={products[current].image}
//                 alt={products[current].name}
//                 className="w- max-w-md drop-shadow-xl h-[50vh]"
//               />
//               <div className="absolute bg-[#FF6C4A] rounded-full w-72 h-72 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-center gap-6 mt-">
//         <button
//           onClick={prev}
//           className="bg-[#59981A] text-white px-4 py-2 rounded-full hover:[#3D550C] transition"
//         >
//           ⟵ Prev
//         </button>
//         <button
//           onClick={next}
//           className="bg-[#59981A] text-white px-4 py-2 rounded-full hover:[#3D550C] transition"
//         >
//           Next ⟶
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ProductIntroCarousel;















import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Kalpesh Borde",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
