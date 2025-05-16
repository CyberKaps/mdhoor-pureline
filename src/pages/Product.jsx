import { motion } from 'framer-motion'
import TiltedCard from '../components/TitledCard'
import image from "../assets/oilbottle.jpg"


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css"







    const themes = [
    {
        
        title: "Coconut Oil",
        
    },
    {
       
        title: "Groundnut oil",
      
    },
    {
      
        title: "Jaggery",
        },
    {
       
        title: "Jaggery Powder",
         },
    {
        
        title: "Groundnut Cake",
     
    },
    {
        
        title: "Sunflower oil",
           },


    ];

    const Product = () => {
        const cardRefs = useRef([]);

        useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            cardRefs.current.forEach((card, index) => {
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
        }, []);

    return (
        <section id="Theme" className=" text-white py-16 bg-[#f5f181] raleway ">
        <div className="container mx-auto px-4 ">
            <h2 className="text-5xl mb-12 text-center text-white">
            Our Products
            </h2>
            <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 items-cente justify-center">
            {themes.map((theme, index) => (
                <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} 
                className="theme-card h-56 bg-gradient-to-r from-[#82e75a] to-[#f3f73b] rounded-lg p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-110"
                >
                <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-52 h-24 object-contain mb-4  "
                />
                <h3 className="text-xl font-semibold text-center">
                    {theme.title}
                </h3>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Product;