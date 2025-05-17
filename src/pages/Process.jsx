import { motion } from 'framer-motion';
import "../App.css";

const videos = [
  { src: "/videos/process1.mp4", label: "Kalpesh" },
  { src: "/videos/process1.mp4", label: "Kalpesh" },
  { src: "/videos/process1.mp4", label: "Kalpesh" },
  { src: "/videos/process1.mp4", label: "Kalpesh" },
  { src: "/videos/process1.mp4", label: "Kalpesh" },
  { src: "/videos/process1.mp4", label: "Kalpesh" },
];

const Process = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 md:px-16 py-16 bg-[#] bg-gradient text-olive w-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold raleway-heading mb-2">Our Process</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          A quick look into our pure, chemical-free cold-press oil extraction process.
        </p>
      </div>

      {/* Video Row */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {videos.map((video, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.03 }}
    className="w-full md:w-1/3 aspect-[9/16] rounded-xl overflow-hidden shadow-md relative"
  >
    <video
      src={video.src}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-sm font-semibold px-2 py-1 rounded text-center">
      {video.label}
    </div>
  </motion.div>
))}
      </div>
    </motion.section>
  );
};

export default Process;
