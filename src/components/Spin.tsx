import { motion } from "framer-motion";
import { useState } from "react";
import Emblem from "./Emblem";

export default function Spin() {
  const [rotationY, setRotationY] = useState(0);

  const handleSpin = () => {
    setRotationY((prev) => prev + 360); // Rotate around Y axis
  };

  return (
    <motion.div
      onClick={handleSpin}
      onTap={handleSpin}
      animate={{ y: [0, -15, 0] }} // floating effect stays
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="
        relative
        cursor-pointer
        w-[200px] sm:w-[250px] md:w-[280px] lg:w-[350px]
        select-none
        perspective-[1200px]
      "
    >
      {/* Spinning emblem */}
      <motion.div
        animate={{ rotateY: rotationY }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Emblem className="w-full opacity-95" />
      </motion.div>

      {/* Hint text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="
          text-center text-sm mt-4 
          text-gray-500 pointer-events-none
        "
      >
        Tap to spin →
      </motion.p>
    </motion.div>
  );
}
