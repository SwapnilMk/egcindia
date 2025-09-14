import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import freshvegetables from "@/assets/sliders/freshvegetables.png";
import grains from "@/assets/sliders/grains.png";
import indianspices from "@/assets/sliders/indianspices.png";
import oilseeds from "@/assets/sliders/oilseeds.png";
import pulsesandbeans from "@/assets/sliders/pulsesandbeans.png";
import textiles from "@/assets/sliders/textiles.png";
import cattlefeed from "@/assets/sliders/cattlefeed.png";

const images = [
  { src: textiles, alt: "Textiles" },
  { src: freshvegetables, alt: "Fresh Vegetables" },
  { src: pulsesandbeans, alt: "Pulses and Beans" },
  { src: grains, alt: "Grains" },
  { src: indianspices, alt: "Indian Spices" },
  { src: oilseeds, alt: "Oilseeds" },
  { src: cattlefeed, alt: "Cattle Feed" },
];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative w-full 
        h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] 
        overflow-hidden shadow-lg
      "
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
}
