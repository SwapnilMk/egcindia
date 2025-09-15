import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChoose() {
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
            Why Choose EGC India?
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            Your trusted partner in{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Innovation
            </span>
            .
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
              onClick={() => navigate("/contact/connect-team")}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Key Reasons */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Our Advantages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "Global + Local Expertise",
                desc: "Backed by global partnerships, rooted in Indian market insights.",
              },
              {
                title: "Innovation-First Approach",
                desc: "Every service enhanced with AI, automation, and digital solutions.",
              },
              {
                title: "Proven Results",
                desc: "250+ global programs across 16+ countries with measurable outcomes.",
              },
              {
                title: "Strategic Partnerships",
                desc: "Strong collaborations with industry bodies like AECCI.",
              },
              {
                title: "Multi-Sector Capability",
                desc: "From Automotive to Digital Commerce, we serve diverse industries.",
              },
              {
                title: "Long-Term Commitment",
                desc: "We focus on building ecosystems, not just services.",
              },
            ].map((reason, idx) => (
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
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-700">{reason.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                number: "250+",
                label: "Programs Managed Globally",
              },
              {
                number: "16+",
                label: "Countries of Presence",
              },
              {
                number: "1000s",
                label: "Business Transactions Optimized",
              },
              {
                number: "Dozens",
                label: "SaaS / Digital Platforms Launched",
              },
            ].map((stat, idx) => (
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
                  <CardContent className="p-6 sm:p-8 text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-sm text-gray-700">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "EGC India simplified our procurement and helped us cut costs by 20%.",
                name: "FalconSphere Technologies – Qatar",
              },
              {
                quote:
                  "The AI-driven analytics transformed how we manage inventory and compliance.",
                name: "DragonWing Logistics – Hong Kong",
              },
            ].map((test, idx) => (
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
                  <CardContent className="p-6">
                    <p className="italic text-gray-700 mb-4">“{test.quote}”</p>
                    <h4 className="font-semibold text-blue-900">
                      — {test.name}
                    </h4>
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
            Choose Growth. Choose EGC India.
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Partner with us today to unlock global opportunities with
            technology-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
              onClick={() => navigate("/get-started")}
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
