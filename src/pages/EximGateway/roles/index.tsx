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

export const Roles = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
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
            Our Roles –
            <br />
            <span className="text-yellow-400">All Stakeholders Connected</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg max-w-3xl mx-auto font-medium"
          >
            All stakeholders in EXIM trade, connected in one ecosystem with
            real-time sync and AI-powered workflows.
          </motion.p>
        </div>
      </motion.section>

      {/* Roles Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            >
              All Stakeholders Connected
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 max-w-2xl mx-auto"
            >
              Discover how each role in the EXIM ecosystem works together
              seamlessly with our AI-powered platform.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "📦",
                title: "Exporters",
                desc: "Showcase products, send RFQs, manage compliance & shipments with AI support.",
                color: "text-blue-600 bg-blue-100",
              },
              {
                icon: "🌍",
                title: "Importers",
                desc: "Find trusted exporters, compare quotes, track logistics & settle payments securely.",
                color: "text-green-600 bg-green-100",
              },
              {
                icon: "🚚",
                title: "Transportation Agents",
                desc: "Fleet dashboard, GPS tracking, trip invoicing & customs handover integration.",
                color: "text-yellow-600 bg-yellow-100",
              },
              {
                icon: "🛳",
                title: "Shipping Agents",
                desc: "Submit freight quotes, schedules, BL/AWB docs & track cargo in real time.",
                color: "text-purple-600 bg-purple-100",
              },
              {
                icon: "📄",
                title: "Documentation Agents",
                desc: "Issue valid certificates with AI compliance validation.",
                color: "text-red-600 bg-red-100",
              },
              {
                icon: "🏦",
                title: "Trade Finance Providers",
                desc: "Offer LCs, loans, forex & insurance with AI benchmarks.",
                color: "text-indigo-600 bg-indigo-100",
              },
            ].map((role, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="h-full shadow-sm border-0 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div className="text-center mb-4">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${role.color}`}
                      >
                        <div className="text-2xl">{role.icon}</div>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-xl font-semibold text-blue-900 mb-3"
                      >
                        {role.title}
                      </motion.h3>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-gray-600 text-sm leading-relaxed text-center flex-1"
                    >
                      {role.desc}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            Ready to Connect Your Trade Ecosystem?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Join thousands of stakeholders already transforming global trade
            with our integrated platform.
          </motion.p>

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
};
