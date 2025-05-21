import { Leaf, Recycle, Sun } from 'lucide-react';
import "../App.css";

const pledges = [
  {
    icon: <Recycle className="w-8 h-8 text-green-700" />,
    title: "Minimal Plastic Use",
    desc: "We use eco-friendly packaging and avoid plastics wherever possible to reduce our environmental footprint.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-lime-700" />,
    title: "Support for Local Farming",
    desc: "We work directly with nearby farmers to source our raw ingredients ethically and sustainably.",
  },
  {
    icon: <Sun className="w-8 h-8 text-yellow-600" />,
    title: "Solar-Powered Production",
    desc: "Our operations are powered in part by renewable solar energy, reducing our carbon impact. ",
  },
];

const SustainabilityPledge = () => {
  return (
    <section className="bg- py-20 px-6 md:px-16 text-olive">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold raleway-heading mb-2">Our Sustainability Pledge</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We care deeply about the planet — and it shows in everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pledges.map((pledge, index) => (
          <div key={index} className="bg-[#fefae0] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="mb-4">{pledge.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{pledge.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{pledge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainabilityPledge;
