import { Link } from "react-router-dom";
import "../App.css";
import image from "../assets/coconut.jpg"

const oils = [
  {
    name: "Groundnut Oil",
    image: image,
    slug: "groundnut-oil",
  },
  {
    name: "Mustard Oil",
    image: image,
    slug: "mustard-oil",
  },
  {
    name: "Virgin Coconut Oil",
    image: image,
    slug: "coconut-oil",
  },
  {
    name: "Extra Virgin Olive Oil",
    image: image,
    slug: "olive-oil",
  },
  {
    name: "Sesame Oil",
    image: image,
    slug: "sesame-oil",
  },
  {
    name: "Sunflower Oil",
    image: image,
    slug: "sunflower-oil",
  },
];

const OilProductsSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-16 text-center text-olive">
      <h2 className="text-4xl font-bold mb-12 raleway-heading">Our Cold Pressed Oils</h2>
      <div className="flex flex-wrap justify-center gap-14">
        {oils.map((oil, index) => (
          <Link
            to={`/product/${oil.slug}`}
            key={index}
            className="flex flex-col items-center group transition duration-300"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition duration-300">
              <img src={oil.image} alt={oil.name} className="object-cover w-full h-full" />
            </div>
            <p className="mt-3 font-medium text-md md:text-lg">{oil.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OilProductsSection;
