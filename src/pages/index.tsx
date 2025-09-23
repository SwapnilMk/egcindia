import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import egcLogo from "@/assets/images/logos/egcindia-trasparant.webp";
import globalTradeAndTechnology from "@/assets/images/backgrounds/globaltradetech.webp";
import econsEximGateway from "@/assets/images/platforms/econs-exim-gateway.webp";
import fourCorner from "@/assets/images/platforms/4corner.webp";
import petsure from "@/assets/images/platforms/petsure.webp";
import herridez from "@/assets/images/platforms/herRidez.webp";
import bxc from "@/assets/images/platforms/bxc.webp";
import utapLive from "@/assets/images/platforms/utap.webp";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gradient-to-b from-white to-blue-900 text-white py-12 px-4 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <img
            src={egcLogo}
            alt="EGC India Logo"
            className="mx-auto mb-6 h-16 sm:h-20 md:h-24 drop-shadow-lg"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Welcome to EGC India
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Empowering businesses with{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Innovation
            </span>{" "}
            for a global future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
              onClick={() => navigate("/services")}
            >
              Explore Our Business
            </Button>
            <Button
              variant="outline"
              className="border-white hover:bg-white text-black hover:text-blue-800 px-6 py-3 rounded-full"
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 px-4 grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 items-center"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            <span className="font-bold">EGC India</span> (Econs Gateway
            Commercial india) is a technology-driven company redefining how
            businesses manage
            <strong> EXIM, procurement, and trade operations</strong>. We
            combine global expertise, AI-driven innovation, and industry
            partnerships to deliver sustainable growth.
          </p>
        </div>
        <div className="relative rounded-2xl shadow-lg h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0">
            {/* Background Image */}
            <img
              src={globalTradeAndTechnology}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Explore Our Business */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gray-50 py-12 px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Explore Our Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6">
          {/* Commercial Services - Clickable */}
          <Card
            onClick={() => navigate("/services/collaboration")}
            className="shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform rounded-xl"
          >
            <CardContent className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-900">
                Commercial Services
              </h3>
              <ul className="list-none list-inside space-y-2 text-base">
                <li>🌐 EXIM Gateway Solutions</li>
                <li>📑 Procure-to-Pay & Order-to-Cash</li>
                <li>📦 Trade Advisory & Compliance</li>
                <li>📊 Inventory & Spend Management</li>
              </ul>
            </CardContent>
          </Card>

          {/* IT & Technology - Non-clickable (but you can add onClick too if needed) */}
          <Card className="shadow-md rounded-xl hover:shadow-lg hover:scale-[1.02] transition-transform">
            <CardContent className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-900">
                IT & Technology
              </h3>
              <ul className="list-none list-inside space-y-2 text-base">
                <li>💻 Custom App Development</li>
                <li>📊 AI & Data Analytics</li>
                <li>☁️ Cloud Integration & Automation</li>
                <li>
                  🚀 Platforms: BuildMate, PetSure, HerRidez, 4CORNER, UTAP LIVE
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Platforms Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-20 px-8 bg-gray-50"
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-blue-900">
          Our Key Platforms
        </h1>
        <p className="text-base sm:text-lg max-w-4xl mx-auto text-center mb-12">
          Discover the innovative platforms from{" "}
          <span className="font-bold text-yellow-400">EGC India</span> that
          bridge technology, commerce, and community to empower businesses and
          individuals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              img: econsEximGateway,
              title: "Econ’s EXIM Gateway",
              desc: "A powerful platform simplifying global trade, documentation, and compliance for exporters and importers.",
              link: "/eeg",
            },
            {
              img: fourCorner,
              title: "4CORNER",
              desc: "A neon-powered social media platform for youth to share reels, short videos, and engage creatively.",
            },
            {
              img: petsure,
              title: "PetSure",
              desc: "An AI-powered lost-and-found pet solution with QR tags and real-time matching for pet safety.",
            },
            {
              img: herridez,
              title: "HerRidez",
              desc: "A unique superbike community app designed for women riders with AI ride mentor and event matcher.",
            },
            {
              img: bxc,
              title: "BxC",
              desc: "A B2B construction material procurement platform connecting suppliers with developers and builders.",
            },
            {
              img: utapLive,
              title: "UTAP Live",
              desc: "A decentralized social festival platform enabling live streaming with zero server storage, powered by Google Drive.",
            },
          ].map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card
                className={`shadow-md hover:shadow-lg transition cursor-pointer ${
                  platform.link ? "hover:scale-[1.02]" : ""
                }`}
                onClick={() => platform.link && navigate(platform.link)}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={platform.img}
                    alt={platform.title}
                    className="h-24 mx-auto mb-4 object-contain rounded border-2"
                  />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {platform.title}
                  </h3>
                  <p className="text-sm text-gray-700">{platform.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="relative bg-cover bg-center py-20 px-8 text-center text-white"
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Explore Our Platforms</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            From trade to social platforms, pet care to construction — EGC India
            creates digital ecosystems that make an impact.
          </p>
          <Button
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
            onClick={() => navigate("/get-started")}
          >
            Get Started
          </Button>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gray-50 py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {[
              "Automotive",
              "Aerospace",
              "Heavy Industry",
              "Energy & Utilities",
              "Medical Devices",
              "Construction & Real Estate",
              "Digital Commerce",
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="shadow-md">
                  <CardContent className="p-4 font-semibold text-blue-900">
                    {industry}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Intern Opportunities Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 px-4 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-900">
          Intern Opportunities at EGC India
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-6 text-lg">
          We believe in shaping the next generation of innovators. Our
          internships give students and fresh graduates a unique platform to{" "}
          <span className="font-semibold text-blue-700">
            learn, create, and lead
          </span>{" "}
          within real business and technology projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-6">
          {[
            {
              title: "Technology Internships",
              desc: "Hands-on experience in app development, AI, cloud, and blockchain innovation.",
            },
            {
              title: "Commercial Services Internships",
              desc: "Work on EXIM trade, procurement, and compliance projects with global exposure.",
            },
            {
              title: "Creative & Design Internships",
              desc: "Contribute to product UI/UX, branding, and investor-ready presentations.",
            },
          ].map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="shadow-lg hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">{role.desc}</p>
                  <Button
                    className="bg-blue-900 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-800"
                    onClick={() => navigate("/apply")}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-blue-900 text-white py-12 px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Why Choose EGC India?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            "Global + Local Expertise",
            "Innovation-First Approach",
            "Proven Platforms & Successful Pilots",
            "Strategic Partnerships (AECCI & Global Alliances)",
            "Multi-Sector Portfolio",
            "Commitment to Long-Term Growth",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-blue-800 shadow-md">
                <CardContent className="p-6 text-lg font-bold text-white">
                  {item}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gradient-to-r from-yellow-400 to-yellow-400 py-12 px-4 text-center text-blue-900"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let’s Grow Together
        </h2>
        <p className="mb-4 text-lg">
          Partner with EGC India for commercial services, technology innovation,
          and career growth opportunities.
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
      </motion.section>
    </div>
  );
}
