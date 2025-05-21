// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import "../App.css";
// import images from "../assets/coconut.jpg";

// const themes = [
//   {
//     title: "Coconut Oil",
//     desc: "Cold-pressed, aromatic, natural source of MCTs.",
//     badge: "New",
//     slug: "coconut-oil",
//     image: images,
//   },
//   {
//     title: "Groundnut Oil",
//     desc: "Rich in antioxidants and vitamin E.",
//     slug: "groundnut-oil",
//     image: images,
//   },
//   {
//     title: "Jaggery",
//     desc: "Natural sweetener, rich in iron and minerals.",
//     badge: "Best Seller",
//     slug: "jaggery",
//     image: images,
//   },
//   {
//     title: "Jaggery Powder",
//     desc: "Easier to use, same goodness as solid jaggery.",
//     slug: "jaggery-powder",
//     image: images,
//   },
//   {
//     title: "Groundnut Cake",
//     desc: "Organic cattle feed, high in protein.",
//     slug: "groundnut-cake",
//     image: images,
//   },
//   {
//     title: "Sunflower Oil",
//     desc: "Light, heart-healthy oil with mild flavor.",
//     slug: "sunflower-oil",
//     image: images,
//   },
// ];

// const Product = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
//       import('gsap').then(({ gsap }) => {
//         gsap.registerPlugin(ScrollTrigger);
//         cardRefs.current.forEach((card) => {
//           gsap.fromTo(
//             card,
//             { opacity: 0, y: 50 },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 1,
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//             }
//           );
//         });
//       });
//     });
//   }, []);

//   return (
//     <section id="Theme" className="py-16 bg-gradient raleway text-olive">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {themes.map((theme, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardRefs.current[index] = el)}
//               className="p-6 bg-gradient-to-r from-[#ECE852] to-[#95be47] shadow-lg rounded-lg transition-transform hover:scale-105"
//             >
//               {theme.badge && (
//                 <span className="inline-block mb-2 text-xs font-semibold text-white bg-red-500 px-3 py-1 rounded-full">
//                   {theme.badge}
//                 </span>
//               )}
//               <img
//                 src={theme.image}
//                 alt={theme.title}
//                 className="w-40 h-40 object-contain mx-auto mb-4"
//               />
//               <h3 className="text-xl font-semibold text-center mb-2">{theme.title}</h3>
//               <p className="text-sm text-center text-gray-700 leading-relaxed">{theme.desc}</p>

           
//               <Link to={`/product/${theme.slug}`}>
//                 <button className="mt-4 w-full bg-[#95be47] text-white py-2 px-4 rounded hover:bg-orange-600 transition">
//                   Click Here
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product;


import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import "../App.css";
import productImage from "../assets/coconut.jpg"; // Temporary image

const products = [
  {
    title: "Groundnut Oil 1L | 100% Pure, Cold-Pressed & Unrefined",
    slug: "groundnut-oil",
    price: 425,
    mrp: 500,
    // rating: 4.9,
    badge: "Save 15%",
    image: productImage,
  },
  {
    title: "Mustard Oil 1L | 100% Pure, Cold-Pressed & Unrefined",
    slug: "mustard-oil",
    price: 297,
    mrp: 350,
    // rating: 4.9,
    badge: "Save 15%",
    image: productImage,
  },
  {
    title: "Sunflower Oil 1L | 100% Pure, Cold-Pressed & Unrefined",
    slug: "sunflower-oil",
    price: 551,
    mrp: 649,
    // rating: 5.0,
    badge: "Save 15%",
    image: productImage,
  },
  {
    title: "Coconut Oil 500ml | Natural Hair & Skin Care",
    slug: "coconut-oil",
    price: 289,
    mrp: 340,
    // rating: 4.8,
    image: productImage,
  },
  {
    title: "Jaggery | Natural sweetener, rich in iron and minerals.",
    slug: "jaggery",
    price: 60,
    mrp: 100,
    // rating: 4.8,
    image: productImage,
  },
  {
    title: "Jaggery Powder | Easier to use, same goodness as solid jaggery",
    slug: "jaggery-powder",
    price: 60,
    mrp: 100,
    // rating: 4.8,
    image: productImage,
  },
  {
    title: "Groundnut cake | Organic cattle feed, high in protein.",
    slug: "groundnut-cake",
    price: 60,
    mrp: 100,
    // rating: 4.8,
    image: productImage,
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
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    });
  }, []);

  return (
    <section className="bg- py-16 px-4 md:px-16 text-olive">
      <h2 className="text-4xl font-bold text-center mb-12 raleway-heading">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg- border border--200 shadow-md rounded-lg p-4 flex flex-col hover:bg-"
          >
            <div className="relative w-full h-56 overflow-hidden rounded-md mb-4">
              {product.badge && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-md font-semibold leading-tight line-clamp-2 mb-2">
              {product.title}
            </h3>
            <div className="text-lg font-bold text-black">
              ₹ {product.price.toLocaleString()}
              <span className="text-gray-500 line-through ml-2 text-sm font-medium">
                ₹ {product.mrp.toLocaleString()}
              </span>
            </div>
            {/* <div className="flex items-center text-sm text-gray-600 my-2">
              <Star size={16} className="text-yellow-500 mr-1" />
              {product.rating}
            </div> */}

            <Link to={`/product/${product.slug}`} className="mt-2">
              <button className="w-full bg-[#59981A] text-white py-2 rounded-full font-semibold hover:bg-[#3D550C] transition">
                Add to cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
