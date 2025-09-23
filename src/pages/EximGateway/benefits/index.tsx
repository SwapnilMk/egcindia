import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function Benefits() {
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
            Why Choose{" "}
            <span className="text-yellow-400 block">ECON'S EXIM Gateway?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg max-w-4xl mx-auto font-medium"
          >
            Transform your export-import operations with AI-powered efficiency,
            compliance, and transparency.
          </motion.p>
        </div>
      </motion.section>

      {/* Benefits Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Key Benefits
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "⚡",
                title: "AI-Powered Compliance",
                desc: "Automated regulation checks with instant alerts for policy changes.",
                color: "text-blue-600 bg-blue-100",
              },
              {
                icon: "🌐",
                title: "One-Window Trade Management",
                desc: "All roles connected in one ecosystem with no silos or duplication.",
                color: "text-green-600 bg-green-100",
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                desc: "Escrow wallet & bank integrations ensure protection for buyers and sellers.",
                color: "text-purple-600 bg-purple-100",
              },
              {
                icon: "📊",
                title: "Real-Time Visibility",
                desc: "Track shipments, document status, and finance flows with live dashboards.",
                color: "text-yellow-600 bg-yellow-100",
              },
              {
                icon: "🤝",
                title: "Trusted Partnerships",
                desc: "Backed by AECCI & powered by EGC India for global recognition.",
                color: "text-indigo-600 bg-indigo-100",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="h-full shadow-sm border-0 hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-6 h-full flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${benefit.color}`}
                    >
                      <div className="text-2xl">{benefit.icon}</div>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-xl font-bold text-blue-900 mb-3"
                    >
                      {benefit.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-gray-600 text-sm leading-relaxed flex-1"
                    >
                      {benefit.desc}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Before vs After Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Before vs After EXIM Gateway
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Before Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="shadow-sm border border-red-200 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-4"
                  >
                    <h3 className="text-xl font-bold text-red-600 mb-2">
                      Before
                    </h3>
                    <div className="w-20 h-1 bg-red-400 rounded-full mx-auto"></div>
                  </motion.div>

                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-3 text-sm text-gray-700"
                  >
                    {[
                      "Manual paperwork",
                      "Delays in approvals & shipments",
                      "Compliance risks & penalties",
                      "Lack of real-time visibility",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={listItemVariants}
                        className="flex items-start space-x-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 mt-1 flex-shrink-0"
                        >
                          ❌
                        </motion.div>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* After Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="shadow-sm border border-green-200 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center mb-4"
                  >
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      After
                    </h3>
                    <div className="w-20 h-1 bg-green-400 rounded-full mx-auto"></div>
                  </motion.div>

                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3 text-sm text-gray-700"
                  >
                    {[
                      "Digital & automated workflows",
                      "Faster compliance and clearance",
                      "AI-powered accuracy & insights",
                      "Transparency across all stakeholders",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={listItemVariants}
                        className="flex items-start space-x-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className="text-green-500 mt-1 flex-shrink-0"
                        >
                          ✅
                        </motion.div>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
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
            Trade with Confidence —
            <br />
            <span className="text-yellow-400">Backed by AI & AECCI</span>
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
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
