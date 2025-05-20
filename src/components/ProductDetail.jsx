import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
import image from "../assets/coconut.jpg"

// Sample product data
const oils = {
  "groundnut-oil": {
    name: "Groundnut Oil",
    image: image,
    description: "Cold-pressed A1 groundnut oil rich in aroma, perfect for frying and deep cooking.",
    benefits: ["High smoke point", "Rich in Vitamin E", "Good for heart health"],
  },
   "mustard-oil": {
    name: "Mustard Oil",
    image: image,
    description:
      "Bold flavor, antibacterial properties, ideal for traditional Indian cooking.",
    benefits: [
      "Boosts immunity",
      "Rich in Omega-3",
      "Improves circulation",
    ],
  },
  "coconut-oil": {
    name: "Coconut Oil",
    image: image,
    description:
      "Naturally extracted, great for hair, skin, and cooking. No chemicals.",
    benefits: [
      "MCT-rich energy",
      "Antibacterial",
      "Natural moisturizer",
    ],
  },
   "sunflower-oil": {
    name: "Sunflower Oil",
    image: image,
    description:
      "Naturally extracted, great for hair, skin, and cooking. No chemicals.",
    benefits: [
      "MCT-rich energy",
      "Antibacterial",
      "Natural moisturizer",
    ],
  },
   "jaggery-powder": {
    name: "Jaggery Powder",
    image: image,
    description:
      "Naturally extracted, great for hair, skin, and cooking. No chemicals.",
    benefits: [
      "MCT-rich energy",
      "Antibacterial",
      "Natural moisturizer",
    ],
  },
   "groundnut-cake": {
    name: "Groundnut cake",
    image: image,
    description:
      "Naturally extracted, great for hair, skin, and cooking. No chemicals.",
    benefits: [
      "MCT-rich energy",
      "Antibacterial",
      "Natural moisturizer",
    ],
  },
   "jaggery": {
    name: "Jaggery",
    image: image,
    description:
      "Naturally extracted, great for hair, skin, and cooking. No chemicals.",
    benefits: [
      "MCT-rich energy",
      "Antibacterial",
      "Natural moisturizer",
    ],
  },
  
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = oils[slug];
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef();

  if (!product) return <p className="text-center py-20">Product not found.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x62uc0d",        // Replace with your EmailJS Service ID
        "your_template_id",       // Replace with your EmailJS Template ID
        formRef.current,
        "your_public_key"         // Replace with your EmailJS Public API Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowForm(false);
          setShowSuccess(true);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="px-6 md:px-16 py-20 text-olive bg-[#fffaf0] relative">
      <Link to="/" className="text-[#ff6c4a] underline mb-4 inline-block">← Back to products</Link>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src={product.image} alt={product.name} className="rounded-xl shadow-xl w-full" />
        <div>
          <h2 className="text-4xl font-bold mb-4 raleway-heading">{product.name}</h2>
          <p className="text-lg text-gray-800 mb-6">{product.description}</p>
          <h4 className="text-2xl font-semibold mb-2">Key Benefits:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
            {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
          </ul>

          <button
            onClick={() => setShowForm(true)}
            className="bg-[#95be47] text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Enquiry
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">Product Enquiry</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="product" value={product.name} />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantity (e.g., 1L, 2L)"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <textarea
                name="address"
                placeholder="Your Address"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#ff6c4a] text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg w-[90%] max-w-md">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Thank you!</h3>
            <p className="text-gray-700">Your enquiry was successfully submitted.</p>
            <button
              className="mt-4 bg-[#ff6c4a] text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={() => setShowSuccess(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
