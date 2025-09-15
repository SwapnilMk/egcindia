import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import india from "@/assets/images/flags/india.svg";
import australia from "@/assets/images/flags/australia.svg";
import uae from "@/assets/images/flags/uae.svg";
import usa from "@/assets/images/flags/usa.svg";
import germany from "@/assets/images/flags/germany .svg";
import japan from "@/assets/images/flags/japan.svg";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Partners() {
  const navigate = useNavigate();

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
            What Our Partners Say
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            Hear from our valued partners across the globe — trusted
            collaborations that showcase the impact of{" "}
            <span className="font-bold text-yellow-400">
              EGC India’s platforms
            </span>{" "}
            in trade, technology, and community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="border-white hover:bg-white text-black hover:text-blue-800 px-6 py-3 rounded-full"
              onClick={() => navigate("/contact/connect-team")}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Partner Testimonials */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Partner Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                name: "Rajiv Menon",
                company: "Trident Exim Solutions (India)",
                feedback:
                  "EGC India’s EXIM Gateway simplified our documentation and compliance processes, saving us weeks of manual effort.",
                flag: india,
              },
              {
                name: "Fatima Al Zayed",
                company: "Desert Star Trading (UAE)",
                feedback:
                  "Their trade advisory services gave us clarity in cross-border regulations and boosted our import timelines.",
                flag: uae,
              },
              {
                name: "Michael Fischer",
                company: "EuroNova Chemicals (Germany)",
                feedback:
                  "With EGC’s inventory & spend management solutions, we’ve achieved greater cost transparency and efficiency.",
                flag: germany,
              },
              {
                name: "Sophia Carter",
                company: "Summit Global Procurement (USA)",
                feedback:
                  "The P2P & O2C platform transformed how we handle supplier payments and cash flow cycles.",
                flag: usa,
              },
              {
                name: "Hiroshi Tanaka",
                company: "SakuraWave Exports (Japan)",
                feedback:
                  "PetSure’s platform gave us an innovative way to add pet safety features in our export product line.",
                flag: japan,
              },
              {
                name: "Emily Brown",
                company: "PacificCore Constructions (Australia)",
                feedback:
                  "HerRidez’s community focus is inspiring — we partnered to extend the culture of inclusivity to our teams.",
                flag: australia,
              },
            ].map((partner, idx) => (
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
                <Card className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    {/* ✅ Use an img tag to display the flag */}
                    <img
                      src={partner.flag}
                      alt={`${partner.name} flag`}
                      className="w-auto h-12 mx-auto mb-4  object-cover shadow-sm"
                    />
                    <p className="italic text-gray-700 mb-4">
                      “{partner.feedback}”
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600">{partner.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="bg-gradient-to-r from-yellow-400 to-yellow-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center text-blue-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Our Growing Network
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Become a part of EGC India’s ecosystem and experience the difference
            trusted partnerships make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
              onClick={() => navigate("/contact")}
            >
              Partner With Us
            </Button>
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-full"
              onClick={() => navigate("/contact/connect-team")}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
