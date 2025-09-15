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

export default function ContactUs() {
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
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            We’d love to hear from you! Connect with{" "}
            <span className="font-bold text-yellow-400">EGC India</span> for
            inquiries, partnerships, or support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
              onClick={() => navigate("/request-demo")}
            >
              Request a Demo
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

      {/* Contact Information */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                icon: "📍",
                title: "Our Office",
                desc: "Navi Mumbai, Maharashtra, India",
              },
              {
                icon: "📞",
                title: "Phone",
                desc: "+91 720 804 6058",
              },
              {
                icon: "✉️",
                title: "Email",
                desc: "egcindia2015@gmail.com",
              },
            ].map((info, idx) => (
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
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {info.title}
                    </h3>
                    <p className="text-sm text-gray-700">{info.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Send Us a Message
          </h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
          >
            <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg p-6 sm:p-8">
              <form className="grid gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message..."
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    rows={5}
                  ></textarea>
                </div>
                <Button
                  className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-12 text-blue-900">
            Find Us
          </h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
          >
            <div className="shadow-md hover:shadow-lg transition rounded-lg">
              <iframe
                title="EGC India Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160985166!2d72.741099!3d19.082197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630fd7f23ff%3A0xdea51c2b1f5a1c0b!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1637745642021!5m2!1sen!2sin"
                width="100%"
                height="400"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
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
            Let’s Connect Today
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Whether you’re exploring services, partnerships, or career
            opportunities, EGC India is here to support you.
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
