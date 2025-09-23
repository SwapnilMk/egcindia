import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import aecciLogo from "@/assets/images/logos/aecci.webp";
import egcLogo from "@/assets/images/logos/egcindia-trasparant.webp";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const staggerContainer: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutExim() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans relative">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Redefining Global Trade with
            <br />
            <span className="text-yellow-400">
              Trust, Technology & Transparency
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg max-w-4xl mx-auto font-medium"
          >
            Powered by{" "}
            <span className="font-bold text-yellow-400">EGC India</span> in
            association with{" "}
            <span className="font-bold text-yellow-400">AECCI</span>, ECONS EXIM
            Gateway connects all trade stakeholders with AI-driven solutions for
            compliance, logistics, and finance.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            To simplify global trade by offering a single-window digital
            ecosystem that connects exporters, importers, logistics providers,
            banks, and regulators with speed, security, and transparency.
          </motion.p>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6"
          >
            Our Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            To become the world's most trusted EXIM technology partner, driving
            international growth for businesses of every size through innovation
            and collaboration.
          </motion.p>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Our Values
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              {
                icon: "🌍",
                title: "Global Connectivity",
                desc: "Connecting businesses seamlessly across borders.",
                color: "text-blue-600 bg-blue-100",
              },
              {
                icon: "🛡",
                title: "Compliance & Trust",
                desc: "Ensuring every transaction is secure and verified.",
                color: "text-green-600 bg-green-100",
              },
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Driving efficiency with AI and advanced digital tools.",
                color: "text-yellow-600 bg-yellow-100",
              },
              {
                icon: "🤝",
                title: "Partnership",
                desc: "Collaborating with AECCI & global stakeholders.",
                color: "text-purple-600 bg-purple-100",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="h-full shadow-sm border-0 hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-6 h-full flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${value.color}`}
                    >
                      <div className="text-2xl">{value.icon}</div>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-lg font-bold text-blue-900 mb-3"
                    >
                      {value.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-gray-600 text-sm leading-relaxed flex-1"
                    >
                      {value.desc}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Strategic Partnership Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 bg-blue-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6"
          >
            Strategic Partnership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-3xl mx-auto mb-8 italic font-medium text-blue-800"
          >
            "In Association with AECCI | Powered by EGC India"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <img src={aecciLogo} alt="AECCI" className="h-24 w-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <img src={egcLogo} alt="EGC India" className="h-24 w-auto" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="bg-blue-900 text-white py-16 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-6"
          >
            Join Us in Building the
            <br />
            <span className="text-yellow-400">Future of Global Trade</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-400 text-lg transition-all"
              onClick={() => navigate("/get-started")}
            >
              Request a Demo
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
