import { CheckCircle, Leaf, Flame, HeartHandshake, ShieldCheck } from 'lucide-react';
import "../App.css";

const features = [
  {
    icon: <Leaf className="text-green-600 w-8 h-8" />,
    title: "100% Natural",
    description: "No chemicals, no preservatives — just pure ingredients from nature.",
  },
  {
    icon: <Flame className="text-yellow-500 w-8 h-8" />,
    title: "Cold Pressed",
    description: "Extracted below 40°C to preserve nutrients, flavor, and aroma.",
  },
  {
    icon: <HeartHandshake className="text-rose-500 w-8 h-8" />,
    title: "Ethically Sourced",
    description: "We partner with local farmers for every raw material we use. Source A1 quality Groundnuts from Farmers",
  },
  {
    icon: <ShieldCheck className="text-emerald-600 w-8 h-8" />,
    title: "Best Quality Products",
    description: "We utilize only the best materials, meticulously hand crafting each product, which ensures incredible purity, taste, and legitness.",
  },
];

const WhyMadhoor = () => {
  return (
    <section className="bg-[#] py-20 px-6 md:px-16 text-olive w-full raleway">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold raleway-heading mb-2">Why Madhoor Pureline?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          What makes us different is what makes us pure. Here's what sets Madhoor Pureline apart.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#fefae0] p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMadhoor;
