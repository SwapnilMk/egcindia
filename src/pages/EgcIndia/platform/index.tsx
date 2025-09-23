import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import econsEximGateway from "@/assets/images/platforms/econs-exim-gateway.webp";
import fourCorner from "@/assets/images/platforms/4corner.webp";
import petsure from "@/assets/images/platforms/petsure.webp";
import herridez from "@/assets/images/platforms/herRidez.webp";
import bxc from "@/assets/images/platforms/bxc.webp";
import utapLive from "@/assets/images/platforms/utap.webp";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Platforms() {
  const navigate = useNavigate();

  const platforms = [
    {
      img: econsEximGateway,
      title: "Econs EXIM Gateway",
      desc: "A marketplace connecting builders and suppliers in the construction sector.",
      link: "/eeg", // ✅ Add route here
    },
    {
      img: petsure,
      title: "PetSure",
      desc: "Lost & found pet solution with QR ID tags and AI matching technology.",
    },
    {
      img: herridez,
      title: "HerRidez",
      desc: "A women rider community app with AI mentor matching and event discovery.",
    },
    {
      img: fourCorner,
      title: "4CORNER",
      desc: "Youth-driven short-video and photo-sharing platform for global creators.",
    },
    {
      img: utapLive,
      title: "UTAP LIVE",
      desc: "A decentralized live-streaming and festival experience platform.",
    },
    {
      img: bxc,
      title: "BxC",
      desc: "A B2B construction material procurement platform connecting suppliers with developers and builders.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="bg-blue-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our Key Platforms
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            At <span className="font-bold text-yellow-400">EGC India</span>, we
            don’t just build services — we create platforms that empower
            industries, communities, and global trade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
              onClick={() => navigate("/services/collaboration")}
            >
              Explore Platforms
            </Button>
            <Button
              variant="outline"
              className="border-white hover:bg-white text-black hover:text-blue-800 px-6 py-3 rounded-full"
              onClick={() => navigate("/platforms/deck")}
            >
              Download Platform Deck
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Platforms Grid */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Our Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {platforms.map((platform, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: idx * 0.1 },
                  },
                }}
              >
                <Card
                  className={`shadow-md hover:shadow-lg transition cursor-pointer ${
                    platform.link ? "hover:bg-gray-100" : ""
                  }`}
                  onClick={() => platform.link && navigate(platform.link)} // ✅ Navigate if link exists
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src={platform.img}
                      alt={platform.title}
                      className="w-24 h-24 object-cover rounded border-2 mb-2"
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {platform.title}
                    </h3>
                    <p className="text-sm text-gray-700">{platform.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="bg-gradient-to-r from-yellow-400 to-yellow-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center text-blue-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Partner with EGC India
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Join us in scaling platforms that are reshaping industries and
            empowering communities across the globe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-full"
              onClick={() => navigate("/platforms/deck")}
            >
              Download Platform Deck
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
