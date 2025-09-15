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

export default function ConnectOurTeam() {
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
            Connect with Our Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            Meet the people behind{" "}
            <span className="font-bold text-yellow-400">EGC India</span> — ready
            to collaborate, innovate, and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
              onClick={() => navigate("/contact/conversation")}
            >
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              className="border-white hover:bg-white text-black hover:text-blue-800 px-6 py-3 rounded-full"
              onClick={() => navigate("/request-demo")}
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Team Members */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Our Leadership & Experts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                name: "Zaheer Bukhari",
                role: "Founder & Visionary",
                desc: "Driving EGC India’s mission to bridge commercial services with technology innovation.",
              },
              {
                name: "Advisory Board",
                role: "Industry Experts & Mentors",
                desc: "Guiding EGC India’s strategy, compliance, and innovation with global expertise.",
              },
              {
                name: "Project Leads",
                role: "Operations & Technology",
                desc: "Overseeing execution of EXIM services, platforms, and digital solutions.",
              },
            ].map((member, idx) => (
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
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-yellow-600 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-700">{member.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How to Connect */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            How You Can Connect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                icon: "🤝",
                title: "Partnerships",
                desc: "Collaborate with us on trade, procurement, or technology-driven projects.",
              },
              {
                icon: "💼",
                title: "Careers & Internships",
                desc: "Explore opportunities to grow with EGC India through unique programs.",
              },
              {
                icon: "📩",
                title: "General Inquiries",
                desc: "Reach out to our team for service details, demos, or collaborations.",
              },
            ].map((option, idx) => (
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
                    <div className="text-4xl mb-4">{option.icon}</div>
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

      {/* Direct Contact Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-12 text-blue-900">
            Directly Connect with Us
          </h2>
          <p className="max-w-3xl mx-auto mb-6 sm:mb-10 text-base sm:text-lg">
            Choose your preferred way to connect and our team will get back to
            you promptly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                icon: "📞",
                title: "Call Us",
                desc: "+91-7208046058",
              },
              {
                icon: "✉️",
                title: "Email Us",
                desc: "egcindia2015@gmail.com",
              },
              {
                icon: "📍",
                title: "Visit Us",
                desc: "Navi Mumbai, Maharashtra, India",
              },
            ].map((contact, idx) => (
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
                    <div className="text-4xl mb-4">{contact.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                      {contact.title}
                    </h3>
                    <p className="text-sm text-gray-700">{contact.desc}</p>
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
            Let’s Work Together
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Connect with our team to explore tailored solutions, partnerships,
            and opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
              onClick={() => navigate("/contact/conversation")}
            >
              Connect Now
            </Button>
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-full"
              onClick={() => navigate("/request-demo")}
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
