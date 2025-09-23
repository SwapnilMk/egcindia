import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import econsEximGatewayLogo from "@/assets/images/platforms/econs-exim-gateway.webp";
import aecciLogo from "@/assets/images/logos/aecci.webp";
import egcIndiaLogo from "@/assets/images/logos/egcindia-trasparant.webp";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CommercialServicesCollaboration() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section with Logos */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-blue-900 from-white text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-8 sm:gap-12 mb-6 sm:mb-8 flex-wrap">
            <img
              src={econsEximGatewayLogo}
              alt="Econ's EXIM Gateway"
              className="h-16 sm:h-20 md:h-24 drop-shadow-lg"
            />
            <img
              src={egcIndiaLogo}
              alt="EGC India"
              className="h-16 sm:h-20 md:h-24 drop-shadow-lg"
            />
            <img
              src={aecciLogo}
              alt="AECCI"
              className="h-16 sm:h-20 md:h-24 drop-shadow-lg"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Commercial Services Collaboration
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            A strong partnership between{" "}
            <span className="font-bold text-yellow-400">
              Econ’s EXIM Gateway
            </span>
            , <span className="font-bold text-yellow-400">AECCI</span>, and{" "}
            <span className="font-bold text-yellow-400">EGC India</span>,
            driving global trade, procurement, and technology-forward commercial
            solutions.
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

      {/* Our Commercial Services Section */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Our Commercial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "EXIM Gateway Solutions",
                desc: "Seamless facilitation of imports/exports, regulatory compliance, and trade documentation.",
                icon: "🌐",
              },
              {
                title: "Procure-to-Pay & Order-to-Cash",
                desc: "Automating financial and procurement processes to increase transparency and efficiency.",
                icon: "💳",
              },
              {
                title: "Trade Advisory & Compliance",
                desc: "End-to-end support to help businesses comply with legal frameworks and global standards.",
                icon: "📑",
              },
              {
                title: "Inventory & Spend Management",
                desc: "AI-driven tools to track inventory, optimize spending, and reduce operational costs.",
                icon: "📊",
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
                    <div className="text-4xl mb-4">{service.icon}</div>
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

      {/* Collaboration Benefits */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Why This Collaboration Matters
          </h2>
          <p className="max-w-3xl sm:max-w-4xl mx-auto text-center mb-6 sm:mb-10 text-base sm:text-lg">
            Together, <span className="font-semibold">Econ’s EXIM Gateway</span>
            , <span className="font-semibold">AECCI</span>, and{" "}
            <span className="font-semibold">EGC India</span> create a seamless
            ecosystem of trade, procurement, and compliance — empowering
            businesses to expand globally with confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: "🌍",
                title: "Global + Local Expertise",
                desc: "Combining deep local understanding with international trade knowledge.",
              },
              {
                icon: "🤝",
                title: "Trusted Industry Partnerships",
                desc: "Backed by strong networks and associations that ensure credibility.",
              },
              {
                icon: "📈",
                title: "Proven Track Record",
                desc: "Delivering consistent results in EXIM and commercial service management.",
              },
            ].map((impact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{impact.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {impact.title}
                    </h3>
                    <p className="text-sm text-gray-700">{impact.desc}</p>
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
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gradient-to-r from-yellow-400 to-yellow-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center text-blue-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Partner with Us
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Unlock opportunities in trade, procurement, and technology-driven
            commercial services with our collaborative ecosystem.
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
