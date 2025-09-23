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

export default function PricingPlans() {
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
            Choose the Right Plan for
            <br />
            <span className="text-yellow-400">Your Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg max-w-3xl mx-auto font-medium"
          >
            Flexible plans designed for AECCI members to scale trade operations
            with AI-driven insights.
          </motion.p>
        </div>
      </motion.section>

      {/* Pricing Plans Section */}
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
            Our Plans
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
                title: "Basic Plan (Free)",
                price: "₹0 / year",
                features: [
                  "AECCI members only",
                  "Limited market insights",
                  "Up to 10 buying leads",
                  "No support",
                  "No reports",
                  "Basic trade guidance",
                  "No dedicated manager",
                ],
                buttonText: "Choose Plan",
                highlight: false,
              },
              {
                title: "Growth Plan",
                price: "₹50,000 / year",
                features: [
                  "AECCI members only",
                  "Detailed market report (select markets)",
                  "50+ verified leads with details",
                  "Email & WhatsApp support",
                  "Monthly performance report",
                  "Product-market fit & documentation support",
                  "No dedicated manager",
                ],
                buttonText: "Choose Plan",
                highlight: true,
              },
              {
                title: "Pro Plan",
                price: "₹100,000 / year",
                features: [
                  "AECCI members only",
                  "Unlimited verified & segmented leads",
                  "Priority Email, WhatsApp & Call support",
                  "Weekly reports & strategy consultation",
                  "Full access to all services",
                  "Dedicated Manager included",
                ],
                buttonText: "Choose Plan",
                highlight: false,
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`h-full shadow-sm border ${
                    plan.highlight
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100"
                      : "border-gray-200 hover:shadow-md"
                  } transition-all duration-300 rounded-2xl`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-center mb-4"
                    >
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {plan.title}
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className={`text-2xl font-semibold ${
                          plan.highlight ? "text-yellow-600" : "text-blue-900"
                        }`}
                      >
                        {plan.price}
                      </motion.p>
                    </motion.div>

                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="space-y-3 text-sm text-gray-700 flex-1 mb-6"
                    >
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          className="flex items-start space-x-2"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 0.4 + i * 0.05,
                            }}
                            className="text-green-600 font-bold mt-0.5 flex-shrink-0"
                          >
                            ✔
                          </motion.span>
                          <span className="flex-1">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="text-center"
                    >
                      <Button
                        size="sm"
                        className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 w-full ${
                          plan.highlight
                            ? "bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-lg"
                            : "bg-blue-900 text-white hover:bg-blue-800 hover:shadow-lg"
                        }`}
                        onClick={() => navigate("/eeg/auth/select-plan")}
                      >
                        {plan.buttonText}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Terms Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-5xl mx-auto px-4 py-12"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold text-blue-900 mb-6 text-center"
        >
          Terms & Conditions
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="list-disc pl-6 space-y-3 text-gray-700 text-sm max-w-3xl mx-auto"
        >
          {[
            "All paid plans are valid for 12 months from the date of activation.",
            "No refunds will be provided once the plan is activated.",
            "Buyer leads and market reports are for internal business use only and cannot be shared, sold, or redistributed.",
            "EGC is not responsible for business outcomes; final decisions rest with the members.",
            "EGC reserves the right to terminate memberships without refund if misusing data or violating terms.",
          ].map((term, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              className="leading-relaxed"
            >
              {term}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="bg-blue-900 text-white py-16 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            Ready to Scale Your Global Trade?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 w-full sm:w-auto transition-all"
                onClick={() => navigate("/get-started")}
              >
                Get Started Free
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full w-full sm:w-auto transition-all"
                onClick={() => navigate("/get-started")}
              >
                Upgrade to Growth Plan
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 w-full sm:w-auto transition-all"
                onClick={() => navigate("/get-started")}
              >
                Go Pro
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
