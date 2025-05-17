import React from "react";
import appImage from "../assets/madhoorPureline.png"; 

const GroundnutOil = () => {
  return (
    <section className="bg-[#fff7f6] py-2">
      <h1 className="raleway-heading text-4xl md:text-7xl lg:text-8xl mt-4 text-[#9BEC00] text-center">
        Groundnut Oil
      </h1>
      <div className="flex justify-around">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-x-20 gap-y-10">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Introducing Groundnut Oil: lorem, <br />
              ipsum.{" "}
              <span className="text-[#FF6C4A]">Edible oil </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam facere ratione expedita magni vitae voluptatem pariatur nihil modi, sed architecto quam dolores qui voluptates nobis? Totam ex fugiat reprehenderit, cupiditate maiores commodi alias culpa ullam voluptates repellat vero nisi.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <img
              src={appImage}
              alt="Groundnut oil"
              className="w-full max-w-md drop-shadow-xl"
            />
            <div className="absolute bg-[#FF6C4A] rounded-full w-72 h-72 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundnutOil;
