import { useState } from "react";
import "../App.css";

const questions = [
  {
    question: "What’s your top health priority?",
    options: [
      { label: "Heart Health", value: "groundnut" },
      { label: "Energy Boost", value: "jaggery" },
      { label: "Skin & Hair Care", value: "coconut" },
    ],
  },
  {
    question: "How do you usually cook?",
    options: [
      { label: "Deep Frying", value: "groundnut" },
      { label: "Light Saute", value: "sunflower" },
      { label: "Traditional Recipes", value: "jaggery" },
    ],
  },
  {
    question: "What's most important to you?",
    options: [
      { label: "Taste & Aroma", value: "groundnut" },
      { label: "Digestive Health", value: "jaggery" },
      { label: "Natural Moisturizing", value: "coconut" },
    ],
  },
];

const resultMap = {
  groundnut: "Groundnut Oil",
  jaggery: "Jaggery Block",
  coconut: "Coconut Oil",
  sunflower: "Sunflower Oil",
};

const ProductQuiz = () => {
  const [answers, setAnswers] = useState([]);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState("");

  const handleSelect = (value) => {
    const updated = [...answers, value];
    setAnswers(updated);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      // Count most frequent value
      const frequency = {};
      updated.forEach((v) => (frequency[v] = (frequency[v] || 0) + 1));
      const recommended = Object.entries(frequency).sort((a, b) => b[1] - a[1])[0][0];
      setResult(resultMap[recommended]);
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setStep(0);
    setResult("");
  };

  return (
    <section className="bg-[#81B622] py-20 px-6 md:px-16 text-olive">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold raleway-heading mb-2">Which Madhoor Product Suits You?</h2>
        <p className="text-lg text-gray-700">Take our 1-minute quiz and find your match.</p>
      </div>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md text-center">
        {result ? (
          <>
            <h3 className="text-2xl font-semibold mb-4">You should try:</h3>
            <p className="text-3xl text-green-700 font-bold">{result}</p>
            <button
              className="mt-6 btn-primary"
              onClick={restartQuiz}
            >
              Try Again
            </button>
          </>
        ) : (
          <>
            <h4 className="text-xl font-semibold mb-4">{questions[step].question}</h4>
            <div className="space-y-3">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.value)}
                  className="w-full bg-[#fefae0] border border-[#95be47] px-4 py-2 rounded hover:bg-[#95be47] hover:text-white transition"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductQuiz;
