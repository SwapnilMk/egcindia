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

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-blue-900  from-white text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get Started with EGC India
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            Take the first step towards transforming your business with our{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Solutions
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
              onClick={() => navigate("/request-demo")}
            >
              Book a Consultation
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

      {/* How It Works */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "Step 1 – Connect With Us",
                desc: "Reach out via contact form, email, or phone. Share your business goals and challenges.",
              },
              {
                title: "Step 2 – Customized Assessment",
                desc: "Our team will evaluate your requirements and design a tailored roadmap (EXIM, Procurement, Technology).",
              },
              {
                title: "Step 3 – Launch & Grow",
                desc: "Start your journey with EGC India — from pilot projects to full-scale implementations.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-700">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Start With Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Why Start With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "Free Initial Consultation",
                desc: "We provide a no-obligation consultation and needs assessment.",
              },
              {
                title: "Dedicated Account Manager",
                desc: "Personalized support throughout your engagement.",
              },
              {
                title: "Flexible Engagement Models",
                desc: "Choose between pilot, project-based, or long-term collaborations.",
              },
              {
                title: "Trusted by Global Partners",
                desc: "Backed by AECCI and international trade networks.",
              },
            ].map((benefit, idx) => (
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
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-700">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Callout Cards */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Get Started Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "Commercial Services Onboarding",
                desc: "Quick setup for EXIM & procurement solutions.",
              },
              {
                title: "Technology Discovery",
                desc: "Explore SaaS platforms, AI tools, and blockchain pilots.",
              },
              {
                title: "Internship & Collaboration",
                desc: "Unique programs for interns and ecosystem partners.",
              },
            ].map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-700">{option.desc}</p>
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
            Ready to Get Started?
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Let’s build your roadmap for success today with EGC India’s trusted
            services and innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
              onClick={() => navigate("/request-demo")}
            >
              Request a Demo
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
