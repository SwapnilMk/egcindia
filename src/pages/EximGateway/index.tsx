import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
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

export default function EximGatewayHome() {
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
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            One Platform.
            <span className="text-yellow-400">Global Trade.</span>
            <br />
            Smarter with AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 font-medium"
          >
            In Association with AECCI | Powered by{" "}
            <span className="font-bold text-yellow-400">EGC India</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
          >
            <Button
              size="lg"
              className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors min-w-[200px]"
              onClick={() => navigate("/get-started")}
            >
              🚀 Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full min-w-[160px]"
              onClick={() => navigate("/services/exim-gateway")}
            >
              📖 Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose EXIM Gateway?
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "AI-powered Compliance & Finance Matching.",
              "One-Window EXIM Management (All Roles).",
              "Escrow-secured Payments.",
              "Real-time Shipment & Document Sync.",
              "Backed by AECCI & EGC India.",
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="shadow-sm border-l-4 border-yellow-500 bg-white hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 pl-8">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl mt-1 flex-shrink-0">✅</div>
                      <p className="text-gray-800 font-medium text-base leading-relaxed">
                        {benefit}
                      </p>
                    </div>
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          >
            Join AECCI in Association with ECONS EXIM Gateway
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 font-medium"
          >
            Register your interest & get{" "}
            <span className="font-bold text-yellow-400">
              6 months free access
            </span>
            .
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-400 text-lg transition-all"
              onClick={() => navigate("/get-started")}
            >
              📌 Sign Up Now
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
