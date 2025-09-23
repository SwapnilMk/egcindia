import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import globalTradeAndTechnology from "@/assets/images/backgrounds/globaltradetech.webp";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-blue-900 from-white text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            Discover how{" "}
            <span className="font-bold text-yellow-400">EGC India</span>{" "}
            empowers businesses with cutting-edge{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Solutions
            </span>{" "}
            for global success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
              onClick={() => navigate("/get-started")}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white hover:bg-white text-black hover:text-blue-800 px-6 py-3 rounded-full"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Commercial Services */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Commercial Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "EXIM Gateway Solutions",
                desc: "Streamline global trade with our AI-driven platform for documentation, compliance, and logistics.",
              },
              {
                title: "Procure-to-Pay & Order-to-Cash",
                desc: "Optimize procurement and payment cycles with end-to-end automation and transparency.",
              },
              {
                title: "Trade Advisory & Compliance",
                desc: "Navigate complex trade regulations with expert guidance and compliance solutions.",
              },
              {
                title: "Inventory & Spend Management",
                desc: "Enhance efficiency with real-time inventory tracking and cost optimization tools.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-700">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Solutions */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-900">
              Technology Solutions
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-2 sm:mb-4">
              Our technology solutions empower businesses with innovative tools
              for automation, analytics, and digital transformation.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>💻 Custom App Development</li>
              <li>📊 AI & Data Analytics</li>
              <li>☁️ Cloud Integration & Automation</li>
              <li>
                🚀 Platforms: BuildMate, PetSure, HerRidez, 4CORNER, UTAP LIVE
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl shadow-lg h-48 sm:h-64 md:h-72 overflow-hidden">
            <img
              src={globalTradeAndTechnology}
              alt="Technology Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Why Choose Our Services */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              "Tailored Solutions for Global Trade",
              "AI-Driven Automation",
              "Proven Expertise in EXIM & Procurement",
              "Scalable Technology Platforms",
              "Compliance with International Standards",
              "Dedicated Support & Advisory",
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6 text-center font-semibold text-blue-900">
                    {reason}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gradient-to-r from-yellow-400 to-yellow-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center text-blue-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Transform Your Business Today
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Partner with EGC India to unlock the power of seamless trade and
            innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
              onClick={() => navigate("/get-started")}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-full"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
