import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import globalTradeAndTechnology from "@/assets/images/backgrounds/globaltradetech.webp";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-blue-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About EGC India
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
            EGC India (Econs Gateway Commercial india ) is a pioneer in bridging{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Innovation
            </span>
            . Our mission is to create value ecosystems that connect businesses,
            industries, and people across global markets.
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
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        initial="visible"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center max-w-6xl mx-auto"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-2 sm:mb-4">
            At EGC India, we believe in building more than just services — we
            build platforms, partnerships, and pathways for businesses to
            thrive. Backed by a global network, we deliver excellence in EXIM
            trade, procurement, compliance, and technology-driven solutions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Our teams work at the intersection of commerce and innovation,
            ensuring measurable impact, compliance with international standards,
            and long-term scalability.
          </p>
        </div>
        <div className="relative rounded-2xl shadow-lg h-48 sm:h-64 md:h-72 overflow-hidden">
          <img
            src={globalTradeAndTechnology}
            alt="Global Trade and Technology"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-900">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    To empower enterprises with world-class EXIM services and
                    digital platforms that simplify global trade, optimize
                    costs, and create sustainable growth opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-900">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    To be India’s most trusted partner in commercial services
                    and technology innovation — transforming industries with
                    transparency, efficiency, and innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Integrity",
                desc: "We operate with complete transparency, ethical practices, and respect for global compliance standards.",
              },
              {
                title: "Innovation",
                desc: "We embed AI, cloud, and emerging technologies into every service to deliver smarter solutions.",
              },
              {
                title: "Collaboration",
                desc: "We believe in strong partnerships — with clients, associations, and communities — to create mutual growth.",
              },
            ].map((value, idx) => (
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
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-700">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-blue-900">
          Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {[
            {
              title: "Zaheer Bukhari",
              subtitle: "Founder & Visionary",
              desc: "Driving EGC India’s mission to bridge commercial excellence with technology innovation, while forging partnerships with global trade associations.",
            },
            {
              title: "Advisory Board",
              subtitle: "Industry Experts & Mentors",
              desc: "Our advisory network brings together leaders from trade, technology, and finance to guide strategy, compliance, and innovation.",
            },
          ].map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                    {leader.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {leader.subtitle}
                  </p>
                  <p className="text-sm text-gray-700">{leader.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact & Partnerships */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-blue-900">
            Impact & Partnerships
          </h2>
          <p className="max-w-3xl sm:max-w-4xl mx-auto text-center mb-6 sm:mb-10 text-base sm:text-lg">
            Through strong partnerships with organizations like{" "}
            <span className="font-semibold">AECCI</span> and global EXIM
            networks, EGC India continues to create measurable impact in trade
            facilitation, procurement transparency, and digital ecosystems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              "250+ Programs Managed Globally",
              "Presence in 16+ Countries",
              "Trusted Partnerships with Industry Leaders",
            ].map((impact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6 text-center font-semibold text-blue-900">
                    {impact}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="bg-gradient-to-r from-yellow-400 to-yellow-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center text-blue-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Partner with EGC India
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Join us in building a future where global trade and technology unite
            for business excellence. Let’s collaborate to unlock growth
            opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-full"
              onClick={() => navigate("/download-profile")} // Adjust path if needed
            >
              Download Profile
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
